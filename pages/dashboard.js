import React, { useEffect } from "react";
import Layout from "../src/ui-components/layout";
import Dashboard from "../src/Pages/dashboard";
import { useRouter } from "next/router";
import { isLoggedIn } from "./api/auth/login";

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push('/login');
    }
  }, [router]);

  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default AdminPage;
