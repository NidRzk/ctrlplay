import { useEffect, useState } from 'react'
import './App.css'

function Weather(){
  cont [weather] = useState({
    temp: 24,
    condition: 'Céu limpo',
    city: 'Rio de Janeiro'
  })

  return (
    <div className='wheater-card'>
      <div className="weather-info">
        <h3>{weather.temp}</h3>
        <p>{weather.condition} ° {weather.city}</p>
      </div>
    </div>
  )
}

function Clock(){
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  function formatTime(date){
    return date.toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit', second: '2-digit'})
  }

  function getGreeting(date){
    const hour = date.getHours()
    if (hour < 12) return 'Bom dia'
    if (hour < 18) return 'Bom tarde'
    return 'Bom noite'
  }

  return (
    <div className='clock-container'>
      <span className='clock-container'>{formatTime(time)}</span>
      <span className='greeting-display'>{getGreeting(time)}</span>
    </div>
  )
}

function App() {
  const [links] = useState([
    {name: 'GitHub', url: 'https://github.com', description: 'Meus repositórios e códigos'},
    {name: 'LinkedIn', url: 'https://linkedin.com', description: 'Newtworking e vagas'},
    {name: 'Figma', url: 'https://figma.com', description: 'Design e protótipos'},
    {name: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Resoluções de problemas'},
  ])

  return (
    <div className='dashboard-container'>
      <header className='top-section'>
         <Clock/>
        <Weather/>
      </header>
    
      <main>
        <h2>Atalhos Rápidos</h2>

        <div className='links-grid'>
          <a href="" target='_blank' rel='noopener noreferrer' className='link-card'>
          <h4></h4>
          <span></span>
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
