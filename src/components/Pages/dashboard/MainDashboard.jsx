import React from "react";
import styled from "styled-components";
import Panier from "./Panier";
import { theme } from "../../../themes";
import SectionMenu from "./SectionMenu";

export default function MainDashboard() {
  return (
    <MainStyled>
      <Panier />
      <SectionMenu />

      
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: flex;
  box-shadow: 0 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  background-color: ${theme.colors.background_white};

  aside {
    flex: 1;
  }

  section {
    flex: 3;
  }
`;
