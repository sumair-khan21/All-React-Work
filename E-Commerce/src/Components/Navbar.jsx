import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
    <nav className="relative px-1 py-1 flex justify-between items-center bg-white">
		<a className="text-2xl font-bold leading-none"  style={{color:" #b8854b"}}>
		<Link to={"/"}>Woo Commerce Web</Link>		</a>
		<div className="lg:hidden">
			<button className="navbar-burger flex items-center text-blue-600 p-3">
				<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li><a className="text-sm text-blue-600 font-bold hover:text-gray-500"  style={{color:" #b8854b"}}>
                <Link to={"/"}>Home</Link> </a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a className="text-sm text-gray-400 font-bold" href="#"  style={{color:" #b8854b"}}>Products</a></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><a className="text-sm font-bold hover:text-[#b45309]-700" href="#"  style={{color:" #b8854b"}}>Categories</a></li> 
			
		</ul>
		
		<a className="hidden lg:inline-block py-2 px-6 hover:bg-amber-200  text-sm text-white font-bold rounded-xl transition duration-200" href="#"  style={{background:" #b8854b"}}>Add to Cart</a>
	</nav>
   </>
  )
}

export default Navbar
