import { Link, useParams } from "react-router-dom";

function DashboardPage() {
  // 1. state
  const { user } = useParams();

  return (
    <div className="dashboard">
      <header>
        <h1>Bonjour {user}</h1>
        <Link to={"/"}>
          <button>Deconnexion</button>
        </Link>
      </header>
    </div>
  );
}

export default DashboardPage;
