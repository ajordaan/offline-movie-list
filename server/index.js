const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Fake DB
let movies = [];

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((movie) => movie.id === id);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: "Movie not found" });
  }
});

app.post("/movies", (req, res) => {
  const newMovie = req.body;
  newMovie.persisted = true;
  newMovie.rating = getRandomInt(3, 9)
  movies.push(newMovie);

  console.log("Added New Movie ", newMovie);

  res.status(201).json(newMovie);
});

app.put("/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedMovie = req.body;
  updatedMovie.persisted = true;
  const index = movies.findIndex((movie) => movie.id === id);

  if (index !== -1) {
    movies[index] = { ...movies[index], ...updatedMovie };
    res.json(movies[index]);
  } else {
    res.status(404).json({ message: "Movie not found" });
  }
});

app.delete("/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((movie) => movie.id === id);
  movie.deleted = true;
  res.json({ message: "Movie deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * max) + min;
}
