import { useContext } from "react"; // node para envolver componentes hijos dentro del contexto
import FavoritesContext from "./favoritesContext";

export const useFavorites = () => {
    
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites debe usarse dentro de un FavoritesProvider");
    }
    return context;
};

export default useFavorites;

// este archivo es un helper