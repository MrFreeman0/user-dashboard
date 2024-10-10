import { useState, useMemo } from "react";
import INormalisedData from "../../../interfaces/INormsalisedData";
import {
  ISortState,
  TSortBy,
  TSortSelection,
} from "../../../interfaces/ISortInterface";
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

  // Data
  const normalisedUsers = useMemo(() => {
    return { ...userData };
  }, [userData]);

  // Helpers

  // State Mutators
  const handleQueryChange = (query: string) => {
    setQuery(query);
  };

  const handleSortSelectionChange = (selection: TSortSelection) => {
    setSortState((state) => ({ ...state, sortWith: selection }));
  };

  const handleSortByChange = (selection: TSortBy) => {
    setSortState((state) => ({ ...state, sortBy: selection }));
  };

  return {
    handleQueryChange,
    handleSortSelectionChange,
    handleSortByChange,
    query,
    sortState,
  };
};

export default useLoadedDashboard;
