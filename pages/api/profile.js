
import { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';

export default function useProfile() {
    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProfileData = async () => {
          try {
            const email = getCookie('email');
            const userToken = getCookie('accessToken');
            const response = await fetch(`https://ezc-test-api.greenbee.gke.vn/api/user/${email}`, {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userToken}`
              }
            });
            if (!response.ok) {
              throw new Error('Failed to fetch profile data');
            }
            const data = await response.json();
            setProfileData(data);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchProfileData();
    }, []);
  
    return {profileData, isLoading}
}





