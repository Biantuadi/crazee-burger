import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../themes";
import Logo from "../../Logo";

function DashboardPage() {
  // 1. state
  const { user } = useParams();

  return (
    <DashboardPageStyled>
      <header>
        <Logo />

        <nav>
          <div className="userInfo">
            <h2>Hey <span>{user}</span></h2>
            <Link to={"/"} id="deconexion">
              Se déconnecter
            </Link>
          </div>
          {/* icon profil circle */}
          <i className="fas fa-user-circle"></i>


        </nav>
      </header>
    </DashboardPageStyled>
  );
}

const DashboardPageStyled = styled.div`
  background-color: ${theme.colors.background_white};

  width: 100%;
  height: 100vh;

  header {
    color: #0122;
    display: flex;
    justify-content: space-between;
    background-color: ${theme.colors.white};
    align-items: center;
    padding: 0 18px;
    height: 5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .logo {
    transform: scale(1);
  }
  
  nav{
    display: flex;
    align-items: flex-end;
    padding: 0 60px;
    

  }

  .userInfo {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    line-height: 5px;

    margin-right: 10px;
  }

  h2 {
    
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: ${theme.colors.greyBlue};

    span {
      color: ${theme.colors.primary};
      /* position: absolute; */
    }

  }
  #deconexion {
    font-size: 13px;
    font-weight: 400;
    color: ${theme.colors.greyBlue};
  }

  .fa-user-circle {
    font-size: 28px;
    color: ${theme.colors.greyDark};

  }
`;

export default DashboardPage;
