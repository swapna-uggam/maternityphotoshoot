
// 'use client';

// import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// import ContactSection from './ContactSection';

// export default function Contact() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showFlash, setShowFlash] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     duedate: '',
//     location: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Trigger camera flash effect
//     setShowFlash(true);
//     setTimeout(() => setShowFlash(false), 300);
    
//     // Simulate form submission (replace with actual API call)
//     setTimeout(() => {
//       console.log('Form submitted:', formData);
//       setIsSubmitting(false);
//       setShowSuccess(true);
      
//       // Reset form after showing success
//       setTimeout(() => {
//         setFormData({ 
//           name: '', 
//           email: '', 
//           phone: '', 
//           duedate: '', 
//           location: '', 
//           message: '' 
//         });
//         setShowSuccess(false);
//       }, 3000);
//     }, 1500);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <section id="Contact" className="bg-pink-50 py-6 lg:pb-1 relative overflow-hidden">
//       {/* Enhanced Camera Flash Effect */}
//       <AnimatePresence>
//         {showFlash && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.9 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="absolute inset-0 bg-white z-50 pointer-events-none"
//             style={{ filter: 'brightness(1.2)' }}
//           />
//         )}
//       </AnimatePresence>

//       <main className=" mx-auto px-4 lg:pb-1 sm:px-6 lg:px-8">
//         <div className=" mx-auto text-center mb-16">
//           <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-4">Contact Our Maternity Photographers</h1>
//           <p className="text-gray-600 text-xs sm:text-base 2xl:text-3xl">
//             Fill out the form below to book your maternity photoshoot or ask any questions. We proudly serve all regions across the UK, including London.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 mt-[-40px] md:grid-cols-2 gap-12">
//           {/* Form Section */}
//           <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
//             <AnimatePresence>
//               {showSuccess ? (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   className="text-center py-12"
//                 >
//                   <motion.div
//                     animate={{ 
//                       scale: [1, 1.1, 1],
//                       rotate: [0, 5, -5, 0]
//                     }}
//                     transition={{ duration: 0.8 }}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-16 h-16 text-pink-500 mx-auto mb-6"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       style={{ filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.6))' }}
//                     >
//                       <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
//                     </svg>
//                   </motion.div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Photo Request Sent!</h3>
//                   <p className="text-gray-600">We've captured your details and will contact you soon.</p>
//                   <motion.button
//                     onClick={() => setShowSuccess(false)}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-lg transition"
//                     style={{ boxShadow: '0 4px 14px rgba(236, 72, 153, 0.4))' }}
//                   >
//                     Send Another Message
//                   </motion.button>
//                 </motion.div>
//               ) : (
//                 <>
//                   <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     {[
//                       { id: 'name', type: 'text', label: 'Your Name', required: true },
//                       { id: 'email', type: 'email', label: 'Email Address', required: true },
//                       { id: 'phone', type: 'tel', label: 'Phone Number' },
//                       { id: 'duedate', type: 'date', label: 'Expected Photography' },
//                     ].map(({ id, type, label, required }) => (
//                       <div key={id}>
//                         <label htmlFor={id} className="block text-xs lg:text-lg font-medium text-gray-700 mb-1">
//                           {label}
//                         </label>
//                         <input id={id}
//                           name={id}
//                           type={type}
//                           required={required}
//                           value={formData[id]}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition"
//                         />
//                       </div>
//                     ))}

//                     <div>
//                       <label htmlFor="location" className="block text-sm lg:text-lg font-medium text-gray-700 mb-1">
//                         Post Code
//                       </label>
//                       <input
//                         id="location"
//                         name="location"
//                         type="text"
//                         placeholder="e.g. SW1A 1AA"
//                         value={formData.location}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="message" className="block text-sm lg:text-lg font-medium text-gray-700 mb-1">
//                         Your Message
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows="4"
//                         value={formData.message}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
//                       ></textarea>
//                     </div>

//                     <motion.button
//                       type="submit"
//                       className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 relative overflow-hidden"
//                       whileTap={{ scale: 0.95 }}
//                       disabled={isSubmitting}
//                       style={{ boxShadow: '0 4px 14px rgba(236, 72, 153, 0.4))' }}
//                     >
//                       {isSubmitting ? (
//                         <motion.span
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           className="flex items-center justify-center"
//                         >
//                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                           Sending...
//                         </motion.span>
//                       ) : (
//                         <motion.span
//                           initial={{ opacity: 1 }}
//                           animate={{ opacity: 1 }}
//                         >
//                           <span className="flex text-xs lg:text-lg items-center justify-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                               <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
//                             </svg>
//                             Send Message
//                           </span>
//                         </motion.span>
//                       )}
//                     </motion.button>
//                   </form>

