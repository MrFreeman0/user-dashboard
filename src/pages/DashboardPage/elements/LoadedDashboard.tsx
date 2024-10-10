import INormalisedData from "../../../interfaces/INormsalisedData";
import TNormalisedUsers from "../../../interfaces/TNormalisedUsers";

interface IProps {
  userData: INormalisedData<TNormalisedUsers, number>;
}

const LoadedDashboard = (props: IProps) => {
  // Destructure
  const { userData } = props;

  return <div>LoadedDashboard</div>;
};

export default LoadedDashboard;
