import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'


 function Navbar() {
const [click, setClick] = useState(false)


const handleClick =() => setClick(!click)


  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
         <Link to='/' className='navbar-logo'>
           REISE
         <span><i class="fa-solid fa-shield-blank"></i></span>
         </Link>
         <div className='menu-icon' onClick={handleClick}>
           <i className={ click ? 'fas fa-times' : 'fas fa-bars'}/>
           
           </div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           <li className='nav-item'>
             <Link to='/home' className='nav-links'onClick={closeMobil}>
               home
               
                </Link>
             </li>
             <li className='nav-item'>
             <Link to='/service' className='nav-links'onClick={closeMobil}>
               Service
               
                </Link>
             </li>
             <li className='nav-item'>
             <Link to='/products' className='nav-links'onClick={closeMobil}>
               Products
               
                </Link>
             </li>
             <li className='nav-item'>
             <Link to='/signup' className='nav-links-mobil'onClick={closeMobil}>
               Sign-up
               
                </Link>
             </li>
           
           </ul>
          </div>  
          
        
        </nav>
    
    
    
    
    </>
  )
}
export default Navbar;

