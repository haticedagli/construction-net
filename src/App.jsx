import { useState } from 'react'
import constructionLogo from './assets/construction.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={constructionLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Sur İnşaat Fileleri</h1>
      <div className="card">
        <p>
          Çok yakında sizinle burada buluşuyor olucaz.
        </p>
      </div>
      <p className="read-the-docs">
        <p><a href="mailto:surinsaatfileleri@gmail.com">Mail göndermek için tıkla</a></p>
      </p>
    </>
  )
}

export default App
