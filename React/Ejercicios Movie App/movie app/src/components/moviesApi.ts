import { Movie } from './searchByTitle';


export async function fetchMoviesByTitle(title: string): Promise<Movie[]> {
    const apiKey = "485f3b7a"; // Tu API Key
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.Response === "False") {
        throw new Error(data.Error || "Nada Encontrado.");
    }

    return data.Search || [];
}


export default fetchMoviesByTitle;
