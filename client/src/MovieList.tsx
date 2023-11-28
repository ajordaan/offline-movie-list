import MovieItem from "./movieItem"
import { Movie } from "./types"

interface movieListProps {
  movies: Movie[]
}
function MovieList({movies}: movieListProps) {
  const movieList = movies.map(movie => <MovieItem movie={movie}/>)

  return <ul className="flex flex-col items-start gap-8"> {movieList} </ul>
}

export default MovieList
