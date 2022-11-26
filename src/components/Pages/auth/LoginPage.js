import styled from "styled-components";
import { theme } from "../../../themes";
import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/img/burger-background.jpg") rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-blend-mode: darken;
`;
