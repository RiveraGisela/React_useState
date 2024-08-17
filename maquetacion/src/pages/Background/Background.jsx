import React, { useState } from 'react'

export const Background = () => {
    const [color, setColor]=useState('blue')

    const handleColor =() =>{
        const colors =['red','yellow','orange','pink','violet','blue','green']
        const randomIndex = Math.floor(Math.random()*colors.length)
        setColor(colors[randomIndex])
    }
    return (
    <div style={{background:color, padding:'2rem'}}>
        <h1>Ejercicio 3</h1>
        <p>Realice un programa que por medio de un botón genere un color aleatorio y lo coloque en el fondo de la aplicación.</p>
        <button onClick={handleColor}>Generar Color Aleatorio</button>

    </div>
    )
}


