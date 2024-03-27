import Layout from "../src/ui-components/layout";
import middlewareAuth from "src/middleware";
import Dashboard from "src/Pages/dashboard";

const AdminPage = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default middlewareAuth(AdminPage);