//                   {/* Camera icon that appears during submission */}
//                   <AnimatePresence>
//                     {isSubmitting && (
//                       <motion.div
//                         initial={{ scale: 0, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         exit={{ scale: 0, opacity: 0 }}
//                         transition={{ delay: 0.5 }}
//                         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="w-16 h-16 text-pink-500"
//                           viewBox="0 0 24 24"
//                           fill="currentColor"
//                           style={{ filter: 'drop-shadow(0 0 12px rgba(236, 72, 153, 0.5))' }}
//                         >
//                           <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
//                           <circle cx="12" cy="12" r="3" />
//                         </svg>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Contact Info Section */}
//           <div className="w-full h-auto mt-[-20px] lg:mt-0.5 flex flex-col">
//             <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden" style={{ maxHeight: '480px' }}>
//               {/* Floating Camera Animation - Now in background */}
//               <motion.div 
//                 className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ 
//                   scale: 1,
//                   opacity: 0.2, // Reduced opacity for background effect
//                   transition: { duration: 0.8, ease: "easeOut" }
//                 }}
//               >
//                 <motion.div
//                   className="relative"
//                   animate={{
//                     y: [0, -10, 0],
//                     rotate: [0, -5, 0, 5, 0],
//                   }}
//                   transition={{
//                     duration: 8,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-32 h-32 text-pink-400" // Larger and lighter color
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     style={{ filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.2))' }}
//                   >
//                     <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
//                     <circle cx="12" cy="12" r="3" />
//                   </svg>
//                 </motion.div>
//               </motion.div>

//               {/* Contact Info Content - Now in foreground */}
//               <div className="relative z-10">
//                 <h3 className="text-xl sm:text-2xl lg:text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
//                 <address className="text-gray-600 not-italic space-y-4 text-sm sm:text-base">
//                   {[
//                     {
//                       icon: <PhoneIcon className="w-5 h-5 text-pink-500 mr-3 shrink-0" aria-hidden="true" />,
//                       value: "+44 123 456 7890",
//                       href: "tel:+441234567890"
//                     },
//                     {
//                       icon: <EnvelopeIcon className="w-5 h-5 text-pink-500 mr-3 shrink-0" aria-hidden="true" />,
//                       value: "info@bumptobabyphoto.com",
//                       href: "mailto:info@bumptobabyphoto.com"
//                     },
//                     {
//                       icon: <MapPinIcon className="w-5 h-5 text-pink-500 mr-3 shrink-0" aria-hidden="true" />,
//                       value: "Snap U Photography, London, UK",
//                       href: "https://maps.google.com?q=123+Photography+Studio,+London,+UK"
//                     },
//                   ].map(({ icon, value, href }, i) => (
//                     <div key={i} className="flex items-start">
//                       {icon}
//                       <a href={href} target="_blank" rel="noopener noreferrer" className="break-words hover:text-pink-600 transition">
//                         {value}
//                       </a>
//                     </div>
//                   ))}
//                 </address>
//               </div>

//               {/* Floating Hearts */}
//               {[...Array(8)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute text-pink-400 pointer-events-none z-0"
//                   style={{
//                     fontSize: `${Math.random() * 16 + 8}px`,
//                     left: `${Math.random() * 80 + 10}%`,
//                     top: `${Math.random() * 80 + 10}%`,
//                     filter: 'drop-shadow(0 0 4px rgba(236, 72, 153, 0.2))'
//                   }}
//                   initial={{ opacity: 0, y: 0 }}
//                   animate={{
//                     opacity: [0, 0.4, 0],
//                     y: [-20, -80],
//                   }}
//                   transition={{
//                     duration: Math.random() * 4 + 4,
//                     delay: Math.random() * 3,
//                     repeat: Infinity,
//                     repeatDelay: Math.random() * 5,
//                   }}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//                     <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
//                   </svg>
//                 </motion.div>
//               ))}
//             </div>
//             <ContactSection/>
//           </div>
//         </div>
//       </main>
//     </section>
//   );
// }


