import React, { useState, useEffect } from 'react';
import { FiClock } from "react-icons/fi";
import useDonate from 'pages/api/donate/useDonate';

export default function DonatePage() {
  const { donationHistory, loading, error } = useDonate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDonations = donationHistory.slice(indexOfFirstItem, indexOfLastItem);

  const calculateDaysSince = (date) => {
    const now = new Date();
    const createdAt = new Date(date);
    const diffTime = Math.abs(now - createdAt);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      return '1 day ago';
    } else {
      return `${diffDays} days ago`;
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto">
      <p className="text-2xl font-bold mb-4">Donate history</p>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {currentDonations.map((donation) => (
            <div key={donation._id} className="my-4 p-4 border rounded-lg">
              <p className="text-gray-700">Donor {donation.user.username}</p>
              <p className="text-lg font-semibold">{donation.user.name} donated {donation.points_donated} points</p>
              <p className="text-gray-500">Donate at: {new Date(donation.created_at).toLocaleString()}</p>
              <p className="text-gray-700">Message: {donation.message}</p>
              <p className="text-gray-500 flex flex-row gap-2 items-center"><FiClock />{calculateDaysSince(donation.created_at)}</p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4 flex justify-center">
        <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Previous
          </button>
          {Array.from({ length: Math.ceil(donationHistory.length / itemsPerPage) }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${currentPage === index + 1 ? 'z-10 bg-gray-100' : ''}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(donationHistory.length / itemsPerPage)}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}
