import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <ul>
       <li>
<Link to={"/"}>Home</Link>
       </li>
       <li><Link to={"/about"}>About</Link></li>
       <li><Link to={"/layout"}>Layout</Link></li>
       <li><Link to={"/blog"}>Blog</Link></li>
       <li><Link to={"/nopage"}>Nopage</Link></li>
    </ul>
 
    </>
  )
}


export default Navbar