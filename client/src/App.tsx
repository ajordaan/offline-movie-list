import { useEffect, useState } from "react";
import { Movie } from "./types";
import MovieList from "./MovieList";
import AddMovieItem from "./AddMovieItem";
import ky from 'ky';

function App() {

  const [movies, setMovies] = useState([] as Movie[])

  const createMovie = async (name: string) => {
    console.log('movie created')
    console.log(name)
    const movie: Movie = { id: 'sdff', name, persisted: false, completed: false }

    const json = await ky.post('http://localhost:3000/movies', { json: movie }).json();
    console.log(json)
    setMovies([movie, ...movies])
  }

  const loadMovies = async() => {
    const serverMovies: Movie[] = await ky.get('http://localhost:3000/movies').json();
    console.log(serverMovies)
    setMovies([...serverMovies])
  }
useEffect(() => {
  loadMovies()
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
