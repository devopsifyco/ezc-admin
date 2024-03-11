import getAllChallenge from "pages/api/challenge/index.js";
import { useEffect, useState } from "react";
import { formatDateTime } from "./Approve";

const Reject = () => {
    const [rejectedChallenges, setRejectedChallenges] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const challenges = await getAllChallenge();

                const rejectStatus = challenges.filter(challenge => challenge.status == 'rejected');
                setRejectedChallenges(rejectStatus);

            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [])

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <h1>Reject</h1>
            {rejectedChallenges.map(challenge => (
                <div key={challenge._id} className='border border-gray-300 p-4 rounded-md'>
                    <h2 className='text-xl font-bold mb-2'>{challenge.title}</h2>
                    <p className='text-gray-600 mb-2'>{challenge.description}</p>
                    <p className='text-gray-600 mb-2'>Location: {challenge.address}</p>
                    <p className='text-gray-600 mb-2'>{challenge.points_reward}</p>
                    <p className='text-gray-600 mb-2'>Company:{challenge.company}</p>
                    <p className='text-gray-600 mb-2'>Start: {formatDateTime(challenge.start_time)}</p>
                    <p className='text-gray-600 mb-2'>End: {formatDateTime(challenge.end_time)}</p>
                </div>
            ))}
        </div>
    );
};


export default Reject;