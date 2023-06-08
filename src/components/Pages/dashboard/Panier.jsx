import React from "react";
import styled from "styled-components";

export default function Panier() {
  return (
    <PanierStyle>
      <h2>Panier</h2>
    </PanierStyle>
  );
}

const PanierStyle = styled.aside`
  border: 1px solid red;

  @media (max-width: 630px) and (min-width: 0px) {
    display: none;
  }
`;
