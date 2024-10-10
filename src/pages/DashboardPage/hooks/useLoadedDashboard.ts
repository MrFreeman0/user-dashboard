import { useState, useMemo } from "react";
import INormalisedData from "../../../interfaces/INormsalisedData";
import {
  ISortState,
  TSortBy,
  TSortSelection,
} from "../../../interfaces/ISortInterface";
import TNormalisedUsers from "../../../interfaces/TNormalisedUsers";
import IUser from "../../../interfaces/IUser";
import IAddress from "../../../interfaces/IAddress";

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
  const filterUserByQuery = (query: string, user: IUser): boolean => {
    const splitQuery = query.toLowerCase().split(/\s/);

    // Concatenate
    type TUserAddressKey = keyof IAddress; //To get all keys

    const userAddress = Object.keys(user.address)
      .map((key) => {
        if (typeof user.address[key as TUserAddressKey] === "string") {
          return user.address[key as TUserAddressKey];
        }
        return null;
      })
      .filter((field): field is string => field !== null)
      .join()
      .toLowerCase();

    //String to run comparison through
    const userString = `${user.name.toLowerCase()} ${user.email.toLowerCase()} ${userAddress}`;

    return splitQuery.every((term) => userString.includes(term));
  };

  const getFieldToSortBy = (sortWith: TSortSelection, user: IUser) => {
    // Could also use keyof, but that seems redundant for this usecase
    switch (sortWith) {
      case "name":
        return user.name.toLowerCase();
      case "email":
        return user.email.toLowerCase();
    }
  };

  const filteredAndSortedIds = useMemo(() => {
    const filteredIds = normalisedUsers?.ids.filter((id) =>
      filterUserByQuery(query, normalisedUsers.data[id])
    );

    const sortedAndFilteredIds = [...filteredIds].sort((idA, idB) => {
      const comparisonValueA = getFieldToSortBy(
        sortState.sortWith,
        normalisedUsers.data[idA]
      );
      const comparisonValueB = getFieldToSortBy(
        sortState.sortWith,
        normalisedUsers.data[idB]
      );

      switch (sortState.sortBy) {
        case "asc":
          return comparisonValueA.localeCompare(comparisonValueB);
        case "desc":
          return comparisonValueB.localeCompare(comparisonValueA);
      }
    });

    return sortedAndFilteredIds;
  }, [query, sortState, normalisedUsers]);

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
    filteredAndSortedIds,
  };
};

export default useLoadedDashboard;
