import Layout from '@EZChallenge/components/layout';
import { useRouter } from 'next/router';
import ChallengeDetail from 'src/Pages/challenge/DetailChallenge';

const DetailChallengePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <ChallengeDetail id={id} />
    </Layout>
  );
};

export default DetailChallengePage;
