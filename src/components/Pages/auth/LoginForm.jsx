import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../themes";

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
      <input
        type="name"
        required
        placeholder="Entrez votre prénom"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input type="submit" value="Accéder à mon espace" />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  border: 1px solid ${theme.colors.white};
  padding: 2.5rem 2rem;
 text-align: center;
  max-width: 500px;

  hr{
    border: 1.5px solid ${theme.colors.primary};
    width: 100%;

  }

  h1 {

    color: ${theme.colors.white};
    font-size: 48px;
  }

  h2{
    color:  ${theme.colors.white};
    font-size: 36px;
  }

  input[type="submit"] {
    margin-top: 25px;
  }
`;

