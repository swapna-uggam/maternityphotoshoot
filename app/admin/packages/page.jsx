
'use client';

import { useState, useEffect } from 'react';
import { dbB } from '../../admin/firebase/configB';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

export default function AddPackagePage() {
  const [formData, setFormData] = useState({
    title: '', price: '', duration: '', coverage: '', tag: '',
    description: '', story: '', color: '', textBgColor: '', textFontColor: '', borderColor: '',
    badge: '', badgeName: '', badgeTextColor: '', badgeBackgroundColor: '', badgeBorderColor: '',
    image: '', image1: '', image2: '', image3: '', galleryUrl: '',
    features: '', gear: '', deliverables: '', alldeliverables: '',
    blogTitle: '', blogLink: '', blogImageUrl: '',
  });

  const [packages, setPackages] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchPackages = async () => {
    const querySnapshot = await getDocs(collection(dbB, 'packages'));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPackages(data);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => {
    setFormData({
      title: '', price: '', duration: '', coverage: '', tag: '',
      description: '', story: '', color: '', textBgColor: '', textFontColor: '', borderColor: '',
      badge: '', badgeName: '', badgeTextColor: '', badgeBackgroundColor: '', badgeBorderColor: '',
      image: '', image1: '', image2: '', image3: '', galleryUrl: '',
      features: '', gear: '', deliverables: '', alldeliverables: '',
      blogTitle: '', blogLink: '', blogImageUrl: '',
    });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      features: formData.features.split('\n').filter(Boolean),
      gear: formData.gear.split('\n').filter(Boolean),
      deliverables: formData.deliverables.split('\n').filter(Boolean),
      alldeliverables: formData.alldeliverables.split('\n').filter(Boolean),
      cameraGearNotes: [],
      complimentary: [],
      deliverablesNotes: [],
      seoKeywords: [],
      services: [],
      relatedBlogs: [{
        title: formData.blogTitle,
        link: formData.blogLink,
        imageUrl: formData.blogImageUrl,
      }],
    };

    try {
      if (editingId) {
        await updateDoc(doc(dbB, 'packages', editingId), payload);
      } else {
        await addDoc(collection(dbB, 'packages'), payload);
      }
      await fetchPackages();
      resetForm();
    } catch (error) {
      console.error('Error submitting package:', error);
    }
  };

  const handleEdit = (pkg) => {
    setFormData({
      ...pkg,
      features: (pkg.features || []).join('\n'),
      gear: (pkg.gear || []).join('\n'),
      deliverables: (pkg.deliverables || []).join('\n'),
      alldeliverables: (pkg.alldeliverables || []).join('\n'),
      blogTitle: pkg.relatedBlogs?.[0]?.title || '',
      blogLink: pkg.relatedBlogs?.[0]?.link || '',
      blogImageUrl: pkg.relatedBlogs?.[0]?.imageUrl || '',
    });
    setEditingId(pkg.id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(dbB, 'packages', id));
      await fetchPackages();
    } catch (error) {
      console.error('Error deleting package:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        {editingId ? '✏️ Edit Package' : '📦 Add New Package'}
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(24).keys()].map(i => {
          const fields = [
            'title','price','duration','coverage','tag','description','story','color','textBgColor','textFontColor','borderColor',
            'badge','badgeName','badgeTextColor','badgeBackgroundColor','badgeBorderColor','image','image1','image2','image3','galleryUrl',
            'blogTitle','blogLink','blogImageUrl']
          return (
            <input
              key={fields[i]}
              name={fields[i]}
              value={formData[fields[i]]}
              onChange={handleChange}
              placeholder={fields[i]}
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
            />
          );
        })}

        {['features','gear','deliverables','alldeliverables'].map((name) => (
          <textarea
            key={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={name}
            rows={3}
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 col-span-2"
          />
        ))}

        <div className="col-span-2 flex justify-center pt-4 gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-green-700 font-semibold shadow"
          >
            {editingId ? 'Update Package' : 'Submit Package'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-300 text-black px-6 py-3 rounded-md hover:bg-gray-400 font-semibold shadow"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">📋 Submitted Packages</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {packages.map(pkg => (
            <div key={pkg.id} className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              {pkg.image && <img src={pkg.image} alt={pkg.title} className="h-48 w-full object-cover" />}
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold text-blue-700">{pkg.title}</h3>
                <p>Price: ₹{pkg.price}</p>
                <p>Duration: {pkg.duration}</p>
                <p>Coverage: {pkg.coverage}</p>
                <p>Description: {pkg.description || 'Not provided'}</p>
                <p>Tag: {pkg.tag}</p>
                <p>Story: {pkg.story}</p>
                <p>Badge: {pkg.badge} - {pkg.badgeName}</p>
                <p>Colors: BG {pkg.textBgColor}, Font {pkg.textFontColor}, Border {pkg.borderColor}</p>
                <div>
                  <strong>Features:</strong>
                  <ul className="list-disc ml-5">{pkg.features?.map((f, i) => <li key={i}>{f}</li>)}</ul>
                </div>
                <div>
                  <strong>Gear:</strong>
                  <ul className="list-disc ml-5">{pkg.gear?.map((g, i) => <li key={i}>{g}</li>)}</ul>
                </div>
                <div>
                  <strong>Deliverables:</strong>
                  <ul className="list-disc ml-5">{pkg.deliverables?.map((d, i) => <li key={i}>{d}</li>)}</ul>
                </div>
                <div>
                  <strong>All Deliverables:</strong>
                  <ul className="list-disc ml-5">{pkg.alldeliverables?.map((a, i) => <li key={i}>{a}</li>)}</ul>
                </div>
                <div className="flex gap-2">
                  {[pkg.image1, pkg.image2, pkg.image3].filter(Boolean).map((url, i) => (
                    <img key={i} src={url} alt={`img-${i}`} className="h-16 w-16 object-cover rounded" />
                  ))}
                </div>
                {pkg.relatedBlogs?.[0] && (
                  <div>
                    <strong>Blog:</strong> <a href={pkg.relatedBlogs[0].link} target="_blank" className="text-blue-600 underline">{pkg.relatedBlogs[0].title}</a>
                  </div>
                )}
                <div className="flex justify-between mt-4">
                  <button onClick={() => handleEdit(pkg)} className="px-3 py-1 text-sm bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded shadow">Edit</button>
                  <button onClick={() => handleDelete(pkg.id)} className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white font-semibold rounded shadow">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
