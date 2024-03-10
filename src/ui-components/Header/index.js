import {
  IoNotificationsOutline,
} from "react-icons/io5";
import DropdownMenu from "../DropdownMenu";
import IconWrapper from "../IconWrapper";
import UserIcon from "../UserIcon";
import styles from "./Header.module.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import { headerLoginMenuList, menuList } from "../../data";

const MenuList = ({ href = "", Icon = null, text = "" }) => {
  return (
    <li>
      <Link href={href} className={styles["link"]}>
        {Icon && <Icon />}
        <span>{text}</span>
      </Link>
    </li>
  );
};

const NotificationsIcon = ({ onClick = () => {} }) => (
  <IconWrapper
    onClick={onClick}
    style={{
      top: "2px",
      fontSize: "20px",
    }}
  >
    <IoNotificationsOutline />
  </IconWrapper>
);

const NotificationList = ({ img = null, desc = "", datetime = "" }) => {
  return (
    <li>
      {img && <img src={img} alt="" />}
      <div className={styles["single-notification"]}>
        <p>{desc}</p>
        <p>{datetime}</p>
      </div>
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
              <HiOutlineMenuAlt1 />
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
              <ul className={styles["dropdown-menu"]}>
                {headerLoginMenuList.map((menu, index) => (
                  <MenuList
                    key={index} 
                    text={menu.text}
                    Icon={menu.Icon}
                    href={menu.href}
                  />
                ))}
              </ul>
            </DropdownMenu>
          </li>

          <li>
            <DropdownMenu
              label={"Dropdown 1"}
              CustomMenu={UserIcon}
            >
              <ul className={styles["dropdown-menu"]}>
                {menuList.map((menu, index) => (
                  <MenuList
                    key={index}
                    text={menu.text}
                    Icon={menu.Icon}
                    href={menu.href}
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
