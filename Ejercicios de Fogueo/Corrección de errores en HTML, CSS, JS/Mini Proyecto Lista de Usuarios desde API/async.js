// Usando async/await
async function obtenerUsuarios() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // console.log(data);

  try {
    const usuarios = data.map((usuario) => {
      return {
        name: usuario.name,
        email: usuario.email,
      };
    });

    const titulo = document.createElement("h1");
    titulo.innerText = "Lista de Usuarios usando async/await";
    document.body.appendChild(titulo);
    usuarios.forEach((element) => {
      const li = document.createElement("li");
      li.innerText = `${element.name}: ${element.email}`;
      document.body.appendChild(li);
    });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
  }
}

obtenerUsuarios();
// console.log("Hola, mundo!");
