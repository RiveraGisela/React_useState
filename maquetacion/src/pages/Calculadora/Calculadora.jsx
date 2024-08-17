import React, {useState} from 'react'

const Calculadora = () => {
  const [num1, setNum1] =useState(0)
  const [num2, setNum2] =useState(0)

  const [resultado, setResultado] =useState(0)
  const handleAdd = () => setResultado(Number(num1) + Number(num2))


  return (
    <>
      <p>Realiza un programa que realice las 4 operaciones básicas capturando dos números en 
        inputs y mostrando el resultado en un h2(4 botones: sumar, restar, multiplicar, dividir)</p>
        <input onChange={(event)=>setNum1(Number(event.target.value))} type="text" placeholder='Ingrese un numero'  />
        <input onChange={(event)=>setNum2(Number(event.target.value))}type="text" placeholder='Ingrese un numero' />

        <button onClick={handleAdd}>Sumar +</button>
        <button onClick={() =>setResultado((num1)-(num2))}>Restar -</button>
        <button onClick={() => setResultado(((num1)*(num2)))}>Multiplicar *</button>
        <button onClick={() => setResultado(((num1)/(num2)))}>Dividir /</button>
        <h2>El resultado es: {resultado}</h2>
        

    </>
  )
}

export default Calculadora
