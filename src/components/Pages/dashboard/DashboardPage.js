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
  width: 90%;
  height: 95%;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }

  header {
    border-radius: 10px 10px 0 0;

    @media (max-width: 768px) {
      border-radius: 0;
    }
  }

  .logo {
    transform: scale(1);

    @media (max-width: 768px) {
      transform: scale(0.8);
      margin-left: -10px;
    }
  }
`;

export default DashboardPage;
