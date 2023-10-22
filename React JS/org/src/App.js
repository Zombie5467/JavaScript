import { useState } from 'react';
import {v4 as uuid } from "uuid"
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/miOrg';
import Equipo from './componentes/equipo';
import Footer from './componentes/footer';



function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: 'Front End',
      foto: 'https://avatars.githubusercontent.com/u/100423609?v=4',
      nombre: 'Zombie5467',
      puesto: 'Estudiante',
      fav: true
    },
    {
      id: uuid(),
      equipo: 'Programación',
      foto: 'https://avatars.githubusercontent.com/u/100423609?v=4',
      nombre: 'Zombie5467',
      puesto: 'Estudiante',
      fav: false
    },
    {
      id: uuid(),
      equipo: 'UX y Diseño',
      foto: 'https://avatars.githubusercontent.com/u/100423609?v=4',
      nombre: 'Zombie5467',
      puesto: 'Estudiante',
      fav: true
    },
    {
      id: uuid(),
      equipo: 'Mobil',
      foto: 'https://avatars.githubusercontent.com/u/100423609?v=4',
      nombre: 'Zombie5467',
      puesto: 'Estudiante',
      fav: false
    },
    {
      id: uuid(),
      equipo: 'Front End',
      foto: 'https://avatars.githubusercontent.com/u/100423609?v=4',
      nombre: 'Zombie5467',
      puesto: 'Estudiante',
      fav: false
    },
    {
      id: uuid(),
      equipo: 'Innovación y Gestión',
      foto: 'https://avatars.githubusercontent.com/u/100423609?v=4',
      nombre: 'Zombie5467',
      puesto: 'Estudiante',
      fav: false
    },
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programación',
      colorPrimario: '#57c278',
      colorSecundario: '#d9f7e9',
    },
    {
      id: uuid(),
      titulo: 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF',
    },
    {
      id: uuid(),
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2',
    },
    {
      id: uuid(),
      titulo: 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8',
    },
    {
      id: uuid(),
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5',
    },
    {
      id: uuid(),
      titulo: 'Mobil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9',
    },
    {
      id: uuid(),
      titulo: 'Innovación y Gestión',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF',
    },
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar colaborador 
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)
    // spread operator 
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar:", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);
  }

  // Actualizar color
  const actualizarColor = (color, id) => {
    console.log("actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div className="App">
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => {
        return (
          <Equipo
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.equipo === equipo.titulo
            )}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App



      
/* 
  <Equipo equipo="Programación" />
  <Equipo equipo="Front End" />
  <Equipo equipo="Data Science" />
  <Equipo equipo="Devops" />
  <Equipo equipo="UX y Diseño" />
  <Equipo equipo="Mobil" />
  <Equipo equipo="Innovación y Gestión" /> 
*/
      