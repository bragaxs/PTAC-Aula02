import { useState } from "react"

export default function Main(){
    const [nome, setNome] = useState(true);
    
    return(
        <main>
        <input 
        type="text" 
        name="" id=""
        onChange={(event)=> setNome(event.target.event)}
        />
        {nome}
    </main>
);
}