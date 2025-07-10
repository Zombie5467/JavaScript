// Usando fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((response) => {
    const usuarios = response.map((usuario) => {
      return {
        name: usuario.name,
        email: usuario.email,
      };
    });
    // console.log(usuarios);

    const titulo = document.createElement("h1");
    titulo.innerText = "Lista de Usuarios usando fetch";
    document.body.appendChild(titulo);

    const ul = document.createElement("ul");
    usuarios.forEach((usuario) => {
      const li = document.createElement("li");
      li.innerText = `${usuario.name}: ${usuario.email}`;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  })
  .catch((error) => {
    console.error("Ocurrió un error al obtener los datos:", error);
    const errorMensaje = document.createElement("p");
    errorMensaje.innerText = "No se pudo cargar la lista de usuarios.";
    errorMensaje.style.color = "red";
    document.body.appendChild(errorMensaje);
  });
