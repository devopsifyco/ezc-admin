import React from "react";
import ButtonComponent from "./ButtonComponent";
import useChallenge from "pages/api/challenge/useChallenge";
import { formatDateTime } from "./Approve";
import { FiMapPin, FiStar, FiHome, FiCalendar } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";


const Pending = () => {
    const { pendingChallenges, handleApprove, handleReject } = useChallenge();

    return (
        <>
        <h1 className="text-3xl text-gray-500 font-bold">Pending</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {pendingChallenges.map(challenge => (
                <div key={challenge._id} className='border border-gray-300 p-4 rounded-md'>
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
                    <div>
                        <ButtonComponent onClickApprove={() => handleApprove(challenge._id)} onClickReject={() => handleReject(challenge._id)} />
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default Pending;