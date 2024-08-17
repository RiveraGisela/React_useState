import React,{useState} from 'react'

export const Home = () => {
    const [name, setName] =useState('')
    return (
        <>
        <p>Realiza un componente que capture por medio de inputs:
        Nombre completo cree el siguiente saludo: “Bienvenido nombre (Realizado en clase)</p>
        <h1>Bienvenido {name}</h1>
        <input onKeyDown={event=>setName(event.target.value)} type="text" id="nombre" name="nombre" placeholder="Nombre completo"/>

    
    </>
    )
}

