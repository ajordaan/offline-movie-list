import { useEffect, useState } from "react";
import { Movie } from "./types";
import MovieList from "./MovieList";
import AddMovieItem from "./AddMovieItem";
import ky from "ky";

function App() {
  const [movies, setMovies] = useState([] as Movie[]);

  const generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);

  const createMovie = async (name: string) => {
    console.log("movie created");
    console.log(name);
    const movie: Movie = {
      id: generateId(),
      name,
      persisted: false,
      watched: false,
    };

    const serverMovie:Movie = await ky
      .post("http://localhost:3000/movies", { json: movie })
      .json();
    console.log(serverMovie);
    setMovies([serverMovie, ...movies]);
  };

  const loadMovies = async () => {
    const serverMovies: Movie[] = await ky
      .get("http://localhost:3000/movies")
      .json();
    console.log(serverMovies);
    setMovies([...serverMovies]);
  };
  useEffect(() => {
    loadMovies();
  }, []);


  return (
    <>
      <h1 className="p-5 text-center text-3xl font-bold"> Movie List </h1>
      <div className="flex justify-center">
        <AddMovieItem onCreateMovie={createMovie} />
      </div>
      <div className="pt-10 grid place-items-center">
        <MovieList movies={movies} />
      </div>
    </>
  );
}

export default App;
