import React from 'react'
import { NavItem } from '../NavItem/NavItem'
import './NavBar.css'

export const Navbar = () => {
  return (
    <nav>
        <ul className='ulNav'>
            <NavItem to= '/' content='Inicio'/>
            <NavItem to ='/Calculadora' content='Calculadora'/>
            <NavItem to ='Background' content='Background'/>
            <NavItem to = '/Registro'content='Registro'/>
            <NavItem to = '/Tareas'content='Lista de tareas'/>
        </ul>
      
    </nav>
  )
}