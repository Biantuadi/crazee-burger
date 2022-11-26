import React from 'react'
import styled from 'styled-components';
import { theme } from '../../themes';
// import {logoImg} from '/img/logo-burger-orange.png';

export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="/img/logo-burger-orange.png" alt="logo" />
      <h1>BURGER</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
display: flex;
align-items: center;
transform: scale(2.5);

h1 {
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  color: ${theme.colors.primary_burger};
  letter-spacing: 1.5px;
  line-height: 1em;
}
  
  img{
    height: 60px;
    width: 80px;
    object-fit: contain;
    object-position: center;
    margin: 0 5px;
  }
`;