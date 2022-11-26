import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div className="dashboard">
      <header>
        <h1>Dashboard</h1>
        <Link to={"/"}>
          <button>Deconnexion</button>
        </Link>
      </header>
    </div>
  );
}

export default DashboardPage;
