import INormalisedData from "../../../interfaces/INormsalisedData";
import { TSortSelection, TSortBy } from "../../../interfaces/ISortInterface";
import TNormalisedUsers from "../../../interfaces/TNormalisedUsers";
import DashboardHeader from "../../../ui/DashboardHeader/DashboardHeader";
import GridContainer from "../../../ui/GridContainer/GridContainer";
import UserCard from "../../../ui/UserCard/UserCard";
import useLoadedDashboard from "../hooks/useLoadedDashboard";

interface IProps {
  userData: INormalisedData<TNormalisedUsers, number>;
}

const LoadedDashboard = (props: IProps) => {
  // Destructure
  const { userData } = props;

  //Hooks
  const {
    filteredAndSortedIds,
    handleQueryChange,
    handleSortSelectionChange,
    handleSortByChange,
    sortState,
  } = useLoadedDashboard(userData);

  return (
    <div>
      <DashboardHeader
        onQueryChange={handleQueryChange}
        onSortSelectionChange={handleSortSelectionChange}
        onSortByChange={handleSortByChange}
        sortState={sortState}
      />
      <GridContainer>
        {filteredAndSortedIds.map((id) => (
          <UserCard key={id} user={userData.data[id]} />
        ))}
      </GridContainer>
    </div>
  );
};

export default LoadedDashboard;
