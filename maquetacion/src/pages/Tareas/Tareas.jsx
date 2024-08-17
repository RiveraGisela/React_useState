import React, { useState } from 'react';
import Swal from 'sweetalert2'

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, formData]);
    setFormData({ nombre: '', descripcion: '' });
    Swal.fire("Tarea creada con exito!!!.");
  };

  return (
    <>
    <p>Realice un programa que capture en un input la tarea que el usuario guarde en 2 input(nombre de la tarea, descripción).</p>
    <div>
      <h2>Agregar Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre de la tarea"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
          required
        />
        <button type="submit">Guardar Tarea</button>
      </form>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <strong>{tarea.nombre}</strong>: {tarea.descripcion}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};



