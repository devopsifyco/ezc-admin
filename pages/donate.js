import Layout from "@EZChallenge/components/layout";
import DonatePage from "src/Pages/donate";
import middlewareAuth from "src/middleware";

const Donate = () => (
  <Layout>
    <DonatePage />
  </Layout>
);

export default middlewareAuth(Donate);