import { IoHomeOutline, IoGift } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

export default [
  {
    to: "/",
    name: "Home",
    Icon: IoHomeOutline,
  },
  {
    to: "/user",
    name: "List users",
    Icon: BiUserCircle,
  },
  {
    to: "/challenge",
    name: "Challenges",
    Icon: BsSpeedometer2,
  },
  {
    to: "/gift",
    name: "Gifts",
    Icon: IoGift,
  }
];