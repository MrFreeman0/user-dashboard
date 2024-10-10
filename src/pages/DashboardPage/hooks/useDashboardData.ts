import useSWR from "swr";
import axiosFetcher from "../../../utils/axiosFetcher";
import { useEffect, useState } from "react";
import INormalisedData from "../../../interfaces/INormsalisedData";
import TNormalisedUsers from "../../../interfaces/TNormalisedUsers";
import IUser from "../../../interfaces/IUser";

const useDashboardData = () => {
  // Hooks
  const { data, error, isLoading, mutate } = useSWR("/users", axiosFetcher);

  // State
  const [normalisedUsers, setNormalisedUsers] = useState<
    INormalisedData<TNormalisedUsers, number>
  >({ ids: [], data: {} });

  // Effects
  useEffect(() => {
    if (data !== undefined) {
      const normalisedData = normaliseUsers(data);
      setNormalisedUsers({ ...normalisedData });
    }
  }, [data]);

  // Helpers
  const normaliseUsers = (
    untransformedUsers: IUser[]
  ): INormalisedData<TNormalisedUsers, number> => {
    const userIds = untransformedUsers.map((user) => user.id);
    const normalisedUsers: TNormalisedUsers = untransformedUsers.reduce(
      (users, user) => {
        users[user.id] = user;
        return users;
      },
      {} as TNormalisedUsers
    );

    return { ids: userIds, data: normalisedUsers };
  };

  // Functions
  const refreshData = () => mutate();

  return {
    userData: normalisedUsers,
    isLoading,
    error,
    refreshData,
  };
};

export default useDashboardData;
