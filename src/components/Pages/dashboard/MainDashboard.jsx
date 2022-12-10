import React from "react";
import styled from "styled-components";
import Items from "./Items";
import Menu from "./Menu";

export default function MainDashboard() {
  return (
    <MainStyled>
      <Menu />
      <Items />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: flex;

  aside {
    flex: 1;
  }

  ul {
    flex: 3;
  }
`;
