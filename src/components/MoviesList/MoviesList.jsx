import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => (
  <div className="movies">
    {movies.map(movie => {
      const title = movie.title.toLowerCase();
      const description = movie.description.toLowerCase();
      const queryTrimed = query.trim().toLowerCase();

      if (title.includes(queryTrimed) || description.includes(queryTrimed)) {
        return (<MovieCard key={movie.imdbId} movie={movie} />);
      }
    })}
  </div>
);
