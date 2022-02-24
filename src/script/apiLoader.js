import fetch from "node-fetch";

const API_BASE = 'https://lernia-kino-cms.herokuapp.com/api';

export async function loadMovies() {
  const res = await fetch(API_BASE + '/movies');
  const payload = await res.json();
  return payload.data;
}

export async function loadMovie(id) {
  const res = await fetch(API_BASE + '/movies/' + id);
  const payload = await res.json();
  return payload.data;
}

export async function loadScreenings() {
  const res = await fetch(API_BASE + '/screenings?populate=movie&pagination[pageSize]=100&sort=start_time');
  const payload = await res.json();
  return payload.data;
}

export async function loadScreeningsMovie(movieId) {
  const res = await fetch(API_BASE + "/screenings?populate=movie&filters[movie]=" + movieId + "&sort=start_time");
  const payload = await res.json();
  return payload.data;
}

export async function loadReviews(movieId, reviewPageId) {
  const res = await fetch(API_BASE + "/reviews?pagination[pageSize]=5&pagination[page]=" + reviewPageId + "&sort=createdAt&filters[movie]=" + movieId);
  let payload = await res.json();
  return payload;
}

export async function loadRating(movieId) {
  const res = await fetch(API_BASE + "/movies/" + movieId);
  const payload = await res.json();
  return payload.data;
}

export async function loadAllRatings(movieId) {
  const res = await fetch(API_BASE + "/reviews?pagination[pageSize]=100&filters[movie]=" + movieId);
  const payload = await res.json();
  return payload.data;
}

export default {
  loadMovies: loadMovies,
  loadMovie: loadMovie,
  loadScreenings: loadScreenings,
  loadScreeningsMovie: loadScreeningsMovie,
  loadRating: loadRating,
  loadAllRatings: loadAllRatings,
};