import { useState, useEffect } from "react";
import {v4 as uuidv4 } from "uuid";

function InputId() {
  // const [movieId, setMovieId] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movies, setMovies] = useState<{ id: string; title: string; genre: string; description: string; }[]>([]);

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovieTitle(event.target.value);
  };

  const handleGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovieGenre(event.target.value);
  };

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovieDescription(event.target.value);
  };

  
  const handleButtonClick = () => {
    // const newTitle: { title: string} = {title: movieTitle}; // notación explícita
    const newMovie = {
      id: uuidv4(),
      title: movieTitle, 
      genre: movieGenre, 
      description: movieDescription 
    }; // Crear objeto con el título
    setMovies([...movies, newMovie]); // Añadir la nueva película al array
    setMovieTitle(""); // Limpiar el campo de entrada
    setMovieGenre(""); // Limpiar el campo de entrada
    setMovieDescription(""); // Limpiar el campo de entrada

  };

  // Mostrar la nueva película en la consola
  useEffect(() => {
    console.log(movies); // Este log se ejecutará cada vez que `titles` cambie
  }, [movies]);


  return (
    <div>
      <h1>Input 1 con ID</h1>
      <input title="Titulo" placeholder="Title" type="text" value={movieTitle} onChange={handleTitle} />
      <input title="Genero" placeholder="Genre" type="text" value={movieGenre} onChange={handleGenre} />
      <input title="Descripción" placeholder="Description" type="text" value={movieDescription} onChange={handleDescription} />
      {/* {movieTitle} */} {/* para que no muestre lo que escribo en pantalla */}
      <button onClick={handleButtonClick}>Enter</button>

      {/* para no mostrar el resultado en pantalla */}
      {/* <div>
                {titles.map((movie, index) => (
                    <div key={index}>{movie.title}</div>
                ))}
          </div>  */}
    </div>
  );
}

export default InputId;
