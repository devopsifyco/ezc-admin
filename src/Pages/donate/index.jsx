import useDonate from 'pages/api/gift/useGilf';
import React from 'react';
import { FiClock } from "react-icons/fi";


export default function DonatePage() {

  const { donationHistory, loading, error } = useDonate();

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


  return (
    <div className="container mx-auto">
      <p className="text-2xl font-bold mb-4">Donate history</p>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <div>
          {donationHistory.map((donation) => (
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
    </div>
  );
}
