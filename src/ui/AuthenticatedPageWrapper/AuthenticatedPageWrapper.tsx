import AppHeader from "../AppHeader/AppHeader";
import "./AuthenticatedPageWrapper.scss";

interface IProps {
  children: React.ReactNode;
}

const AuthenticatedPageWrapper = (props: IProps) => {
  //Destructure
  const { children } = props;

  return (
    <div className="page-wrapper">
      <AppHeader>
        <h3 className="app-title">User Management Platform</h3>
      </AppHeader>
      <div className="children-container">{children}</div>
    </div>
  );
};

export default AuthenticatedPageWrapper;
