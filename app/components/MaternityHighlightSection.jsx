

// 'use client';

// import React, { useEffect, useState, useRef } from 'react';
// import Link from 'next/link';
// import { db } from '../admin/firebase/config';
// import { collection, getDocs } from 'firebase/firestore';

// export default function MaternityHighlightSection() {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const playerRef = useRef(null);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, 'videos'));
//         const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

//         const sorted = data
//           .filter((video) => video.videoId && video.metaTitle)
//           .sort((a, b) => a.priority - b.priority);

//         setVideos(sorted);
//         setSelectedVideo(sorted[0]);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   const handleVideoSelect = (video) => {
//     setSelectedVideo(video);
//     if (playerRef.current) {
//       playerRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   if (!selectedVideo) return null;

//   const videoId = selectedVideo.videoId;
//   const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1`;

//   return (
//     <div className="w-full bg-white mt-[-50px] py-10 px-4">

//       {/* Section Heading */}
//       <div className="text-center mt-[-20px] mb-10 ">
//         <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800">Maternity Video Highlights</h2>
//         <p className="text-gray-600 mt-2 text-xs sm:text-base 2xl:text-3xl">A glimpse into beautiful maternity moments</p>
//       </div>

//       {/* Main Layout: Video on Left, Playlist on Right */}
//       <div className="flex flex-col md:flex-row gap-6 items-start" ref={playerRef}>
        
//         {/* Left: Main Video Player */}
//         <div className="w-full md:w-3/4 rounded-xl overflow-hidden shadow-lg">
//           <iframe
//             key={videoId}
//             className="w-full aspect-video"
//             src={youtubeUrl}
//             title={selectedVideo.title}
//             allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
//             allowFullScreen
//           />
//           {/* Video Title */}
//           <div className="text-center mt-3">
//             <Link
//               href={`/videos/${selectedVideo.metaTitle}`}
//               className="text-lg font-semibold text-blue-700 hover:underline"
//             >
//               {selectedVideo.title}
//             </Link>
//           </div>
//         </div>

//         {/* Right: Playlist */}
//         <div className="w-full md:w-1/4 max-h-[600px] overflow-y-auto bg-gray-100 rounded-lg p-3 shadow-inner">
//           <h3 className="text-md font-semibold text-gray-700 mb-4">📋 Playlist</h3>
//           {videos
//             .filter((video) => video.videoId !== selectedVideo.videoId)
//             .map((video) => (
//               <div
//                 key={video.id}
//                 onClick={() => handleVideoSelect(video)}
//                 className="mb-3 cursor-pointer hover:bg-white hover:shadow-md rounded-md overflow-hidden transition"
//               >
//                 <div className="flex gap-3 items-center">
//                   <img
//                     src={`https://img.youtube.com/vi/${video.videoId}/default.jpg`}
//                     alt={video.title}
//                     className="w-20 h-14 object-cover rounded-sm"
//                   />
//                   <p className="text-sm font-medium text-gray-700">{video.title}</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { db } from '../admin/firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import Image from 'next/image';

export default function MaternityHighlightSection() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'videos'));
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        const sorted = data
          .filter((video) => video.videoId && video.metaTitle)
          .sort((a, b) => a.priority - b.priority);

        setVideos(sorted);
        setSelectedVideo(sorted[0]);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!selectedVideo) return null;

  const videoId = selectedVideo.videoId;
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1`;

  return (
    <div className="w-full bg-white mt-[-50px] py-10 px-4">
      
      {/* Section Heading */}
      <div className="text-center mt-[-20px] mb-10">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800">
          Maternity Video Highlights
        </h2>
        <p className="text-gray-600 mt-2 text-xs sm:text-base 2xl:text-3xl">
          A glimpse into beautiful maternity moments
        </p>
      </div>

      {/* Layout: Video Left, Playlist Right */}
      <div className="flex flex-col md:flex-row gap-6 items-start" ref={playerRef}>
        
        {/* Left: Main Video */}
        <div className="w-full md:w-3/4 rounded-xl overflow-hidden shadow-lg">
          <iframe
            key={videoId}
            className="w-full aspect-video"
            src={youtubeUrl}
            title={selectedVideo.title}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
          />
          {/* Clickable Video Title */}
          <div className="text-center mt-3">
            <Link
              href={`/videos/${selectedVideo.metaTitle}`}
              className="text-lg font-semibold text-blue-700 hover:underline"
            >
              {selectedVideo.title}
            </Link>
          </div>
        </div>

        {/* Right: Playlist */}
        <div className="w-full md:w-1/4 max-h-[600px] overflow-y-auto bg-gray-100 rounded-lg p-3 shadow-inner">
          <h3 className="text-md font-semibold text-gray-700 mb-4">📋 Playlist</h3>
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => handleVideoSelect(video)}
              className={`mb-3 cursor-pointer hover:bg-white hover:shadow-md rounded-md overflow-hidden transition ${
                video.videoId === selectedVideo.videoId ? 'border-2 border-blue-500 bg-white' : ''
              }`}
            >
              <div className="flex gap-3 items-center">
                <Image
                  src={`https://img.youtube.com/vi/${video.videoId}/default.jpg`}
                  alt={video.title}
                 height={100}
                 width={100} 
                  className="object-cover rounded-sm h-12 w-16"
                />
                <p className="text-sm font-medium text-gray-700">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
