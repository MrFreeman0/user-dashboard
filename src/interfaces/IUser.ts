import IAddress from "./IAddress"

interface IUser {
  name: string,
  username: string,
  id: number,
  email: string
  address: IAddress
  website: string, 
  phone: string
}

export default IUser