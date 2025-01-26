import fetchMoviesByTitle from "./moviesApi";
import { useState, useEffect } from "react";
import useFavorites from "./useFavorites";



interface SearchProps {
    texto: string;
}

// Interface basada en la clave Search del objeto JSON devuelto por la API de OMDb.
export interface Movie {
    title: string;      // Título de la película
    year: string;       // Año como cadena
    imdbID: string;     // ID de IMDB como cadena
    type: string;       // Tipo de contenido (ejemplo: "movie")
    poster: string;     // URL del póster
}


function SearchByTitle ({texto}:SearchProps) {

    const { addFavorite } = useFavorites();

    const handleAddFavorite = (movie: Movie) => {
        addFavorite(movie);
        console.log(`${movie.title} agregado a favoritos.`);
    };


    const [searchTitle, setSearchTitle] = useState(""); //Para buscar por titulo
    const [movies, setMovies] = useState<Movie[]>([]); //Estado para almacenar las películas

    // para manejar el evento del input con react y typescript
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTitle(event.target.value);
      };

     // El botón 
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
        {movies.map((movie) => (
        <div key={movie.imdbID}>
            <h3>{movie.title} ({movie.year})</h3>
            <button onClick={() => handleAddFavorite(movie)}>Agregar a Favoritos</button>
        </div>
))}

    </div>)
}

export default SearchByTitle;