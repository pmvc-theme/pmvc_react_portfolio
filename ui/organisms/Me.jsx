import { build } from "react-atomic-molecule";
import { Image } from "organism-react-animate";
import { Return } from "reshow";

const Me = (props) => {
  return (
    <Return initStates={["me"]}>
      {({me}) => {
        return me ? (
          <Image {...props} src={me} className="centered bordered" ui />
        ) : null;
      }}
    </Return>
  );
};

export default Me;
