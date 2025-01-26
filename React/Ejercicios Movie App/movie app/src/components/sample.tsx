// FavoritesContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

// Define la interfaz para la película favorita
interface Movie {
    title: string;
    year: string;
    imdbID: string;
    poster: string;
}

// Interfaz para el contexto
interface FavoritesContextType {
    favorites: Movie[];
    addFavorite: (movie: Movie) => void;
    removeFavorite: (imdbID: string) => void;
}

// Crear el contexto con un valor predeterminado (vacío)
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
    children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
    // Estado local para almacenar las películas favoritas
    const [favorites, setFavorites] = useState<Movie[]>([]);

    // Función para agregar una película a favoritos
    const addFavorite = (movie: Movie) => {
        setFavorites((prev) => [...prev, movie]);
    };

    // Función para eliminar una película de favoritos
    const removeFavorite = (imdbID: string) => {
        setFavorites((prev) => prev.filter((movie) => movie.imdbID !== imdbID));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContext;
