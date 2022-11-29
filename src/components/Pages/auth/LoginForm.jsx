import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../themes";
import ButtonSubmit from "../../ButtonSubmit";
import Input from "../../Input";

export default function LoginForm() {
  // 1. State
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // 2. comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`/dashboard/${inputValue}`);
  };

  // 3. affichage (render)
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>

      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        Icon={<i class="far fa-user-circle icon"></i>}
        type="name"
        placeholder="Entrez votre prénom"
        className="input_Auth"
        required
      />

      <ButtonSubmit
        className="button_Auth"
        type="submit"
        label="Accéder à mon espace"
        Icon={<i className="fas fa-chevron-right icon"></i>}
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  padding: 2.5rem 2rem;
  text-align: center;

  hr {
    border: 1.5px solid ${theme.colors.primary_burger};
  }

  h1 {
    color: ${theme.colors.white};
    font-size: 48px;
  }

  h2 {
    color: ${theme.colors.white};
    font-size: 36px;
  }

  .button_Auth {
    .icon {
      color: ${theme.colors.white};
      margin: 0 0 0 13px;
    }

    &:hover {
      .icon {
        color: ${theme.colors.primary};
      }
    }
  }
`;
