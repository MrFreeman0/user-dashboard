import IUser from "../../interfaces/IUser";
import "./UserCard.scss";

interface IProps {
  user: IUser;
}

const UserCard = (props: IProps) => {
  // Destructure
  const { user } = props;

  const userAddress = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

  return (
    <div className="user-card-item">
      <div className="user-card-surface">
        {/**Card Header */}
        <div className="user-card-header">
          <p>{user.name}</p>
          <div className="avatar-container">
            <b>{user.name[0] ?? "?"}</b>
          </div>
        </div>
        {/**Card Content */}
        <div>
          <p>address</p>
          <div>{userAddress}</div>
          <p>email</p>
          <a>{user.email}</a>
          <p>phone</p>
          <div>{user.phone}</div>
          <p>website</p>
          <a>{user.website}</a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
