import IUser from "../../interfaces/IUser";
import "./UserCard.scss";

interface IProps {
  user: IUser;
}

const UserCard = (props: IProps) => {
  // Destructure
  const { user } = props;

  return (
    <div className="user-card-item">
      <div className="user-card-surface">{user.name}</div>
    </div>
  );
};

export default UserCard;
