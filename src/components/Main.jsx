import { useState } from "react";

export default function Main() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState();
  const [listaContato, setListaContato] = useState([]);
  const [cpf, setCpf] = useState();
  
  const registrar = (event) =>{
    event.preventDefault();
    alert("Ola, dados enviados!")
    setListaContato([...listaContato,{
      nomeSalvo: nome,
      telefoneSalvo: telefone,
      cpf: cpf
    }])
  };
  console.table(listaContato)
  return (
    <main>
      <form onSubmit={registrar}>
        <label htmlFor="title">Dados:</label>
        <input
          type="text"
          name=""
          id="title"
          onChange={(event) => setNome(event.target.value)}
        />
        {nome}
        <input
          type="number"
          name=""
          id=""
          onChange={(event) => setTelefone(event.target.value)}
        />
        {telefone}
        <button className="cssforbutton">Enviar dados</button>
      </form>
      {listaContato.map((contato, index)=> 
      <div key={index}>
        <p>
          {contato.nomeSalvo}
          {contato.telefoneSalvo}
        </p>
      </div>)}
    </main>
  );
}
