import request from 'supertest';
import app from '../app.js';

test('movie page shows list of movies', async () => {
  const response = await request(app)
    .get('/movies')
    .expect(200);

  expect(response.text.includes('Shawshank')).toBeTruthy();
  expect(response.text.includes('Idiocracy')).toBeTruthy();
});

test('movie page shows movie details', async () => {
  const response = await request(app)
    .get('/movies/1')
    .expect(200);

  expect(response.text.includes('Shawshank')).toBeTruthy();
});