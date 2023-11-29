import MovieItem from "./MovieItem"
import { Movie } from "./types"
import ky from "ky";

interface movieListProps {
  movies: Movie[],
}

function MovieList({movies}: movieListProps) {

const updateMovie = async(movie: Movie) => {
  console.log('updating movie')
  movie.watched = !movie.watched
  console.log(movie)

    const serverMovie:Movie = await ky
      .put(`http://localhost:3000/movies/${movie.id}`, { json: movie })
      .json();
    console.log(serverMovie);
}
  const movieList = movies.map(movie => <MovieItem movieWatchedChanged={() => updateMovie(movie)} movie={movie}/>)

  return <ul className="flex flex-col items-start gap-8"> {movieList} </ul>
}

export default MovieList
