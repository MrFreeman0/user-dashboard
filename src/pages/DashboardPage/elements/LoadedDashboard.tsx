import INormalisedData from "../../../interfaces/INormsalisedData";
import TNormalisedUsers from "../../../interfaces/TNormalisedUsers";
import DashboardHeader from "../../../ui/DashboardHeader/DashboardHeader";
import GridContainer from "../../../ui/GridContainer/GridContainer";
import Placeholder from "../../../ui/Placeholder/Placeholder";
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
        {filteredAndSortedIds.length > 0 ? (
          filteredAndSortedIds.map((id) => (
            <UserCard key={id} user={userData.data[id]} />
          ))
        ) : (
          <Placeholder
            title={"No users found".toUpperCase()}
            description={
              "Please make sure that the user you are looking for exists or try to refine your search terms"
            }
          />
        )}
      </GridContainer>
    </div>
  );
};

export default LoadedDashboard;
