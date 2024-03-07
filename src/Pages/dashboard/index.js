import React, { useState, useEffect } from 'react';
import HeaderSection from "@aio/components/HeaderSection";
import DataCard from "@aio/components/DataCard";
import Section from "@aio/components/Section";
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
      <HeaderSection heading={"Dashboard"} />

      <Section>
        <DataCard
          label={"Total User"}
          value={totalUsers?.toString() || ''}
          percentageValue={56.4}
          inverse={true}
        />
        <DataCard
          label={"Total Challenge"}
          value={totalChallenges.toString()}
          percentageValue={3.45}
        />
      </Section>
    </>
  );
}
