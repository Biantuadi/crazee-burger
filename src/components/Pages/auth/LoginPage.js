import styled from "styled-components";
import Logo from "../../Logo";
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
  background-blend-mode: darken;

  .logo {
    @media screen and (max-width: 768px) and (min-width: 375px) {
      transform: scale(1.7);
      margin-bottom: -40px;
    }

    @media screen and (max-width: 375px) and (min-width: 310px) {
      transform: scale(1.5);
      margin-bottom: -40px;

      h1 {
        font-size: 26px;
      }
    }

    @media screen and (max-width: 310px) and (min-width: 280px) {
      transform: scale(1.3);

      h1 {
        font-size: 23px;
      }
    }
  }
`;
