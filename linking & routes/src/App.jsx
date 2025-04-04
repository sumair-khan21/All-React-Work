import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'

import Layout from './pages/layout'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Nopage from './pages/Nopage'
import Navbar from './Components/Navbar'
import User from './pages/User'
function App() {
const [isToggle,setIsToggle]= useState(false)
function Foo(){
   console.log("time render")
}

useEffect (()=>{
   Foo()
})
  return (
    <>
     <h1>React routing</h1>
     <Layout/>
     <Home/>
     <About/>
     <Blog />
     <Nopage />
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/user' element={<User/>}/>
</Routes>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/layout' element={<Layout/>} />
      <Route path='/nopage' element={<Nopage/>} />
     </Routes>


<button onClick={()=>setIsToggle(!isToggle)}>click</button>
    </>
  )
}

export default App
