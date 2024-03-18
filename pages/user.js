import Layout from "@EZChallenge/components/layout";
import middlewareAuth from "src/middleware";
import ListUsers from "src/Pages/user";

const UsersListPage = () => (
  <Layout>
    <ListUsers />
  </Layout>
);

export default middlewareAuth(UsersListPage);