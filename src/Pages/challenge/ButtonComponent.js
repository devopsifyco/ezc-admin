import React from 'react';

export default function ButtonComponent({ onClickApprove, onClickReject, challengeID }) {
  const handleApprove = () => {
    if (onClickApprove && typeof onClickApprove === 'function') {
      onClickApprove(challengeID);
    }
  };

  const handleReject = () => {
    if (onClickReject && typeof onClickReject === 'function') {
      onClickReject(challengeID);
    }
  };

  return (
    <div className=' flex flex-row gap-2'>
      <button
        onClick={handleApprove}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Approve
      </button>
      <button
        onClick={handleReject}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Reject
      </button>
    </div>
  );
}