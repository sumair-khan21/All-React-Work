import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import MenuAppBar from './components/AppbarComp'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Button />
     <MenuAppBar />
     <Home />
    </>
  )
}

export default App
