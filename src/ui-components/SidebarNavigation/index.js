import useLogo from "../Logo";
import styles from "./SidebarNavigation.module.css";

const SidebarNavigation = ({
  sidebarMenuActive,
  toggleSidebarMenu
}) => {

  const {HomeLogo} = useLogo();
  
  return (
    <section className={`${styles.container} ${sidebarMenuActive ? styles['active'] : ''}`}>
      <button className={styles["sidebar-close-btn"]} onClick={toggleSidebarMenu}>
        x
      </button>
      <div className={styles['logo-container']}>
        <HomeLogo />
      </div>
    </section>
  );
};

export default SidebarNavigation;
