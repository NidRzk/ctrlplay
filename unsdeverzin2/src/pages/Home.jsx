import Banner from "../components/Banner";
import Card from "../components/Card";
import filmes from "../data/filmes";

function Home(){

    return(

        <div>

            <Banner/>

            <h2>Recomendados</h2>

            <div className="grid">

                {filmes.slice(0,2).map((filme)=>(

                    <Card
                        key={filme.id}
                        filme={filme}
                    />

                ))}

            </div>

        </div>

    )

}

export default Home;