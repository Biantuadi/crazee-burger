import styled from "styled-components";
import { theme } from "../../../themes";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  
  return (
    <LoginPageStyled>
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ${theme.colors.blue};

`;