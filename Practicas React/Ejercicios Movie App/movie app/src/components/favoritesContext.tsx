import { createContext, useState, ReactNode } from "react"; // node para envolver componentes hijos dentro del contexto
import { Movie } from "./searchByTitle"; // Importamos la interfaz de las películas

//Interfaz para el contexto
interface FavoritesContextType {
    favorites: Movie[]; // Lista de películas favoritas
    addFavorite: (movie: Movie) => void; // Función para agregar una película
    removeFavorite: (imdbID: string) => void; // Función para eliminar una película
}

// Creamos el contexto con un valor inicial vacío
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    const addFavorite = (movie: Movie) => {
        if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
            setFavorites((prev) => [...prev, movie]);
        }
    };

    const removeFavorite = (id: string) => {
        setFavorites((prev) => prev.filter((fav) => fav.imdbID !== id));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
    
};

export default FavoritesContext;


