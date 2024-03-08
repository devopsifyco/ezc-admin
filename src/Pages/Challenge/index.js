// Challenge.js
import HeaderSection from "@aio/components/HeaderSection";
import Pending from "./Pending";
import Approve from "./Approve";
import Reject from "./Reject";

const Challenge = (props) => {
  return (
    <>
      <HeaderSection heading={"Pending"} subHeading={Pending} />
      <HeaderSection heading={"Approve"} subHeading={Approve} />
      <HeaderSection heading={"Reject"} subHeading={Reject} />
    </>
  );
};

export default Challenge;
