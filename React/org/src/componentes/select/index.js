import "./select.css"

const ListaOpciones = (props) => {

  // const equipos = [
  // "Programación",
  // "Front End",
  // "Data Science",
  // "Devops",
  // "UX y Diseño",
  // "Mobil",
  // "Innovación y Gestión"
  // ]

  const manejarCambio = (e) => {
    console.log("cambio", e.target.value)
    props.actualizarEquipo(e.target.value);
  }

  return <div className="lista__opciones">
      <label>Equipos</label>
    <select value={props.valor} onChange={manejarCambio}>
      <option value="" disable defaultValue="" hidden>Seleccionar Equipo</option>
        {props.equipos.map((equipo, index) => {
          return <option key={index} value={equipo}>{equipo}</option>
        })} 
      </select>
    </div>
  }

export default ListaOpciones