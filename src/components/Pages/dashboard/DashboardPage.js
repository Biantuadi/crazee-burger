import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function DashboardPage() {
  // 1. state
  const { user } = useParams();

  return (
    <DashboardPageStyled>
      <header>
        <h1>Bonjour {user}</h1>
        <Link to={"/"}>
          <button>Deconnexion</button>
        </Link>
      </header>
    </DashboardPageStyled>
  );
}

const DashboardPageStyled = styled.div`
  header {
    color: #0122;
  }
`;

export default DashboardPage;
