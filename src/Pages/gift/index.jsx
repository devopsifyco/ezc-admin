import useGift from 'pages/api/gift/useGilf';
import React from 'react';

export default function GiftPage() {

  const { donationHistory, loading, error } = useGift();

  return (
    <div className="container mx-auto">
      <p className="text-2xl font-bold mb-4">This is Gift page</p>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <div>
          {donationHistory.map((donation) => (
            <div key={donation._id} className="my-4 p-4 border rounded-lg">
              <p className="text-lg font-semibold">{donation.user.name} donated {donation.points_donated} points</p>
              <p className="text-gray-700">{donation.message}</p>
              {/* Add more fields as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
