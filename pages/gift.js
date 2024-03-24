import GiftPage from "src/Pages/gift";
import Layout from "@EZChallenge/components/layout";
import middlewareAuth from "src/middleware";

const Gift = () => (
  <Layout>
    <GiftPage />
  </Layout>
);

export default middlewareAuth(Gift);