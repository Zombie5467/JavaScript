import { useState } from 'react';
import './Formulario.css';
import Campo from '../campoTexto/Campo';
import ListaOpciones from '../select';
import Boton from '../boton';

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState('');
  const [puesto, actualizarPuesto] = useState('');
  const [foto, actualizarFoto] = useState('');
  const [equipo, actualizarEquipo] = useState('');

  const [titulo, actualizarTitulo] = useState('');
  const [color, actualizarColor] = useState('');

  const { registrarColaborador, crearEquipo } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Manejar el Envio');
    let datosEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datosEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario__container">
      <form onSubmit={manejarEnvio}>
        <h2>Llena el formulario para crear el colaborador</h2>
        <Campo
          titulo="Nombre"
          placeholder="Nombre del Integrante"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />

        <Campo
          titulo="Puesto"
          placeholder="Puesto del integrante"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />

        <Campo
          titulo="Foto"
          placeholder="Foto de Perfil"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />

        <ListaOpciones
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
          equipos={props.equipos}
        />

        <Boton>Crear Colaborador</Boton>
      </form>

      <form onSubmit={manejarNuevoEquipo}>
        <h2>Llena el formulario para crear el equipo</h2>
        <Campo
          titulo="Titulo"
          placeholder="Titulo del Equipo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />

        <Campo
          titulo="Color"
          placeholder="Color del equipo en HEX"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />

        <Boton>Registrar Equipo</Boton>
      </form>
    </section>
  );
};

export default Formulario;
