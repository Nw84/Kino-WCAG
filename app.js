import express from "express";
import expressLayouts from "express-ejs-layouts";
import { marked } from "marked";

import fetch from "node-fetch";
import getRatings from "./src/script/getRatings.js";
import { loadReviews } from "./src/script/apiLoader.js";
import { getScreenings, getScreeningsMovie } from "./src/script/loadScreening.js";
import api from "./src/script/apiLoader.js";
import reviews from "./src/script/loadReviews.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

//I had to add this because the __dirname threw an error message that it was not defined
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const app = express();

let markdown = (md) => marked(md);

app.set("view engine", "ejs");
app.set("views", "./views")
app.use(expressLayouts)
app.set("layout", "./layouts/index")

app.use(express.static(__dirname + "/public"));


app.get("/", async (req, res) => {
  res.render("main", { page_name: "start" });
});

app.get("/api/screeningtime", async (req, res) => {
  const screening = await getScreenings(api);

  res.json(screening);
});

app.get("/api/movies/:movieId/reviews/:reviewPageId", async (req, res) => {
  let data = await loadReviews(req.params.movieId, req.params.reviewPageId);
  let lastPage = data.meta.pagination.pageCount;
  let review = data.data.map(r => new reviews(r));
  let reviewLength = review.length;

  res.json({
    data: review,
    metaLastPage: lastPage,
    metaLength: reviewLength
  })
});

// route for screeningtimes on movie page
app.get("/api/movies/:movieId/screeningtime", async (req, res) => {
  const screening = await getScreeningsMovie(api, req.params.movieId);

  res.json(screening)
});

app.get("/movies", async (req, res) => {
  const movies = await api.loadMovies();
  res.render("movies", { movies, page_name: "movies" });
});

app.get("/movies/:movieId", async (req, res) => {
  const movie = await api.loadMovie(req.params.movieId);
  if (movie) {
    res.render("movie", { movie, markdown, page_name: "movies" });
  } else {
    res.status(404).render("404", { page_name: "error" });
  }
});

app.get("/api/movies/:movieId/ratings", async (req, res) => {
  let data = await getRatings(req.params.movieId, api);
  let metaMsg = data.metaMsg;
  let rating = data.data;

  res.json({
    rating,
    metaMsg,
  });
});

app.use(express.json());

app.post("/api/movies/:movieId/reviews", async (req, res) => {
  const response = await fetch(
    "https://lernia-kino-cms.herokuapp.com/api/reviews",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          author: req.body.name,
          comment: req.body.comment,
          rating: req.body.rating,
          movie: req.params.movieId,
        },
      }),
    }
  ).then((res) => {
    return res.json();
  });
  res.status(201).end();
});

app.get("/aboutus", async (req, res) => {
  res.render("aboutus-history", { layout: "./layouts/aboutus.ejs", page_name: "aboutus", underpage_name: "history" });
});

app.get("/aboutus/faq", async (req, res) => {
  res.render("aboutus-faq", { layout: "./layouts/aboutus.ejs", page_name: "aboutus", underpage_name: "faq" });
});

app.get("/aboutus/accessibility", async (req, res) => {
  res.render("aboutus-accessibility", { layout: "./layouts/aboutus.ejs", page_name: "aboutus", underpage_name: "accessibility" });
});

app.get("/aboutus/policy", async (req, res) => {
  res.render("aboutus-policy", { layout: "./layouts/aboutus.ejs", page_name: "aboutus", underpage_name: "policy" });
});

app.use("/404", async (req, res) => {
  res.render("404", { page_name: "error" });
  res.status(404);
});

app.use("/", express.static("./public"));

export default app;