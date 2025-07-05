'use client';

import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../admin/firebase/config';
import CheckAuth from './firebase/CheckAuth';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/admin/Login');
  };

  return (
    <CheckAuth>
      <main className="p-6 min-h-screen bg-gray-100 text-gray-900">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-700">📸 Snapu Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="admin/reviewCards">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">📷 Review Cards</h2>
            <p className="text-gray-600">Manage client reviews here.</p>
          </section>
          </Link>

          <Link href="admin/packages">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">🎁 Packages</h2>
            <p className="text-gray-600">Create and edit photography packages.</p>
          </section>
          </Link>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">💬 Why Choose Us</h2>
            <p className="text-gray-600">Update your business highlights here.</p>
          </section>

<Link href="admin/heroimages">
          <section className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold mb-2">🌅 Hero Images</h2>
  <p className="text-gray-600">Upload, manage, and prioritize homepage banner images here.</p>
</section>
</Link>

<Link href="admin/youtubevideos">
<section className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold mb-2">📹 Video Manages</h2>
  <p className="text-gray-600">Browse and manage your uploaded videos here.</p>
</section>
</Link>

      <Link href="/admin/contact">
  <section className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-2">📞 Contact Manages</h2>
    <p className="text-gray-600">Browse and manage all submitted contact form messages here.</p>
  </section>
</Link>



          <Link href="admin/galleryImages">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">🖼️ Gallery</h2>
            <p className="text-gray-600">Upload and manage gallery images.</p>
          </section>
          </Link>

          
        </div>
      </main>
    </CheckAuth>
  );
}
