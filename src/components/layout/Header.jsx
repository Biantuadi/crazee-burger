import styled from "styled-components";
import { theme } from "../../themes";
import Logo from "../Logo";
import Navbar from "./Navbar";
import { refreshPage } from "../../utils/window";

export default function Header() {
  return (
    <HeaderStyled>
      <Logo onClick={() => refreshPage()} />
      <Navbar />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  color: #0122;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.white};
  align-items: center;
  padding: 7px 18px;
  /* height: 5rem; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .logo{
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 7px 0px;
  }
`;
