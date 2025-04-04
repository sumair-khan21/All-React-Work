import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from './components/Button'

function App() {
 return(
  <>
<div className='main'>
  <span className='main1'>
<h2>Try <b>Sign</b> Free for 15 days</h2>
<p>Already have a formstock account? <span style={{color:"skyblue"}}>Start your trial in app</span></p>
  
<section style={{display:"flex"}}>
   <div style={{margin:"5px"}}>
   <p> Firstname  </p>

      
  <TextField id="outlined-basic" label="First Name" variant="outlined" />
  </div>

  <div style={{margin:"5px"}}>
   <p> Lastname  </p>

      
  <TextField id="outlined-basic" label="Last Name" variant="outlined" />
  </div>
  </section>

<div>
   <p> Work Email  </p>

      
  <TextField style={{width:"460px"}} id="outlined-basic" label="Work Email" variant="outlined" />
  </div>

  <div>
   <p> Password  </p>

  
  <TextField style={{width:"460px"}}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        
  
  </div>

  <div>
   <p> Address  </p>

      
  <TextField style={{width:"460px"}} id="outlined-basic" label="Address" variant="outlined" />
  </div>
  
<p>form stack has updated our term of services effective January 4-2023. <br />
we encourage you to read the document in its entirely.


</p>
<Button/>
</span>
</div>
  </>
 )
}

export default App
