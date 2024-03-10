import Logo from "../Logo";
import styles from "./SidebarNavigation.module.css";
import { useRouter } from "next/router";

const SidebarNavigation = ({
  sidebarMenuActive,
  toggleSidebarMenu
}) => {
  const router = useRouter();

  console.log({ router });
  
  return (
    <section className={`${styles.container} ${sidebarMenuActive ? styles['active'] : ''}`}>
      <button className={styles["sidebar-close-btn"]} onClick={toggleSidebarMenu}>
        x
      </button>
      <div className={styles['logo-container']}>
        <Logo />
      </div>
    </section>
  );
};

export default SidebarNavigation;
