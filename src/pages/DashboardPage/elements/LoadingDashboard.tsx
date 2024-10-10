import Spinner from "../../../ui/Spinner/Spinner";

const LoadingDashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "16px",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Spinner />
    </div>
  );
};

export default LoadingDashboard;
