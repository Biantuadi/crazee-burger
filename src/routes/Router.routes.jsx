import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../components/Pages/auth/LoginPage";
import DashboardPage from "../components/Pages/dashboard/DashboardPage";
import ErrorPage from "../components/Pages/errors/ErrorPage";

const RouterRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard/:user" element={<DashboardPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default RouterRoutes;
