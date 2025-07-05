'use client';
import { useState, useEffect } from 'react';
import { db } from '../firebase/config'; // Adjust if needed
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import Link from 'next/link';
import Image from 'next/image';

export default function VideoAdminPage() {
  const [videos, setVideos] = useState([]);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    videoId: '',
    title: '',
    description: '',
    tags: '',
    priority: 0,
    category: '',
    publishedDate: '',
    duration: '',
    author: '',
    metaTitle: '',
    metaDescription: '',
    schemaMarkup: '',
  });

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, 'videos'));
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setVideos(data);
    setLoading(false);
  };

  const slugify = str =>
    str.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const generateSchema = data => {
    const thumbnail = `https://img.youtube.com/vi/${data.videoId}/hqdefault.jpg`;
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: data.title,
      description: data.description,
      thumbnailUrl: [thumbnail],
      uploadDate: data.publishedDate,
      duration: data.duration,
      author: {
        "@type": "Person",
        name: data.author,
      },
    }, null, 2);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };

    if (name === 'title' && !formData.metaTitle) {
      updated.metaTitle = slugify(value);
    }

    updated.schemaMarkup = generateSchema(updated);
    setFormData(updated);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const finalForm = {
      ...formData,
      schemaMarkup: generateSchema(formData),
    };

    if (editId) {
      await updateDoc(doc(db, 'videos', editId), finalForm);
      setEditId(null);
    } else {
      await addDoc(collection(db, 'videos'), finalForm);
    }

    setFormData({
      videoId: '',
      title: '',
      description: '',
      tags: '',
      priority: 0,
      category: '',
      publishedDate: '',
      duration: '',
      author: '',
      metaTitle: '',
      metaDescription: '',
      schemaMarkup: '',
    });

    fetchVideos();
  };

  const handleDelete = async id => {
    await deleteDoc(doc(db, 'videos', id));
    setVideos(videos.filter(v => v.id !== id));
  };

  const handleEdit = video => {
    setFormData({ ...video });
    setEditId(video.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col md:flex-row p-6 gap-8 bg-gray-100 min-h-screen">
      {/* Left: Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-white p-6 rounded shadow space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4">
          {editId ? 'Edit Video' : 'Add New Video'}
        </h2>

        {/* YouTube Video ID */}
        <div>
          <label className="block font-medium">YouTube Video ID</label>
          <input
            type="text"
            name="videoId"
            value={formData.videoId}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
          {formData.videoId && (
            <Image
              src={`https://img.youtube.com/vi/${formData.videoId}/hqdefault.jpg`}
              alt="Thumbnail Preview"
              className="mt-2 h-32 w-full object-cover border rounded"
            />
          )}
        </div>

        {/* Text Inputs */}
        {[
          { label: 'Title', name: 'title' },
          { label: 'Tags (comma separated)', name: 'tags' },
          { label: 'Priority', name: 'priority', type: 'number' },
          { label: 'Category', name: 'category' },
          { label: 'Published Date', name: 'publishedDate', type: 'date' },
          { label: 'Duration (ISO 8601)', name: 'duration' },
          { label: 'Author', name: 'author' },
          { label: 'Meta Title', name: 'metaTitle' },
          { label: 'Meta Description', name: 'metaDescription' },
        ].map(({ label, name, type = 'text' }) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
          </div>
        ))}

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full border rounded px-3 py-2 mt-1"
            required
          />
        </div>

        {/* Schema Markup */}
        <div>
          <label className="block font-medium">Schema Markup (JSON-LD)</label>
          <textarea
            name="schemaMarkup"
            value={formData.schemaMarkup}
            readOnly
            rows={6}
            className="w-full border bg-gray-100 rounded px-3 py-2 mt-1 font-mono text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {editId ? 'Update Video' : 'Submit Video'}
        </button>
      </form>

      {/* Right: Video Cards */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Videos</h2>

        {loading ? (
          <p className="text-gray-500">Loading videos...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map(video => (
              <div
                key={video.id}
                className="bg-white shadow-md rounded overflow-hidden"
              >
                {video.videoId ? (
                  <Image
                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-32 object-cover"
                  />
                ) : (
                  <div className="w-full h-32 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                    No Thumbnail
                  </div>
                )}

                <div className="p-3">
                  <h3 className="text-sm font-semibold mb-3 line-clamp-2">
                    {video.title}
                  </h3>

                  <div className="flex justify-between items-center">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded"
                      onClick={() => handleEdit(video)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded"
                      onClick={() => handleDelete(video.id)}
                    >
                      Delete
                    </button>
                  </div>

                  {/* {video.metaTitle && (
                    <Link
                      href={`/admin/videos/${video.metaTitle}`}
                      className="text-blue-600 text-xs hover:underline mt-2 block"
                    >
                      View Page
                    </Link>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


