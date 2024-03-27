import getAllChallenge from "pages/api/challenge/index.js";
import { useEffect, useState } from "react";
import { FiMapPin, FiStar, FiHome, FiCalendar } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";
import { useRouter } from "next/router";

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
    const router = useRouter();
    const [approveChallenges, setApproveChallenges] = useState([]);

    const handleChallengeDetail = (id) => {
        router.push(`/detail/${id}`);
    };

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

    return (
        <>
            <h1 className="text-3xl text-lime-500 font-bold">Approved</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {approveChallenges.map(challenge => (
                    <div key={challenge._id} className='border border-gray-300 p-4 rounded-md cursor-pointer' onClick={() => handleChallengeDetail(challenge._id)}>
                        <h2 className='text-xl font-bold mb-2'>{challenge.title}</h2>
                        {
                            challenge.images_path.length > 0 && (
                                <img
                                src={challenge.images_path[0].downloadLink}
                                className="w-full h-48 rounded-lg pb-2 object-cover"
                                alt="First Image"
                                />
                            )
                        }
                        <p className='text-gray-600 mb-2 flex flex-row gap-2 items-center'><AiFillEdit/>{challenge.description}</p>
                        <p className='text-gray-600 mb-2 flex flex-row gap-2 items-center'><FiMapPin color="red"/> {challenge.address}</p>
                        <p className='text-gray-600 mb-2 flex flex-row gap-2 items-center'><FiStar/> {challenge.points_reward}</p>
                        <p className='text-gray-600 mb-2 flex flex-row gap-2 items-center'><FiHome/> {challenge.company}</p>
                        <p className='text-gray-600 mb-2 flex flex-row gap-2 items-center'><FiCalendar color="green"/> {formatDateTime(challenge.start_time)}</p>
                        <p className='text-gray-600 mb-2 flex flex-row gap-2 items-center'><FiCalendar color="grey"/> {formatDateTime(challenge.end_time)}</p>
                    </div>
                ))}
            </div>
        </>
    );
};


export default Approve;