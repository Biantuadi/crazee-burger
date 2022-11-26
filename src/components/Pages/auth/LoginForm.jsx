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
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,h2 {

    color: ${theme.colors.white};
  }

  input[type="submit"] {
    margin-top: 25px;
  }
`;

