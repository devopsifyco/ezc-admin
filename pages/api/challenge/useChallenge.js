import {useState, useEffect} from "react";
import getAllChallenge from "pages/api/challenge/index.js";
import { API } from "pages/api";

export default function useChallenge () {

    const [pendingChallenges, setPendingChallenges] = useState([]);

    const getData = async () => {
        try {
            const challenges = await getAllChallenge();
            const pendingStatus = challenges.filter(challenge => challenge.status === 'pending');
            setPendingChallenges(pendingStatus);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleApprove = async (challengeID) => {
        try {
            
            const userToken = localStorage.getItem('accessToken');
            const res = await fetch(`${API}/challenge/approve`, {
                method: "POST",
                headers: {
                    'Content-Type': `application/json`,
                    Authorization: `Bearer ${userToken}`,
                },
                body: JSON.stringify({ id: challengeID })
            });
            console.log('ID nef: ',challengeID);

            getData();
            const status = await res.json();
            return status;

        } catch (error) {
            console.error("Failed to approve challenge:", error);
        }
    };

    const handleReject = async (challengeID) => {
        try {
            const res = await fetch(`${API}/challenge/reject`, {
                method: "POST",
                headers: {
                    'Content-Type': `application/json`,
                    Authorization: `Bearer ${userToken}`,
                },
                body: JSON.stringify({ id: challengeID })
            });
            getData();
            const status = await res.json();
            return status;

        } catch (error) {
            console.error("Failed to reject challenge:", error);
        }
    };

    return {pendingChallenges, handleApprove, handleReject}
}