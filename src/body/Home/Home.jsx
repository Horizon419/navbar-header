import React from 'react'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Outlet, Link} from 'react-router-dom';
import logo from '../Image/gpttoons.png'
import jman from '../Image/poti.png'
import './Home.css'

function Home() {
  return (
    <>
  <nav className='header'>
    <div className='header-container'>
    <img src={logo} className='logo' alt='gpttoons'/>
    <ul className='nav'>
    <li className='nav-items'>
      <Link to='/' className='nav-links'>Home</Link> 
      </li>
      <li className='nav-items'>
      <Link to='/About' className='nav-links'>About</Link> 
      </li>
     <li className='nav-items'>
       <Link to='/Work' className='nav-links'>Work</Link>
     </li>
      <li className='nav-items'>
        <Link to='/Services' className='nav-links'>Services</Link> 
      </li>
    </ul>
    </div>
    
    
<Outlet/>
  </nav>
  <div className='topBody'>
<div >
  <p>WELCOME TO MY</p>
<h1>WORLD</h1>
<h7>I design beautiful websites and
  mobile apps that modern trends demand
</h7>
<button><Link to='/About' className='nav-links'>CONTACT ME NOW</Link></button>
</div>
<div className='jman'>
  <img src={jman} alt='jman'/>
</div>
  </div>
  
  </>
  )
}
export default Home;



