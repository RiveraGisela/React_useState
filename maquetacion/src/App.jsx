import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { States } from './components/States/States'
import { Navbar } from './components/NavBar/NavBar'
import { Background } from './pages/Background/Background'
import Calculadora from './pages/Calculadora/Calculadora'
import { Registro } from './pages/Registro/Registro'
import { Tareas } from './pages/Tareas/Tareas'
import { Header } from './Header/Header'
import { Route, Routes } from 'react-router'
import {Home} from './components/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>





export const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/> }></Route>
      <Route path='/Calculadora' element={<Calculadora/> }></Route>
      <Route path='/Registro' element={<Registro/> }></Route>
      <Route path='/Tareas' element={<Tareas/> }></Route>
      <Route path='/Background'element={<Background/>}></Route>
      <Route path= '*' element={<NotFound/> }></Route>
    </Routes>
    </>
  )
}







