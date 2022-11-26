import { useState } from "react";

function LoginForm() {
    // 1. State
  const [inputValue, setInputValue] = useState("");

  // 2. comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  // 3. affichage (render)
    return (
        <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <h2>Connectez-vous</h2>
        <input
          type="name"
          required
          placeholder="Entrez votre prenom"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" value="Envoyer" />
      </form>
    );
}

export default LoginForm;