'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { db } from '../admin/firebase/config'; // Assuming firebase.js is in your project root
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import ContactSection from './ContactSection';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    duedate: '',
    location: '',
    message: ''
  });

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  setShowFlash(true);
  setTimeout(() => setShowFlash(false), 300);

  try {
    // Save to Firebase
    await addDoc(collection(db, 'contactMessages'), {
      ...formData,
      createdAt: Timestamp.now()
    });

    // Send emails
    await fetch('/admin/contact/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    setIsSubmitting(false);
    setShowSuccess(true);

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        duedate: '',
        location: '',
        message: ''
      });
      setShowSuccess(false);
    }, 3000);
  } catch (error) {
    console.error('Submission error:', error);
    alert('An error occurred while submitting. Please try again.');
    setIsSubmitting(false);
  }
};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="Contact" className="bg-pink-50 py-6 lg:pb-1 relative overflow-hidden">
      <AnimatePresence>
        {showFlash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-white z-50 pointer-events-none"
            style={{ filter: 'brightness(1.2)' }}
          />
        )}
      </AnimatePresence>

      <main className="mx-auto px-4 lg:pb-1 sm:px-6 lg:px-8">
        <div className="mx-auto text-center mb-16">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-4">
            Contact Our Maternity Photographers
          </h1>
          <p className="text-gray-600 text-xs sm:text-base 2xl:text-3xl">
            Fill out the form below to book your maternity photoshoot or ask any questions. We proudly serve all regions across the UK, including London.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-[-40px] md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
            <AnimatePresence>
              {showSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-16 h-16 text-pink-500 mx-auto mb-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.6))' }}
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Photo Request Sent!</h3>
                  <p className="text-gray-600">We&apos;ve captured your details and will contact you soon.</p>
                  <motion.button
                    onClick={() => setShowSuccess(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-lg transition"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[ 
                      { id: 'name', type: 'text', label: 'Your Name', required: true },
                      { id: 'email', type: 'email', label: 'Email Address', required: true },
                      { id: 'phone', type: 'tel', label: 'Phone Number' },
                      { id: 'duedate', type: 'date', label: 'Expected Photography' },
                    ].map(({ id, type, label, required }) => (
                      <div key={id}>
                        <label htmlFor={id} className="block text-xs lg:text-lg font-medium text-gray-700 mb-1">
                          {label}
                        </label>
                        <input
                          id={id}
                          name={id}
                          type={type}
                          required={required}
                          value={formData[id]}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition"
                        />
                      </div>
                    ))}

                    <div>
                      <label htmlFor="location" className="block text-sm lg:text-lg font-medium text-gray-700 mb-1">
                        Post Code
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="e.g. SW1A 1AA"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm lg:text-lg font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 relative overflow-hidden"
                      whileTap={{ scale: 0.95 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center justify-center"
                        >
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </motion.span>
                      ) : (
                        <span className="flex text-xs lg:text-lg items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                          </svg>
                          Send Message
                        </span>
                      )}
                    </motion.button>
                  </form>

                  <AnimatePresence>
                    {isSubmitting && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-16 h-16 text-pink-500"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          style={{ filter: 'drop-shadow(0 0 12px rgba(236, 72, 153, 0.5))' }}
                        >
                          <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Info Section */}
          <div className="w-full h-auto mt-[-20px] lg:mt-0.5 flex flex-col">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden" style={{ maxHeight: '480px' }}>
              {/* Floating Camera Background Animation */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2, transition: { duration: 0.8, ease: "easeOut" } }}
              >
                <motion.div
                  className="relative"
                  animate={{ y: [0, -10, 0], rotate: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 text-pink-400" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.2))' }}>
                    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </motion.div>
              </motion.div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl lg:text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                <address className="text-gray-600 not-italic space-y-4 text-sm sm:text-base">
                  {[
                    {
                      icon: <PhoneIcon className="w-5 h-5 text-pink-500 mr-3 shrink-0" />,
                      value: "+44 123 456 7890",
                      href: "tel:+441234567890"
                    },
                    {
                      icon: <EnvelopeIcon className="w-5 h-5 text-pink-500 mr-3 shrink-0" />,
                      value: "info@bumptobabyphoto.com",
                      href: "mailto:info@bumptobabyphoto.com"
                    },
                    {
                      icon: <MapPinIcon className="w-5 h-5 text-pink-500 mr-3 shrink-0" />,
                      value: "Snap U Photography, London, UK",
                      href: "https://maps.google.com?q=Snap+U+Photography+London"
                    }
                  ].map(({ icon, value, href }, i) => (
                    <div key={i} className="flex items-start">
                      {icon}
                      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition">
                        {value}
                      </a>
                    </div>
                  ))}
                </address>
              </div>
            </div>
            <ContactSection />
          </div>
        </div>
      </main>
    </section>
  );
}
