import { IoHomeOutline } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    to: "/",
    name: "Home",
    Icon: IoHomeOutline,
  },
  {
    to: "/profile",
    name: "Users account",
    Icon: BiUserCircle,
  },
  {
    to: "/challenge",
    name: "Challenges",
    Icon: BsSpeedometer2,
  },
];
