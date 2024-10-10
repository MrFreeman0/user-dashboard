import ErrorDashboard from "./elements/ErrorDashboard";
import LoadedDashboard from "./elements/LoadedDashboard";
import LoadingDashboard from "./elements/LoadingDashboard";
import useDashboardData from "./hooks/useDashboardData";

const DashboardPage = () => {
  // Hooks
  const { userData, isLoading, error, refreshData } = useDashboardData();

  return (
    <div>
      {isLoading ? (
        <LoadingDashboard />
      ) : (
        <>
          {error !== undefined ? (
            <ErrorDashboard />
          ) : (
            <LoadedDashboard userData={userData} />
          )}
        </>
      )}
    </div>
  );
};

export default DashboardPage;
