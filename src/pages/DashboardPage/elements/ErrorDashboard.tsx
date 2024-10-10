import Placeholder from "../../../ui/Placeholder/Placeholder";
import StyledButton from "../../../ui/StyledButton/StyledButton";

interface IProps {
  handleRefresh?: () => void;
  error?: string;
}

const ErrorDashboard = (props: IProps) => {
  // Destructure
  const { handleRefresh, error } = props;

  return (
    <div>
      <Placeholder title="Error" description={error ?? "Unknown Error"} />
      {handleRefresh !== undefined && <StyledButton>Refresh</StyledButton>}
    </div>
  );
};

export default ErrorDashboard;
