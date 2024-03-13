import Pending from "./Pending";
import Approve from "./Approve";
import Reject from "./Reject";

const Challenge = (props) => {
  return (
    <>
      <Pending />
      <Approve />
      <Reject />
    </>
  );
};

export default Challenge;