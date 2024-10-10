import "./App.css";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AuthenticatedPageWrapper from "./ui/AuthenticatedPageWrapper/AuthenticatedPageWrapper";

function App() {
  return (
    <AuthenticatedPageWrapper>
      <DashboardPage />
    </AuthenticatedPageWrapper>
  );
}

export default App;
