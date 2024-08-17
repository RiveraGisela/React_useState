import React from 'react'
import gif from '../../assets/notfound.gif'

export const NotFound = () => {
  return (
    <div>
      <p>Pagina no encontrada</p>
      <img src={gif} alt="Imagen de pagina no encontrada"/>
    </div>
  )
}

