import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'




const Navbar = () => {
   let location = useLocation();
    
   
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">iNotebook</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <NavLink exact className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink exact className={`nav-link ${location.pathname==="/about"?"active":""}`} aria-current="page" to="/about">About</NavLink>
                  </li>
                  
                  </ul>
            </div>
         </div>
      </nav>
   )
}

export default Navbar