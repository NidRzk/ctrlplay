import { Link } from "react-router-dom";

function Card({filme}){

    return(

        <div className="card">

            <img src={filme.imagem} />

            <h2>{filme.titulo}</h2>

            <p>{filme.categoria}</p>

            <p>{filme.descricao}</p>

            <Link to={`/detalhes/${filme.id}`}>

                Ver detalhes

            </Link>

        </div>

    )

}

export default Card;