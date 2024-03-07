import React from "react";
import ButtonComponent from "./ButtunComponent";
import useChallenge from "pages/api/challenge/useChallenge";
import { formatDateTime } from "./Approve";


const Pending = () => {
    const { pendingChallenges, handleApprove, handleReject } = useChallenge();

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {pendingChallenges.map(challenge => (
                <div key={challenge._id} className='border border-gray-300 p-4 rounded-md'>
                    <h2 className='text-xl font-bold mb-2'>{challenge.title}</h2>
                    <p className='text-gray-600 mb-2'>{challenge.description}</p>
                    <p className='text-gray-600 mb-2'>Location: {challenge.address}</p>
                    <p className='text-gray-600 mb-2'>{challenge.points_reward}</p>
                    <p className='text-gray-600 mb-2'>Company:{challenge.company}</p>
                    <p className='text-gray-600 mb-2'>Start: {formatDateTime(challenge.start_time)}</p>
                    <p className='text-gray-600 mb-2'>End: {formatDateTime(challenge.end_time)}</p>
                    <div>
                        <ButtonComponent onClickApprove={() => handleApprove(challenge._id)} onClickReject={() => handleReject(challenge._id)} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Pending;
