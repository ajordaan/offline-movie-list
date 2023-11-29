import {  useEffect, useState } from "react";
import { Movie } from "./types";

interface movieTypeProps {
  movie: Movie;
  movieWatchedChanged: () => void;
}

function MovieItem({ movie, movieWatchedChanged }: movieTypeProps) {
  const [watched, setWatched] = useState(movie.watched);

  const toggleWatched = () => {
    const newWatchedState = !watched
    setWatched(newWatchedState);
    movieWatchedChanged()
  };

  return (
    <>
      <li className="flex bg-slate-200 bg-opacity-10 rounded gap-3 ">
        <label
          className="p-3 flex justify-between gap-3 min-w-[20rem]"
          htmlFor={movie.id}
        >
          <span className="flex gap-3">
            <input
              onChange={toggleWatched}
              checked={watched}
              className="w-6 h-6"
              id={movie.id}
              type="checkbox"
            />
            {movie.name}
          </span>
          <span>{movie.rating ?? "?"} / 10</span>
        </label>
      </li>
    </>
  );
}

export default MovieItem;
