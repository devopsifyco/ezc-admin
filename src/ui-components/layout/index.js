import { useEffect, useState } from "react";
import Header from "../Header";
import SidebarNavigation from "../SidebarNavigation";

const Layout = ({ children }) => {
  const isClient = typeof window !== "undefined";
  const [sidebarMenuActive, setSidebarMenuActive] = useState(() => isClient && window.innerWidth > 768);

  const toggleSidebarMenu = () => setSidebarMenuActive((prevState) => !prevState);
  const showSidebarMenu = () => setSidebarMenuActive(true);

  useEffect(() => {
    const handleResize = () => {
      setSidebarMenuActive(isClient && window.innerWidth > 768);
    };

    if (isClient) {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isClient]);

  return (
    <>
      <SidebarNavigation
        toggleSidebarMenu={toggleSidebarMenu}
        sidebarMenuActive={sidebarMenuActive}
      />
      <Header toggleSidebarMenu={toggleSidebarMenu} showSidebarMenu={showSidebarMenu} />
      <section className="content">{children}</section>
    </>
  );
};

export default Layout;
