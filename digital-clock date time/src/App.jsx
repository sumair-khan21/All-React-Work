import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskOne  from './Components/TaskOne'
import TaskTwo  from './Components/TaskTwo'
import TaskThree  from './Components/TaskThree'

function App() {
  


  return (
       <>
        <h2>Task One</h2>
<TaskOne/>
<h2>Task two</h2>
<TaskTwo/>
<h2>Task Three</h2>
<TaskThree/>
        
        </>
  )
}

export default App