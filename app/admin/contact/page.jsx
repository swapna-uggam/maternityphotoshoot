'use client';

import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function AdminContactPage() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [expandedRows, setExpandedRows] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'contactMessages'));
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setContacts(data);
        setFilteredContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const filtered = contacts.filter(contact =>
      contact.name?.toLowerCase().includes(lowerSearch) ||
      contact.email?.toLowerCase().includes(lowerSearch)
    );
    setFilteredContacts(filtered);
  }, [search, contacts]);

  const toggleRow = (id) => {
    setExpandedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  if (loading) return <p className="text-center py-10 text-lg">Loading contacts...</p>;
  if (contacts.length === 0) return <p className="text-center py-10 text-gray-500">No contact submissions found.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#6A1B1A]">📥 Contact Submissions</h1>

      {/* 🔍 Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 border border-gray-300 rounded px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6A1B1A] focus:border-transparent transition"
        />
      </div>

      {/* 📊 Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-300 shadow rounded-lg">
          <thead className="bg-[#6A1B1A] text-white text-xs uppercase tracking-wide">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left sm:hidden">More</th>
              <th className="py-3 px-4 text-left hidden sm:table-cell">Email</th>
              <th className="py-3 px-4 text-left hidden sm:table-cell">Message</th>
              <th className="py-3 px-4 text-left hidden sm:table-cell">Due Date</th>
              <th className="py-3 px-4 text-left hidden sm:table-cell">Post Code</th>
              <th className="py-3 px-4 text-left hidden sm:table-cell">Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact, idx) => {
              const isExpanded = expandedRows.includes(contact.id);
              return (
                <React.Fragment key={contact.id}>
                  <tr className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-[#fdf4f4]`}>
                    <td className="py-3 px-4 border">{contact.name || 'N/A'}</td>
                    <td className="py-3 px-4 border">
                      {contact.phone ? (
                        <a href={`tel:${contact.phone}`} className="text-blue-600 underline hover:text-blue-800">
                          {contact.phone}
                        </a>
                      ) : 'N/A'}
                    </td>
                    <td className="py-3 px-4 border sm:hidden">
                      <button
                        onClick={() => toggleRow(contact.id)}
                        className="text-blue-600 font-semibold"
                      >
                        {isExpanded ? '▲' : '▶'}
                      </button>
                    </td>
                    <td className="py-3 px-4 border hidden sm:table-cell">{contact.email || 'N/A'}</td>
                    <td className="py-3 px-4 border hidden sm:table-cell whitespace-pre-wrap break-words max-w-xs">
                      {contact.message || 'N/A'}
                    </td>
                    <td className="py-3 px-4 border hidden sm:table-cell">{contact.duedate || 'N/A'}</td>
                    <td className="py-3 px-4 border hidden sm:table-cell">{contact.location || 'N/A'}</td>
                    <td className="py-3 px-4 border hidden sm:table-cell">
                      {contact.createdAt?.toDate ? contact.createdAt.toDate().toLocaleString() : 'N/A'}
                     </td>

                  </tr>

                  {/* Mobile-only expanded info */}
                  {isExpanded && (
                    <tr className="sm:hidden bg-gray-100">
                      <td colSpan={3} className="px-4 py-3 text-gray-700 border-t border-gray-300 space-y-1">
                        <p><strong>Email:</strong> {contact.email || 'N/A'}</p>
                        <p><strong>Message:</strong><br /> {contact.message || 'N/A'}</p>
                        <p><strong>Due Date:</strong> {contact.duedate || 'N/A'}</p>
                        <p><strong>Post Code:</strong> {contact.location || 'N/A'}</p>
                        <p><strong>Submitted:</strong> {contact.timestamp?.toDate ? contact.timestamp.toDate().toLocaleString() : 'N/A'}</p>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
