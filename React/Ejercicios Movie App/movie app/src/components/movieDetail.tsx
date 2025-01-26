import { useParams } from "react-router-dom";

interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string;
}

const MovieDetail: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  const { id } = useParams<{ id: string }>(); // Especificamos que id es un string
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>Genre: {movie.genre}</p>
    </div>
  );
};

export default MovieDetail;
