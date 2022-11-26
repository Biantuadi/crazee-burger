import { useState } from "react";
import "./App.css";

function App() {
  const [nom, setNom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${nom}`);
    setNom("");
  };

  return (
    <div className="App">
      <h1>Bienvenue chez nous !</h1>
      <p>Connectez-vous</p>
      <form action="submit" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="name"
          required
          placeholder="Entrez votre prenom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default App;
