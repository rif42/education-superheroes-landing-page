import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
