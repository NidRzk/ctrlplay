import { useState } from "react";

import Card from "../components/Card";

import filmes from "../data/filmes";

function Catalogo(){

    const [categoria,setCategoria]=useState("Todos");

    const lista = categoria==="Todos"
    ? filmes
    : filmes.filter(f=>f.categoria===categoria);

    return(

        <div>

            <h1>Catálogo</h1>

            <select
            onChange={(e)=>setCategoria(e.target.value)}
            >

                <option>Todos</option>

                <option>Ficção</option>

                <option>Ação</option>

                <option>Série</option>

            </select>

            <div className="grid">

                {lista.map(f=>(
                    <Card
                    key={f.id}
                    filme={f}
                    />
                ))}

            </div>

        </div>

    )

}

export default Catalogo;