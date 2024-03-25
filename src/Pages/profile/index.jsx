import React from "react";
import useProfile from "pages/api/profile";

export default function Profile() {
  const { profileData, isLoading } = useProfile();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {profileData && (
        <>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="bg-cyan-700 rounded-full flex justify-center items-center">
                <img className="w-52 h-52 rounded-full" src={profileData.avatar.downloadLink} alt="Avatar" />
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-semibold">{profileData.username}</h2>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold">About Me</h3>
            <p className="text-gray-600">{profileData.about_me}</p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-gray-600">{profileData.location}</p>
          </div>
        </>
      )}
    </div>
  );
}
