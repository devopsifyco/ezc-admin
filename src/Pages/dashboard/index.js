import React, { useState, useEffect } from 'react';
import DataCard from '@EZChallenge/components/DataCard';
import Section from '@EZChallenge/components/Section';
import useUsers from 'pages/api/user';
import getAllChallenge from 'pages/api/challenge';

export default function Dashboard() {
  const { getTotalOfUsers } = useUsers();
  const [totalChallenges, setTotalChallenges] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

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

  return (
    <>
      <Section>
        <DataCard
          label={"Total User"}
          value={totalUsers?.toString() || ''}
          inverse={true}
          href={"/user"}
        />
        <DataCard
          label={"Total Challenge"}
          value={totalChallenges.toString()}
          inverse={true}
          href={"/challenge"}
        />
      </Section>
    </>
  );
}
