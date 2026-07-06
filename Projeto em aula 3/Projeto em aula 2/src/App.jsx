import { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [erro, setErro] = useState('')

  async function buscarUsuario() {
    try {
      setErro('')
      setUser(null)

      const resposta = await axios.get(`https://api.github.com/users/${username}`)
      setUser(resposta.data)

    } catch (e) {
      setErro('Usuário não encontrado.')
    }
  }
  return (
    <div>
      <h1>Buscador GitHub</h1>
      <input type="text" placeholder="Digite um usuário" value={username} onChange={(e) => setUsername(e.target.value)} />

      <button onClick={buscarUsuario}>Buscar</button>
      {erro && <p>{erro}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt="Imagem do usuário" />
          <h2>{user.name || "Sem nome"}</h2>
          <p>@{user.login}</p>
          <p>Seguidores: {user.followers}</p>
          <p>Seguindo: {user.following}</p>
          <p>Respositórios: {user.public_repos}</p>

          <a href={user.html_url} target="_blank" rel="noreferrer">Ver perfil</a>
        </div>
      )}
    </div>
  )
}

export default App
