import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../themes";

export default function Navbar() {
  const { user } = useParams();

  return (
    <NavbarStyled>
      <div className="userInfo">
        <h2>
          Hey <span>{user}</span>
        </h2>
        <Link to={"/"} id="deconexion">
          Se déconnecter
        </Link>
      </div>
      <i className="fas fa-user-circle"></i>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  align-items: flex-end;
  padding: 0 60px;

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
