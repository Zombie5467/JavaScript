
SEGUNDA------------------------------------------------------------
function SearchByTitle ({texto}:SearchProps) {

    const [searchTitle, setSearchTitle] = useState(""); //Para buscar por titulo
    const [movies, setMovies] = useState<Movie[]>([]); //Estado para almacenar las películas

    // para manejar el evento del input con react y typescript
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTitle(event.target.value);
      };

    //   El botón 
      const handleSearchButton = async () => {
        
        console.log("Buscando:", searchTitle); // Aquí imprimimos el término de búsqueda
        
        if (!searchTitle.trim()) {
            console.log("Por favor, ingresa un título válido.");
            return;
        }
    
        try {
            const results = await fetchMoviesByTitle(searchTitle); // Llamada a la API
            console.log("Datos de la película:", results); // Imprime los datos obtenidos
            setMovies(results);
        } catch (error) {
            console.error("Error al buscar la película:", error);
        }
    };
    
       // Para mostrar en consola
       useEffect(() => {
        console.log("Películas actualizadas:", movies);
    }, [movies]); // Efecto que se ejecuta cuando cambian las películas

    return( 
    <div>
        <h1>{texto}</h1>
        <input type="text" title="buscar por titulo" placeholder="search by title" onChange={handleSearch} />
        <button onClick={handleSearchButton}>Buscar</button>
    </div>)
}
PRIMERA------------------------------------------------------------

import fetchMoviesByTitle from "./moviesApi";
import { useState, useEffect } from "react";

interface SearchProps {
    texto: string;
}


function SearchByTitle ({texto}:SearchProps) {

    const [searchTitle, setSearchTitle] = useState("");

    // para manejar el evento del input con react y typescript

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTitle(event.target.value);
      };

    //   El botón 
      const handleSearchButton = async () => {
        console.log("Buscando:", searchTitle); // Aquí imprimimos el término de búsqueda para probar
        
        if (!searchTitle.trim()) {
            console.log("Por favor, ingresa un título válido.");
            return;
        }
    
        try {
            const movieData = await fetchMoviesByTitle(searchTitle); // Llamada a la API
            console.log("Datos de la película:", movieData); // Imprime los datos obtenidos
        } catch (error) {
            console.error("Error al buscar la película:", error);
        }
    };
    

    return( 
    <div>
        <h1>{texto}</h1>
        <input type="text" title="buscar por titulo" placeholder="search by title" onChange={handleSearch} />
        <button onClick={handleSearchButton}>Buscar</button>
    </div>)
}

export default SearchByTitle;