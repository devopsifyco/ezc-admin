import DropdownMenu from "../DropdownMenu";
import UserIcon from "../UserIcon";
import styles from "./Header.module.css";
import Link from "next/link";
import { headerLoginMenuList, menuList } from "../../data";

const MenuList = ({ href = "", Icon = null, text = "", handle = null }) => {
  return (
    <li >
      <Link href={href} className="flex flex-row gap-2 items-center" onClick={handle}>
        {Icon && <Icon />}
        <span>{text}</span>
      </Link>
    </li>
  );
};

const Header = ({ toggleSidebarMenu }) => {
  return (
    <section className={styles.container}>
      <div className={styles["left-items"]}>
        <ul>
          <li>
            <button
              className={styles["close-sidemenu"]}
              onClick={toggleSidebarMenu}
            >
            </button>
          </li>
          <li>
            <Link href={'/'}>
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["right-items"]}>
        <ul className={styles["header-navigations"]}>

          <li>
          <DropdownMenu label={"Login/Signup"}>
            <ul className="pl-4 pt-2 font-bold">
              {headerLoginMenuList.map((menu, index) => (
                <div key={index}>
                  <MenuList
                    text={menu.text}
                    Icon={menu.Icon}
                    href={menu.href}
                  />
                </div>
              ))}
            </ul>
          </DropdownMenu>
          </li>

          <li>
            <DropdownMenu
              label={"Dropdown 1"}
              CustomMenu={UserIcon}
            >
              <ul className="pl-4 pt-2 font-bold">
                {menuList.map((menu, index) => (
                  <MenuList
                    key={index}
                    text={menu.text}
                    Icon={menu.Icon}
                    href={menu.href}
                    handle={menu.handle}
                  />
                ))}
              </ul>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
