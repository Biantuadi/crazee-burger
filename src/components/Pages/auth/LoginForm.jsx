import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
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
    <form action="submit" onSubmit={handleSubmit}>
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
    </form>
  );
}

export default LoginForm;
