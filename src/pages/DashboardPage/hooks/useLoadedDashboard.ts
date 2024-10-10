import { useState, useMemo } from "react";
import INormalisedData from "../../../interfaces/INormsalisedData";
import { ISortState } from "../../../interfaces/ISortInterface";
import TNormalisedUsers from "../../../interfaces/TNormalisedUsers";

const useLoadedDashboard = (
  userData: INormalisedData<TNormalisedUsers, number>
) => {
  // State
  const [query, setQuery] = useState<string>("");
  const [sortState, setSortState] = useState<ISortState>({
    sortWith: "name",
    sortBy: "desc",
  });

  const normalisedUsers = useMemo(() => {
    return { ...userData };
  }, [userData]);
  
  return {};
};

export default useLoadedDashboard;
