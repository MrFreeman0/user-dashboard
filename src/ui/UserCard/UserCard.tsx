import IUser from "../../interfaces/IUser";
import "./UserCard.scss";

interface IProps {
  user: IUser;
}

const UserCard = (props: IProps) => {
  // Destructure
  const { user } = props;

  return <div>{user.name}</div>;
};

export default UserCard;
