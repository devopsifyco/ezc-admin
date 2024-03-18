import React, { useState, useEffect } from 'react';
import DataCard from '@EZChallenge/components/DataCard';
import Section from '@EZChallenge/components/Section';
import useUsers from 'pages/api/user';
import getAllChallenge from 'pages/api/challenge';

export default function Dashboard() {
  const { getTotalOfUsers } = useUsers();
  const [totalChallenges, setTotalChallenges] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [userPercentage, setUserPercentage] = useState(0);
  const [challengePercentage, setChallengePercentage] = useState(0);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const challenges = await getAllChallenge();
        setTotalChallenges(challenges.length);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    };

    const fetchTotalUsers = async () => {
      try {
        const users = await getTotalOfUsers();
        setTotalUsers(users);
      } catch (error) {
        console.error('Error fetching total users:', error);
      }
    };

    fetchChallenges();
    fetchTotalUsers();
  }, [getTotalOfUsers]);

  useEffect(() => {
    if (totalUsers > 0) {
      setUserPercentage(parseFloat(((totalUsers / 1000) * 100).toFixed(2))); // Example 1000 is total of users
    }
    if (totalChallenges > 0) {
      setChallengePercentage(parseFloat(((totalChallenges / 100) * 100).toFixed(2))); // 100 is total of challenges
    }
  }, [totalUsers, totalChallenges]);

  return (
    <>
      <Section>
        <DataCard
          label={"Total User"}
          value={totalUsers?.toString() || ''}
          percentageValue={userPercentage}
          inverse={true}
        />
        <DataCard
          label={"Total Challenge"}
          value={totalChallenges.toString()}
          percentageValue={challengePercentage}
          inverse={true}
        />
      </Section>
    </>
  );
}
