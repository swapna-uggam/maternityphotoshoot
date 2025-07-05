'use client';

import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import Image from 'next/image';

export default function GalleryImagesPage() {
  const [priority, setPriority] = useState('');
  const [url, setUrl] = useState('');
  const [images, setImages] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchImages = async () => {
    const snapshot = await getDocs(collection(db, 'galleryImages'));
    const fetched = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setImages(fetched.sort((a, b) => a.priority - b.priority));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url || !priority) return alert('Please fill all fields');

    try {
      if (editingId) {
        await updateDoc(doc(db, 'galleryImages', editingId), {
          url,
          priority: Number(priority),
        });
        setEditingId(null);
      } else {
        await addDoc(collection(db, 'galleryImages'), {
          url,
          priority: Number(priority),
        });
      }

      setUrl('');
      setPriority('');
      fetchImages();
    } catch (err) {
      console.error('Error saving image:', err);
    }
  };

  const handleEdit = (img) => {
    setUrl(img.url);
    setPriority(img.priority);
    setEditingId(img.id);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this image?')) return;
    await deleteDoc(doc(db, 'galleryImages', id));
    fetchImages();
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#333]">🖼️ Gallery Image Manager</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form on Left */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <h3 className="text-xl font-semibold text-[#4B5563] mb-4">
            {editingId ? 'Edit Image' : 'Add New Image'}
          </h3>

          <div>
            <label className="block text-gray-700 mb-1">Priority</label>
            <input
              type="number"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              placeholder="e.g. 1"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Image URL</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {editingId ? 'Update Image' : 'Add Image'}
          </button>
        </form>

        {/* Gallery Grid on Right */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="bg-white border rounded-lg shadow-sm p-2 relative"
            >
              <Image
                src={img.url}
                alt={`Gallery Image ${img.priority}`}
                className="w-full h-32 object-cover rounded"
              />
              <p className="text-sm text-center mt-1">Priority: {img.priority}</p>
              <div className="flex justify-center gap-2 mt-2">
                <button
                  onClick={() => handleEdit(img)}
                  className="px-2 py-0.5 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(img.id)}
                  className="px-2 py-0.5 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

