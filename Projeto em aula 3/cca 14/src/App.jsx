import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState(null)

  async function handleForm(e){
    e.preventDefault()

    try {
      const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      setEndereco(resposta.data)

    } catch (e){
      console.error(e)
    }
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <label>Digite o CEP:</label>
        <input type="text" placeholder='CEP...' onChange={(e) => setCep(e.target.value)}/>
        <button>Buscar</button>
      </form>

      {endereco &&
        <div>
          <h2>Informações sobre o CEP {endereco.cep}</h2>
          <p>Bairro: {endereco.bairro}</p>
          <p>DDD: {endereco.ddd}</p>
          <p>Estado: {endereco.estado}</p>
          <p>Localidade: {endereco.localidade}</p>
          <p>Logradouro: {endereco.logradouro}</p>
        </div>
      }
    </div>
  )
}

export default App
