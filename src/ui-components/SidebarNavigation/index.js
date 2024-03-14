import useLogo from "../Logo";
import styles from "./SidebarNavigation.module.css";
import routes from "src/routes";
import { useRouter } from "next/router";
import Link from "next/link";

const SidebarNavigation = ({
  sidebarMenuActive,
  toggleSidebarMenu
}) => {

  const router = useRouter();
  const {HomeLogo} = useLogo();
  
  return (
    <section className={`${styles.container} ${sidebarMenuActive ? styles['active'] : ''}`}>
      <button className={styles["sidebar-close-btn"]} onClick={toggleSidebarMenu}>
        x
      </button>
      <div className={styles['logo-container']}>
        <HomeLogo />
      </div>
      <ul className={styles["sidebar-container"]}>
        {routes.map((page, index) => (
            <li key={index} className={`${styles["sidebar-menu-item"]} ${router.route === page.to ? styles['active'] : ''}`}>
              <Link href={page.to}>
                <page.Icon />
                <span>{page.name}</span>
              </Link>
            </li>
          ))} 
      </ul>
    </section>
  );
};

export default SidebarNavigation;
