import React, { useState } from 'react';
import Swal from 'sweetalert2'


export const Registro = () => {
  const [personas, setPersonas] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    usuario: '',
    correo: '',
    teléfono: '',
    contraseña: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const exists = personas.some(
      (persona) =>
        persona.contraseña === formData.contraseña || 
        persona.usuario === formData.usuario || 
        persona.correo === formData.correo
    );

    if (exists) {
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El usuario con este ID, usuario o correo ya existe.",
      });
    } else {
      setPersonas([...personas, formData]);
      Swal.fire("Usuario registrado exitosamente.");
      setFormData({
        nombre: '',
        usuario: '',
        correo: '',
        teléfono: '',
        contraseña: '',
      });
    }
  };

  return (
    <div>
      <p>Realice un programa que por medio de un formulario:
         nombre,usuario,correo,teléfono,id,correo. registre en un array con 
         el objeto de esta persona,
         en caso de que ya existe devuelva una alerta notificando la novedad.</p>
      <h2>Registro de Persona</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="usuario"
          placeholder="Usuario"
          value={formData.usuario}
          onChange={handleChange}
          required
        />
        <input
        type="tel"
        name="teléfono"
        placeholder="Teléfono"
        value={formData.teléfono}
        onChange={handleChange}
        required
          
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={formData.correo}
          onChange={handleChange}
          required
          
        />
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};



