import INormalisedData from "../../../interfaces/INormsalisedData";
import TNormalisedUsers from "../../../interfaces/TNormalisedUsers";
import useLoadedDashboard from "../hooks/useLoadedDashboard";

interface IProps {
  userData: INormalisedData<TNormalisedUsers, number>;
}

const LoadedDashboard = (props: IProps) => {
  // Destructure
  const { userData } = props;

  //Hooks
  const {} = useLoadedDashboard(userData);

  return <div>LoadedDashboard</div>;
};

export default LoadedDashboard;
