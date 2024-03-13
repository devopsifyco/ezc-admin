
import Challenge from "src/Pages/challenge";
import Layout from "../src/ui-components/layout";
import middlewareAuth from "src/middleware";

const AdminPage = () => {
  return (
    <Layout>
      <Challenge />
    </Layout>
  );
};

export default middlewareAuth(AdminPage);
