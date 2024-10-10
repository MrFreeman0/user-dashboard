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
      <div className="user-card-surface flex-column">
        {/**Card Header */}
        <div className="user-card-header">
          <p>{user.name}</p>
          <div className="avatar-container">
            <b>{user.name[0] ?? "?"}</b>
          </div>
        </div>
        {/**Card Content */}
        <div className="flex-column description-container">
          <p className="description-label">address</p>
          <div className="fill-remaining description-content">
            {userAddress}
          </div>
          <p className="description-label">email</p>
          <a className="description-content hoverable-text">{user.email}</a>
          <p className="description-label">phone</p>
          <div className="description-content">{user.phone}</div>
          <p className="description-label">website</p>
          <a className="description-content hoverable-text">{user.website}</a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
