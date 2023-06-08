import styled from "styled-components";
// import { theme } from "../../../themes";
import Header from "../../layout/Header";
import MainDashboard from "./MainDashboard";

function DashboardPage() {
  return (
    <DashboardPageStyled>
      <Header />
      <MainDashboard />
    </DashboardPageStyled>
  );
}

const DashboardPageStyled = styled.div`
  background-color: transparent;
  width: 90%;
  height: 95%;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
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
