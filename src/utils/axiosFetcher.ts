import axios from "axios";
import { Fetcher } from "swr";
import delay from "./delay";
import IUser from "../interfaces/IUser";

const delayedAxiosFetch = async (url: string) => {
  await delay(1000);
  return axios.get(url);
};

const unwrapToUsers = (resData: unknown): IUser[] => {
  const users: IUser[] = [];
  if (Array.isArray(resData)) {
    resData.forEach((rawUser) => {
      users.push({
        id: rawUser.id,
        name: rawUser.name,
        username: rawUser.username,
        email: rawUser.email,
        address: {
          street: rawUser.address.street,
          suite: rawUser.address.suite,
          city: rawUser.address.city,
          zipcode: rawUser.address.zipcode,
        },
        website: rawUser.website,
        phone: rawUser.phone,
      });
    });
  }
  return users;
};

const axiosFetcher: Fetcher<IUser[], string> = (url: string) =>
  delayedAxiosFetch(url).then((res) => unwrapToUsers(res.data));

export default axiosFetcher;
