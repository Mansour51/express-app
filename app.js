const express = require("express");

const app = express();

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const welcome = (req, res) => {
  res.send("Welcome to my ftotoavorite movie list");
};

app.get("/", welcome);

const moviesList = (req, res) => {
  res.status(200).json(movies);
};

app.get("/api/movies", moviesList);

const getMoviesId = (req, res) => {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == [req.params.id]) {
      res.status(200).json(movies[i]);
    } else if ([req.params.id] == 0 || [req.params.id] > movies.length) {
      res.status(404).send("Not Found");
    }
  }
};

app.get("/api/movies/:id", getMoviesId);

module.exports = app;
