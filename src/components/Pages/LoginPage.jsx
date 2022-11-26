import { useState } from "react";

export default function LoginPage() {
  const [nom, setNom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${nom}`);
    setNom("");
  };

  return (
    <>
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
    </>
  );
}
