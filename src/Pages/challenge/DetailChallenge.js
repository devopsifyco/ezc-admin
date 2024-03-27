import React from "react";
import { formatDateTime } from "./Approve";
import { FiMapPin, FiStar, FiHome, FiCalendar } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import useGetOneChallenge from "pages/api/challenge/useGetOneChallenge";

const ChallengeDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const { challengeDetail, loading, error } = useGetOneChallenge(id);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1 className="text-3xl text-gray-500 font-bold">{challengeDetail.title}</h1>
            <div className='border border-gray-300 p-4 rounded-md'>
                {challengeDetail.images_path.length > 0 && (
                    <div className="grid grid-cols-2 gap-2">
                    {challengeDetail.images_path.map((image, index) => (
                        <img
                        key={image._id}
                        src={image.downloadLink}
                        alt={image.name}
                        className="rounded-lg object-cover"
                        style={{ height: "200px" }}
                        />
                    ))}
                    </div>
                )}
                <p className='text-gray-600 mb-2 flex flex-row gap-2 items-center'>Created by {challengeDetail.owner_id.username}</p>
                <p className='text-gray-600 mb-2 flex flex-row gap-2 items-center'><FiMapPin color="red"/> {challengeDetail.address}</p>
                <p className='text-gray-600 mb-2 flex flex-row gap-2 items-center'><FiStar/> {challengeDetail.points_reward}</p>
                <p className='text-gray-600 mb-2 flex flex-row gap-2 items-center'><FiHome/> {challengeDetail.company}</p>
                <p className='text-gray-600 mb-2 flex flex-row gap-2 items-center'>Description: {challengeDetail.description}</p>
                <p className='text-gray-600 mb-2 flex flex-row gap-2 items-center'><FiCalendar color="green"/> {formatDateTime(challengeDetail.start_time)}</p>
                <p className='text-gray-600 mb-2 flex flex-row gap-2 items-center'><FiCalendar color="grey"/> {formatDateTime(challengeDetail.end_time)}</p>
            </div>
        </div>
    );
};

export default ChallengeDetail;
