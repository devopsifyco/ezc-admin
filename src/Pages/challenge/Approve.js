import getAllChallenge from "pages/api/challenge/index.js";
import { useEffect, useState } from "react";

export const formatDateTime = (time) => {
    const dateObject = new Date(time);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes().toString().padStart(2, '0');

    const period = hours >= 12 ? 'PM' : 'AM';

    return `${day}-${month}-${year} ${hours}:${minutes} ${period}`;
};

const Approve = () => {
    const [approveChallenges, setApproveChallenges] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const challenges = await getAllChallenge();

                const approveStatus = challenges.filter(challenge => challenge.status == 'approved');
                setApproveChallenges(approveStatus);

            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [])

    console.log('approve', approveChallenges);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <h1>Approve</h1>
            {approveChallenges.map(challenge => (
                <div key={challenge._id} className='border border-gray-300 p-4 rounded-md'>
                    <h2 className='text-xl font-bold mb-2'>{challenge.title}</h2>
                    <p className='text-gray-600 mb-2'>{challenge.description}</p>
                    <p className='text-gray-600 mb-2'>Location: {challenge.address}</p>
                    {/*{
                        challenge.images_path.map(image => (
                            <img src={image.downloadLink} className="max-h-20 mb-2" />
                        )
                        )
                    }*/}
                    <p className='text-gray-600 mb-2'>{challenge.points_reward}</p>
                    <p className='text-gray-600 mb-2'>Company:{challenge.company}</p>
                    <p className='text-gray-600 mb-2'>Start: {formatDateTime(challenge.start_time)}</p>
                    <p className='text-gray-600 mb-2'>End: {formatDateTime(challenge.end_time)}</p>
                </div>
            ))}
        </div>
    );
};


export default Approve;