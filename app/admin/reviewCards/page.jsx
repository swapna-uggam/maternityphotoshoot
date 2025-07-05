

// 'use client';
// import { useEffect, useState } from 'react';
// import { Star, Pencil } from 'lucide-react';
// import {
//   collection,
//   addDoc,
//   getDocs,
//   updateDoc,
//   doc,
//   serverTimestamp,
// } from 'firebase/firestore';
// import { db } from '../firebase/config';

// export default function ReviewCards() {
//   const [name, setName] = useState('');
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [comment, setComment] = useState('');
//   const [priority, setPriority] = useState('');
//   const [reviews, setReviews] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [docIdMap, setDocIdMap] = useState({});

//   const reviewsCollection = collection(db, 'reviews');

//   useEffect(() => {
//     const fetchReviews = async () => {
//       const snapshot = await getDocs(reviewsCollection);
//       const docs = snapshot.docs.map((docSnap) => {
//         const data = docSnap.data();
//         return {
//           id: data.localId,
//           name: data.name,
//           rating: data.rating,
//           comment: data.comment,
//           priority: data.priority,
//           createdAt: data.createdAt?.toDate().toLocaleString(),
//           editedAt: data.editedAt ? data.editedAt.toDate().toLocaleString() : null,
//           firebaseId: docSnap.id,
//         };
//       });

//       const map = {};
//       docs.forEach((r) => {
//         map[r.id] = r.firebaseId;
//       });

//       setReviews(docs.sort((a, b) => b.priority - a.priority));
//       setDocIdMap(map);
//     };

//     fetchReviews();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !comment || rating === 0 || priority === '') {
//       alert('Please fill out all fields, including priority (1–100).');
//       return;
//     }
//     if (priority < 1 || priority > 100) {
//       alert('Priority must be between 1 and 100.');
//       return;
//     }

//     const localId = editId || Date.now();
//     const reviewData = {
//       localId,
//       name,
//       rating,
//       comment,
//       priority: parseInt(priority),
//       ...(editId
//         ? { editedAt: serverTimestamp() }
//         : { createdAt: serverTimestamp() }),
//     };

//     try {
//       if (editId) {
//         const docRef = doc(db, 'reviews', docIdMap[editId]);
//         await updateDoc(docRef, reviewData);
//         const updated = reviews.map((r) =>
//           r.id === editId
//             ? {
//                 ...r,
//                 ...reviewData,
//                 editedAt: new Date().toLocaleString(),
//               }
//             : r
//         );
//         setReviews(updated);
//         setEditId(null);
//       } else {
//         const docRef = await addDoc(reviewsCollection, reviewData);
//         setReviews([
//           {
//             ...reviewData,
//             id: localId,
//             createdAt: new Date().toLocaleString(),
//           },
//           ...reviews,
//         ]);
//         setDocIdMap({ ...docIdMap, [localId]: docRef.id });
//       }

//       setName('');
//       setRating(0);
//       setHover(0);
//       setComment('');
//       setPriority('');
//     } catch (error) {
//       console.error('Error saving to Firestore:', error);
//     }
//   };

//   const handleEdit = (review) => {
//     setEditId(review.id);
//     setName(review.name);
//     setRating(review.rating);
//     setComment(review.comment);
//     setPriority(review.priority);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <main className="min-h-screen p-6 bg-gradient-to-br from-white to-blue-50">
//       <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
//         {/* Left: Review Form */}
//         <section className="w-full lg:w-1/2 bg-white border border-gray-300 rounded-2xl shadow-lg p-6">
//           <h2 className="text-2xl font-bold text-indigo-700 mb-6">
//             {editId ? '✏️ Edit Review' : '📬 Submit a Review'}
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <input
//               type="text"
//               placeholder="👤 Your Name"
//               className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />

//             <textarea
//               rows="3"
//               placeholder="💬 Your Review"
//               className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               required
//             ></textarea>

//             <input
//               type="number"
//               min="1"
//               max="100"
//               placeholder="🎯 Priority (1–100)"
//               className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               value={priority}
//               onChange={(e) => setPriority(e.target.value)}
//               required
//             />

//             <div className="flex items-center gap-1">
//               {[...Array(5)].map((_, index) => {
//                 const starValue = index + 1;
//                 return (
//                   <button
//                     type="button"
//                     key={index}
//                     onClick={() => setRating(starValue)}
//                     onMouseEnter={() => setHover(starValue)}
//                     onMouseLeave={() => setHover(0)}
//                   >
//                     <Star
//                       className={`w-6 h-6 transition ${
//                         starValue <= (hover || rating)
//                           ? 'text-yellow-400'
//                           : 'text-gray-300'
//                       }`}
//                       fill={starValue <= (hover || rating) ? '#facc15' : 'none'}
//                     />
//                   </button>
//                 );
//               })}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-2 rounded-lg"
//             >
//               {editId ? 'Update Review' : 'Add Review'}
//             </button>
//           </form>
//         </section>

