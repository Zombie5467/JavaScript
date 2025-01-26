import useFavorites from "./useFavorites";
import { Movie } from "./searchByTitle";

const FavoritesList = () => {
    const { favorites, removeFavorite } = useFavorites();

    return (
        <div>
            <h2>Películas Favoritas</h2>
            {favorites.map((movie: Movie) => (
                <div key={movie.imdbID}>
                    <h3>{movie.title} ({movie.year})</h3>
                    <button onClick={() => removeFavorite(movie.imdbID)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default FavoritesList;
