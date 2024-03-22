import { useState } from "react";

export default function Main() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <main>
      <form>
        <label htmlFor="title">Dados:</label>
        <input
          type="text"
          name=""
          id="title"
          onChange={(event) => setNome(event.target.event)}
        />
        {nome}
        <input
          type="number"
          name=""
          id=""
          onChange={(event) => setTelefone(event.target.event)}
        />
        <button className="cssforbutton">Enviar dados</button>
        {telefone}
      </form>
    </main>
  );
}