//         {/* Right: Submitted Reviews */}
//         <section className="w-full lg:w-1/2">
//           <h2 className="text-3xl font-bold mb-6 text-sky-700">📝 Submitted Reviews</h2>
//           {reviews.length === 0 ? (
//             <p className="text-gray-500">No reviews yet.</p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
//               {reviews.map((review) => (
//                 <div
//                   key={review.id}
//                   className="p-4 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
//                 >
//                   <div className="flex justify-between items-start mb-2">
//                     <div>
//                       <h3 className="text-md font-semibold text-gray-800">{review.name}</h3>
//                       <p className="text-xs text-gray-500">
//                         {review.editedAt
//                           ? `✏️ Edited: ${review.editedAt}`
//                           : `🕒 Posted: ${review.createdAt}`}
//                       </p>
//                       <p className="text-xs text-gray-600">🎯 Priority: {review.priority}</p>
//                     </div>
//                     <div className="flex gap-0.5">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className={`w-4 h-4 ${
//                             i < review.rating ? 'text-yellow-400' : 'text-gray-300'
//                           }`}
//                           fill={i < review.rating ? '#facc15' : 'none'}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                   <p className="text-sm text-gray-800 mb-2">{review.comment}</p>
//                   <button
//                     onClick={() => handleEdit(review)}
//                     className="text-xs text-indigo-600 hover:underline inline-flex items-center gap-1"
//                   >
//                     <Pencil className="w-3 h-3" /> Edit
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>
//       </div>
//     </main>
//   );
// }


'use client';
import { useEffect, useState } from 'react';
import { Star, Pencil } from 'lucide-react';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase/config';

export default function ReviewCards() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [priority, setPriority] = useState('');
  const [reviews, setReviews] = useState([]);
  const [editId, setEditId] = useState(null);
  const [docIdMap, setDocIdMap] = useState({});

  useEffect(() => {
    const reviewsCollection = collection(db, 'reviews'); // ✅ Moved inside effect

    const fetchReviews = async () => {
      const snapshot = await getDocs(reviewsCollection);
      const docs = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: data.localId,
          name: data.name,
          rating: data.rating,
          comment: data.comment,
          priority: data.priority,
          createdAt: data.createdAt?.toDate().toLocaleString(),
          editedAt: data.editedAt ? data.editedAt.toDate().toLocaleString() : null,
          firebaseId: docSnap.id,
        };
      });

      const map = {};
      docs.forEach((r) => {
        map[r.id] = r.firebaseId;
      });

      setReviews(docs.sort((a, b) => b.priority - a.priority));
      setDocIdMap(map);
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !comment || rating === 0 || priority === '') {
      alert('Please fill out all fields, including priority (1–100).');
      return;
    }
    if (priority < 1 || priority > 100) {
      alert('Priority must be between 1 and 100.');
      return;
    }

    const localId = editId || Date.now();
    const reviewData = {
      localId,
      name,
      rating,
      comment,
      priority: parseInt(priority),
      ...(editId
        ? { editedAt: serverTimestamp() }
        : { createdAt: serverTimestamp() }),
    };

    try {
      if (editId) {
        const docRef = doc(db, 'reviews', docIdMap[editId]);
        await updateDoc(docRef, reviewData);
        const updated = reviews.map((r) =>
          r.id === editId
            ? {
                ...r,
                ...reviewData,
                editedAt: new Date().toLocaleString(),
              }
            : r
        );
        setReviews(updated);
        setEditId(null);
      } else {
        const reviewsCollection = collection(db, 'reviews'); // Also needed here
        const docRef = await addDoc(reviewsCollection, reviewData);
        setReviews([
          {
            ...reviewData,
            id: localId,
            createdAt: new Date().toLocaleString(),
          },
          ...reviews,
        ]);
        setDocIdMap({ ...docIdMap, [localId]: docRef.id });
      }

      setName('');
      setRating(0);
      setHover(0);
      setComment('');
      setPriority('');
    } catch (error) {
      console.error('Error saving to Firestore:', error);
    }
  };

  const handleEdit = (review) => {
    setEditId(review.id);
    setName(review.name);
    setRating(review.rating);
    setComment(review.comment);
    setPriority(review.priority);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen p-6 bg-gradient-to-br from-white to-blue-50">
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
        {/* Left: Review Form */}
        <section className="w-full lg:w-1/2 bg-white border border-gray-300 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">
            {editId ? '✏️ Edit Review' : '📬 Submit a Review'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="👤 Your Name"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <textarea
              rows="3"
              placeholder="💬 Your Review"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>

            <input
              type="number"
              min="1"
              max="100"
              placeholder="🎯 Priority (1–100)"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            />

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHover(starValue)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <Star
                      className={`w-6 h-6 transition ${
                        starValue <= (hover || rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill={starValue <= (hover || rating) ? '#facc15' : 'none'}
                    />
                  </button>
                );
              })}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-2 rounded-lg"
            >
              {editId ? 'Update Review' : 'Add Review'}
            </button>
          </form>
        </section>

        {/* Right: Submitted Reviews */}
        <section className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-sky-700">📝 Submitted Reviews</h2>
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="p-4 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-md font-semibold text-gray-800">{review.name}</h3>
                      <p className="text-xs text-gray-500">
                        {review.editedAt
                          ? `✏️ Edited: ${review.editedAt}`
                          : `🕒 Posted: ${review.createdAt}`}
                      </p>
                      <p className="text-xs text-gray-600">🎯 Priority: {review.priority}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill={i < review.rating ? '#facc15' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-800 mb-2">{review.comment}</p>
                  <button
                    onClick={() => handleEdit(review)}
                    className="text-xs text-indigo-600 hover:underline inline-flex items-center gap-1"
                  >
                    <Pencil className="w-3 h-3" /> Edit
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
