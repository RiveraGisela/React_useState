import React from 'react'
import { Navbar } from '../components/NavBar/NavBar'
import './Header.css'
import img from '../assets/logo.gif'


export const Header = () => {
  return (
    <header className='header'>
        <img className='logo' src={img} alt="logo_react" />
        <Navbar/>
      
    </header>
  )
}


