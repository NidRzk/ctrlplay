import { useParams } from "react-router-dom";

import filmes from "../data/filmes";

function Detalhes(){

    const {id}=useParams();

    const filme=filmes.find(f=>f.id===Number(id));

    return(

        <div>

            <img
            src={filme.imagem}
            width="350"
            />

            <h1>{filme.titulo}</h1>

            <h3>{filme.categoria}</h3>

            <p>{filme.descricao}</p>

            <h2>⭐ {filme.nota}</h2>

        </div>

    )

}

export default Detalhes;