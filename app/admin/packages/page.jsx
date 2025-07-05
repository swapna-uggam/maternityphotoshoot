// 'use client';

// import { useState } from 'react';
// import { db } from '../../admin/firebase/configB'; // Adjust path if needed
// import { collection, addDoc } from 'firebase/firestore';

// export default function AddPackagePage() {
//   const [formData, setFormData] = useState({
//     title: '', price: '', duration: '', coverage: '', tag: '',
//     description: '', story: '', color: '', textBgColor: '', textFontColor: '', borderColor: '',
//     badge: '', badgeName: '', badgeTextColor: '', badgeBackgroundColor: '', badgeBorderColor: '',
//     image: '', image1: '', image2: '', image3: '', galleryUrl: '',
//     features: '', gear: '', deliverables: '', alldeliverables: '',
//     blogTitle: '', blogLink: '', blogImageUrl: '',
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...formData,
//       features: formData.features.split('\n'),
//       gear: formData.gear.split('\n'),
//       deliverables: formData.deliverables.split('\n'),
//       alldeliverables: formData.alldeliverables.split('\n'),
//       cameraGearNotes: [], complimentary: [], deliverablesNotes: [],
//       seoKeywords: [], services: [],
//       relatedBlogs: [{
//         title: formData.blogTitle,
//         link: formData.blogLink,
//         imageUrl: formData.blogImageUrl,
//       }],
//     };

//     try {
//       await addDoc(collection(db, 'packages'), payload);
//       alert('✅ Package submitted successfully!');
//       setFormData({ ...formData, title: '' });
//     } catch (error) {
//       console.error('❌ Failed to submit:', error);
//       alert('Error adding package. Check console.');
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
//       <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">📦 Add New Package</h1>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Title & Price */}
//         <input name="title" value={formData.title} onChange={handleChange} placeholder="Title *" className="form-input" required />
//         <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="form-input" />

//         <input name="duration" value={formData.duration} onChange={handleChange} placeholder="Duration" className="form-input" />
//         <input name="coverage" value={formData.coverage} onChange={handleChange} placeholder="Coverage" className="form-input" />
//         <input name="tag" value={formData.tag} onChange={handleChange} placeholder="Tagline / Tag" className="form-input" />

//         {/* Description & Story */}
//         <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="form-textarea md:col-span-2" rows={3} />
//         <textarea name="story" value={formData.story} onChange={handleChange} placeholder="Story" className="form-textarea md:col-span-2" rows={3} />

//         {/* Styling Options */}
//         <input name="color" value={formData.color} onChange={handleChange} placeholder="Theme Color (e.g. indigo)" className="form-input" />
//         <input name="textBgColor" value={formData.textBgColor} onChange={handleChange} placeholder="Text Background Color" className="form-input" />
//         <input name="textFontColor" value={formData.textFontColor} onChange={handleChange} placeholder="Text Font Color" className="form-input" />
//         <input name="borderColor" value={formData.borderColor} onChange={handleChange} placeholder="Border Color" className="form-input" />

//         {/* Badge */}
//         <input name="badge" value={formData.badge} onChange={handleChange} placeholder="Badge" className="form-input" />
//         <input name="badgeName" value={formData.badgeName} onChange={handleChange} placeholder="Badge Name" className="form-input" />
//         <input name="badgeTextColor" value={formData.badgeTextColor} onChange={handleChange} placeholder="Badge Text Color" className="form-input" />
//         <input name="badgeBackgroundColor" value={formData.badgeBackgroundColor} onChange={handleChange} placeholder="Badge Background Color" className="form-input" />
//         <input name="badgeBorderColor" value={formData.badgeBorderColor} onChange={handleChange} placeholder="Badge Border Color" className="form-input" />

//         {/* Images */}
//         <input name="image" value={formData.image} onChange={handleChange} placeholder="Main Image URL" className="form-input" />
//         <input name="image1" value={formData.image1} onChange={handleChange} placeholder="Image 1 URL" className="form-input" />
//         <input name="image2" value={formData.image2} onChange={handleChange} placeholder="Image 2 URL" className="form-input" />
//         <input name="image3" value={formData.image3} onChange={handleChange} placeholder="Image 3 URL" className="form-input" />
//         <input name="galleryUrl" value={formData.galleryUrl} onChange={handleChange} placeholder="Gallery URL Slug" className="form-input" />

