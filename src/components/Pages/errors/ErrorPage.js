import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="dashboard">
      <header>
        <h1>Error</h1>
        <Link to={"/"}>
          <button>Retourner vers la page Acceuil</button>
        </Link>
      </header>
    </div>
  );
}

export default ErrorPage;
