import styled from "styled-components";
import { theme } from "../../../themes";
import Header from "../../layout/Header";

function DashboardPage() {

  return (
    <DashboardPageStyled>
      <Header />
    </DashboardPageStyled>
  );
}

const DashboardPageStyled = styled.div`
  background-color: ${theme.colors.background_white};
  width: 100%;
  height: 100vh;


  .logo {
    transform: scale(1);

    @media (max-width: 768px) {
      transform: scale(0.8);
      margin-left: -10px;
    }
  }

`;

export default DashboardPage;
