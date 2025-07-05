

// import React from 'react';
// import { db } from '../../admin/firebase/config'; // ✅ Adjust path if needed
// import { collection, getDocs, query, where } from 'firebase/firestore';

// export default async function VideoDetailPage({ params }) {
//   // ✅ Use the param name matching your slug folder: [metatitle]
//   const metaTitle = decodeURIComponent(params?.metatitle || '').trim();

//   let video = null;

//   try {
//     // ✅ Make sure your Firestore field is named "metaTitle"
//     const q = query(
//       collection(db, 'videos'),
//       where('metaTitle', '==', metaTitle)
//     );

//     const snapshot = await getDocs(q);

//     if (!snapshot.empty) {
//       video = { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
//     }
//   } catch (error) {
//     console.error('❌ Firestore error:', error);
//   }

//   // ✅ Fallback if no video found
//   if (!video) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-xl text-red-500">
//           ❌ No video found for: <strong>{metaTitle}</strong>
//         </p>
//       </div>
//     );
//   }

//   // ✅ Construct YouTube embed URL
//   const videoUrl = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&loop=1&playlist=${video.videoId}&controls=1`;

//   // ✅ UI
//   return (
//     <div className="w-full min-h-screen bg-white py-10 px-4">
//       <div className="max-w-5xl mx-auto">
//         {/* Title */}
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           {video.title}
//         </h1>

//         {/* Video Player */}
//         <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
//           <iframe
//             src={videoUrl}
//             title={video.title}
//             className="w-full h-full"
//             allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
//             allowFullScreen
//           />
//         </div>

//         {/* Optional Description */}
//         {video.description && (
//           <p className="mt-6 text-lg text-gray-600 text-center">
//             {video.description}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { db } from '../../admin/firebase/config'; // Adjust if needed
import { collection, getDocs, query, where } from 'firebase/firestore';
import Link from 'next/link';

export default async function VideoDetailPage({ params }) {
  const metaTitle = decodeURIComponent(params?.metatitle || '').trim();
  let video = null;

  try {
    const q = query(
      collection(db, 'videos'),
      where('metaTitle', '==', metaTitle)
    );
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      video = { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
    }
  } catch (error) {
    console.error('❌ Firestore error:', error);
  }

  if (!video) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-xl text-red-600 font-semibold">
          ❌ No video found for: <strong>{metaTitle}</strong>
        </p>
      </div>
    );
  }

  const videoUrl = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&loop=1&playlist=${video.videoId}&controls=1`;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-8 drop-shadow">
          {video.title}
        </h1>

        {/* YouTube Video */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl mb-8">
          <iframe
            src={videoUrl}
            title={video.title}
            className="w-full h-full"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Date & Location */}
        <div className="bg-white border border-blue-200 rounded-lg p-4 text-center text-gray-700 mb-6 shadow">
          {video.date && (
            <p className="text-md sm:text-lg font-medium">
              📅 <strong>Date:</strong> {video.date}
            </p>
          )}
          {video.location && (
            <p className="text-md sm:text-lg font-medium mt-2">
              📍 <strong>Location:</strong> {video.location}
            </p>
          )}
        </div>

        {/* Description */}
        {video.description && (
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 shadow text-gray-800 text-base leading-relaxed whitespace-pre-line text-center">
            {video.description}
          </div>
        )}

        {/* Back Button */}
        <div className="text-center mt-10">
          <Link href="/#videos">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:from-indigo-500 hover:to-blue-500 transition font-semibold shadow-lg">
              🔙 Back to Maternity Videos
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
