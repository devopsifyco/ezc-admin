import { FiUser, FiLogOut } from "react-icons/fi";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { logout } from "pages/api/auth/login";

export const menuList = [
  {
    text: "Profile",
    Icon: FiUser,
    href: "/profile",
  },
  {
    text: "Logout",
    Icon: FiLogOut,
    handle: () => logout(),
  },
];

export const headerLoginMenuList = [
    {
      text: 'Login',
      Icon: AiOutlineLogin,
      href:'/login',

    },
    {
      text: 'Signup',
      Icon: AiOutlineLogout,
      href: '/signup',

    }
  ]


