import Pending from "./Pending";
import Approve from "./Approve";
import Reject from "./Reject";

const Challenge = (props) => {
  return (
    <div>
      <Pending />
      <Approve />
      <Reject />
    </div>
  );
};

export default Challenge;