//         {/* Feature Sets */}
//         <textarea name="features" value={formData.features} onChange={handleChange} placeholder="Features (one per line)" className="form-textarea md:col-span-2" rows={3} />
//         <textarea name="gear" value={formData.gear} onChange={handleChange} placeholder="Gear (one per line)" className="form-textarea md:col-span-2" rows={3} />
//         <textarea name="deliverables" value={formData.deliverables} onChange={handleChange} placeholder="Deliverables (one per line)" className="form-textarea md:col-span-2" rows={3} />
//         <textarea name="alldeliverables" value={formData.alldeliverables} onChange={handleChange} placeholder="All Deliverables (one per line)" className="form-textarea md:col-span-2" rows={3} />

//         {/* Blog */}
//         <h2 className="md:col-span-2 font-semibold text-gray-600 mt-4">📰 Related Blog</h2>
//         <input name="blogTitle" value={formData.blogTitle} onChange={handleChange} placeholder="Blog Title" className="form-input" />
//         <input name="blogLink" value={formData.blogLink} onChange={handleChange} placeholder="Blog Link" className="form-input" />
//         <input name="blogImageUrl" value={formData.blogImageUrl} onChange={handleChange} placeholder="Blog Image URL" className="form-input" />

//         {/* Submit Button */}
//         <div className="md:col-span-2 text-center mt-6">
//           <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-green-700 font-medium shadow">
//             ➕ Submit Package
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { dbB } from '../../admin/firebase/configB'; // Adjust if needed
import { collection, addDoc, getDocs } from 'firebase/firestore';

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

  useEffect(() => {
    const fetchPackages = async () => {
      const querySnapshot = await getDocs(collection(dbB, 'packages'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPackages(data);
    };
    fetchPackages();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
      await addDoc(collection(db, 'packages'), payload);
      alert('✅ Package submitted successfully!');
      setFormData({ ...formData, title: '' });

      // Refresh packages
      const querySnapshot = await getDocs(collection(db, 'packages'));
      const updatedPackages = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPackages(updatedPackages);
    } catch (error) {
      console.error('❌ Failed to submit:', error);
      alert('Error adding package. Check console.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">📦 Add New Package</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          ['title', 'Title *'],
          ['price', 'Price'],
          ['duration', 'Duration'],
          ['coverage', 'Coverage'],
          ['tag', 'Tagline / Tag'],
          ['description', 'Description'],
          ['story', 'Story'],
          ['color', 'Theme Color (e.g. indigo)'],
          ['textBgColor', 'Text Background Color'],
          ['textFontColor', 'Text Font Color'],
          ['borderColor', 'Border Color'],
          ['badge', 'Badge'],
          ['badgeName', 'Badge Name'],
          ['badgeTextColor', 'Badge Text Color'],
          ['badgeBackgroundColor', 'Badge Background Color'],
          ['badgeBorderColor', 'Badge Border Color'],
          ['image', 'Main Image URL'],
          ['image1', 'Image 1 URL'],
          ['image2', 'Image 2 URL'],
          ['image3', 'Image 3 URL'],
          ['galleryUrl', 'Gallery URL Slug'],
          ['blogTitle', 'Blog Title'],
          ['blogLink', 'Blog Link'],
          ['blogImageUrl', 'Blog Image URL'],
        ].map(([name, placeholder]) => (
          <input
            key={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        ))}

        {[
          ['features', 'Features (one per line)'],
          ['gear', 'Gear (one per line)'],
          ['deliverables', 'Deliverables (one per line)'],
          ['alldeliverables', 'All Deliverables (one per line)'],
        ].map(([name, placeholder]) => (
          <textarea
            key={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            rows={3}
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        ))}

        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-green-700 font-semibold shadow"
          >
            ➕ Submit Package
          </button>
        </div>
      </form>

      {/* Display Submitted Packages */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">📋 Submitted Packages</h2>
        {packages.length === 0 ? (
          <p className="text-gray-500">No packages yet.</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {packages.map(pkg => (
              <div
                key={pkg.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
              >
                {pkg.image && (
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-40 w-full object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-700">{pkg.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">💰 Price: ₹{pkg.price}</p>
                  <p className="text-sm text-gray-600 mb-1">⏱️ Duration: {pkg.duration}</p>
                  <p className="text-sm text-gray-600 mb-2">📍 Coverage: {pkg.coverage}</p>
                  <p className="text-gray-800 text-sm line-clamp-3">{pkg.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
