import React from "react";
import styled from "styled-components";

export default function Menu() {
  return (
    <MenuStyle>
      <h2>Menu</h2>
    </MenuStyle>
  );
}

const MenuStyle = styled.aside`
  border: 1px solid red;

  @media (max-width: 630px) and (min-width: 0px) {
    display: none;
  }
`;
