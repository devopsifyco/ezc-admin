import { useEffect, useState } from 'react';
import { API } from '..';
import { getCookie } from 'cookies-next';


export default function useGift() {
  const [donationHistory, setDonationHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getCookie('accessToken');
        console.log(token);
        const response = await fetch(`${API}/donation/all`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,

          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setDonationHistory(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

  }, []); 

  return { donationHistory, loading, error };
}
