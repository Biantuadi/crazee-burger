import React from "react";
import styled from "styled-components";
import { theme } from "../themes";

export default function Logo({ onClick}) {
  return (
    <LogoStyled className="logo"  onClick={onClick}>
      <h1>CRAZEE</h1>
      <img src="/images/logo-burger-orange.png" alt="logo" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);
  
  h1 {
    font-size: 30px;
    text-align: center;
    color: ${theme.colors.primary_burger};
    letter-spacing: 1.5px;
    line-height: 1em;
  }

  img {
    height: 60px;
    width: 80px;
    object-fit: contain;
    object-position: center;
    margin: 0 5px;
  }

  
`;
