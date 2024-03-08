import React from 'react';

export default function ButtonComponent({ onClickApprove, onClickReject, challengeID }) {
  const handleApprove = () => {
    // Kiểm tra xem onClickApprove có tồn tại không trước khi gọi
    if (onClickApprove && typeof onClickApprove === 'function') {
      onClickApprove(challengeID);
    }
  };

  const handleReject = () => {
    // Kiểm tra xem onClickReject có tồn tại không trước khi gọi
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
