import { Link } from "react-router-dom";

interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string;
}

const MovieList: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
