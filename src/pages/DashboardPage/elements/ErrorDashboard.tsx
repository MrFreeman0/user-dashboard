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
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "16px",
      }}
    >
      <Placeholder title="Error" description={error ?? "Unknown Error"} />
      {handleRefresh !== undefined && (
        <StyledButton style={{ marginTop: "16px", height: "36px" }} onClick={handleRefresh}>
          Refresh
        </StyledButton>
      )}
    </div>
  );
};

export default ErrorDashboard;
