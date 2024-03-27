const { useState, useEffect } = require("react");
const { API } = require("..");
import { getCookie } from "cookies-next";

const useGetOneChallenge = (id) => {
    const [challengeDetail, setChallengeDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChallengeDetail = async() => {
            try {
                const userToken = getCookie('accessToken');
                const response = await fetch(`${API}/challenge/${id}`, {
                    headers: {
                        'Content-Type': `application/json`,
                        Authorization: `Bearer ${userToken}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch challenge!')
                }
                const data = await response.json();
                setChallengeDetail(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchChallengeDetail();
        }
    }, [id]);

    return {challengeDetail, loading, error};
};

export default useGetOneChallenge;