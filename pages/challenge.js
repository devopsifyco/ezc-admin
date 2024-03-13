import Layout from "@EZChallenge/components/layout";
import Challenge from "src/Pages/challenge";
import middlewareAuth from "src/middleware";

const ChallengePage = () => (
  <Layout>
    <Challenge />
  </Layout>
);

export default middlewareAuth(ChallengePage);