import { Movie } from "./types"

interface movieTypeProps {
  movie: Movie
}

function MovieItem({movie}: movieTypeProps) {

  return (
    <>
    <li className="flex bg-slate-200 bg-opacity-10 rounded gap-3 ">
      <label className="p-3 flex gap-3 min-w-[20rem]" htmlFor={movie.id}>
      <input className="w-6 h-6" id={movie.id} type="checkbox" />
      {movie.name}
      </label>
    </li>

    </>
  )
}

export default MovieItem
