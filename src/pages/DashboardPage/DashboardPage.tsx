import ErrorDashboard from "./elements/ErrorDashboard";
import LoadedDashboard from "./elements/LoadedDashboard";
import LoadingDashboard from "./elements/LoadingDashboard";
import useDashboardData from "./hooks/useDashboardData";
import "./DashboardPage.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useRef } from "react";

const DashboardPage = () => {
  // Hooks
  const { userData, isLoading, error, refreshData } = useDashboardData();

  // Refs
  const loadingRef = useRef(null);
  const loadedRef = useRef(null);

  return (
    <TransitionGroup>
      {isLoading ? (
        <CSSTransition
          unmountOnExit
          nodeRef={loadingRef}
          key={"loading"}
          timeout={300}
          classNames={"fade"}
        >
          <div ref={loadingRef}>
            <LoadingDashboard />
          </div>
        </CSSTransition>
      ) : (
        <CSSTransition
          unmountOnExit
          nodeRef={loadedRef}
          key={"loaded"}
          timeout={300}
          classNames={"fade"}
        >
          <div ref={loadedRef}>
            {error !== undefined ? (
              <ErrorDashboard handleRefresh={refreshData} />
            ) : (
              <LoadedDashboard userData={userData} />
            )}
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

export default DashboardPage;
