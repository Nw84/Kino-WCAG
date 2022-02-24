import { loadAllRatings } from "../../src/script/apiLoader.js";
import getRatings from "../../src/script/getRatings.js";

const api = { async loadAllRatings() {
  return [
      {
          "id": 267,
          "attributes": {
              "comment": "Test",
              "rating": 5,
              "author": "Random Hero/Tester",
              "verified": null,
              "createdAt": "2022-02-02T22:05:28.102Z",
              "updatedAt": "2022-02-02T22:05:28.102Z"
          }
      },
      {
          "id": 127,
          "attributes": {
              "comment": "Good yes.",
              "rating": 4,
              "author": "Olga",
              "verified": true,
              "createdAt": "2022-02-01T13:53:24.181Z",
              "updatedAt": "2022-02-01T13:53:24.181Z"
          }
      },
      {
          "id": 57,
          "attributes": {
              "comment": "This is also great!",
              "rating": 0,
              "author": "Richard",
              "verified": null,
              "createdAt": "2022-01-27T13:25:43.197Z",
              "updatedAt": "2022-01-27T13:25:43.197Z"
          }
      },
      {
          "id": 91,
          "attributes": {
              "comment": "Super",
              "rating": 5,
              "author": "Karl",
              "verified": null,
              "createdAt": "2022-02-01T09:31:33.304Z",
              "updatedAt": "2022-02-01T09:31:33.304Z"
          }
      },
      {
          "id": 143,
          "attributes": {
              "comment": "love it ",
              "rating": 2,
              "author": "reviewer",
              "verified": null,
              "createdAt": "2022-02-01T16:57:26.610Z",
              "updatedAt": "2022-02-01T16:57:26.610Z"
          }
      },
      {
          "id": 106,
          "attributes": {
              "comment": "i love this movie",
              "rating": 4,
              "author": "godmother",
              "verified": null,
              "createdAt": "2022-02-01T10:57:57.560Z",
              "updatedAt": "2022-02-01T10:57:57.560Z"
          }
      },
      {
          "id": 107,
          "attributes": {
              "comment": "i love this movie",
              "rating": 4,
              "author": "godmother",
              "verified": null,
              "createdAt": "2022-02-01T11:06:49.877Z",
              "updatedAt": "2022-02-01T11:06:49.877Z"
          }
      },
      {
          "id": 246,
          "attributes": {
              "comment": "Michael",
              "rating": 5,
              "author": "Fredo, you’re my older brother, and I love you. But don’t ever take sides with anyone against the Family again. Ever.",
              "verified": null,
              "createdAt": "2022-02-02T18:24:15.811Z",
              "updatedAt": "2022-02-02T18:24:15.811Z"
          }
      },
      {
          "id": 263,
          "attributes": {
              "comment": "Very Nice",
              "rating": 5,
              "author": "Doe!",
              "verified": null,
              "createdAt": "2022-02-02T21:02:54.782Z",
              "updatedAt": "2022-02-02T21:02:54.782Z"
          }
      },
      {
          "id": 74,
          "attributes": {
              "comment": "Awesome movie!",
              "rating": 5,
              "author": "John Doe",
              "verified": null,
              "createdAt": "2022-01-31T11:21:32.948Z",
              "updatedAt": "2022-01-31T11:21:32.948Z"
          }
      },
      {
          "id": 189,
          "attributes": {
              "comment": "good",
              "rating": 4,
              "author": "hej",
              "verified": null,
              "createdAt": "2022-02-02T12:39:44.280Z",
              "updatedAt": "2022-02-02T12:39:44.280Z"
          }
      },
      {
          "id": 159,
          "attributes": {
              "comment": "cdfsdfsfe",
              "rating": 2,
              "author": "reviewer",
              "verified": null,
              "createdAt": "2022-02-01T20:25:04.315Z",
              "updatedAt": "2022-02-01T20:25:04.315Z"
          }
      },
      {
          "id": 140,
          "attributes": {
              "comment": "i love this movie",
              "rating": 4,
              "author": "godmother",
              "verified": null,
              "createdAt": "2022-02-01T14:58:50.643Z",
              "updatedAt": "2022-02-01T14:58:50.643Z"
          }
      },
      {
          "id": 105,
          "attributes": {
              "comment": "i love this movie",
              "rating": 4,
              "author": "godmother",
              "verified": null,
              "createdAt": "2022-02-01T10:56:54.265Z",
              "updatedAt": "2022-02-01T10:56:54.265Z"
          }
      },
      {
          "id": 163,
          "attributes": {
              "comment": "i love this movie",
              "rating": 4,
              "author": "godmother",
              "verified": null,
              "createdAt": "2022-02-01T21:00:28.309Z",
              "updatedAt": "2022-02-01T21:00:28.309Z"
          }
      },
      {
          "id": 185,
          "attributes": {
              "comment": "I'm so happy",
              "rating": 4,
              "author": "godgrandmother",
              "verified": true,
              "createdAt": "2022-02-02T10:24:28.394Z",
              "updatedAt": "2022-02-02T10:24:28.394Z"
          }
      },
      {
          "id": 160,
          "attributes": {
              "comment": "I love this movie!",
              "rating": 5,
              "author": "godmother",
              "verified": null,
              "createdAt": "2022-02-01T20:56:39.064Z",
              "updatedAt": "2022-02-01T20:56:39.064Z"
          }
      },
      {
          "id": 179,
          "attributes": {
              "comment": "good job my son",
              "rating": 4,
              "author": "godgrandfather",
              "verified": true,
              "createdAt": "2022-02-02T09:28:48.443Z",
              "updatedAt": "2022-02-02T09:28:48.443Z"
          }
      },
      {
          "id": 90,
          "attributes": {
              "comment": "OK",
              "rating": 4,
              "author": "Lia",
              "verified": null,
              "createdAt": "2022-02-01T09:30:27.664Z",
              "updatedAt": "2022-02-01T09:30:27.664Z"
          }
      },
      {
          "id": 88,
          "attributes": {
              "comment": "K",
              "rating": 3,
              "author": "L",
              "verified": null,
              "createdAt": "2022-02-01T09:27:53.378Z",
              "updatedAt": "2022-02-01T09:27:53.378Z"
          }
      },
      {
          "id": 174,
          "attributes": {
              "comment": "Too much action. Too little flowers and kisses\n",
              "rating": 3,
              "author": "Johan Herokusson",
              "verified": null,
              "createdAt": "2022-02-02T09:22:07.683Z",
              "updatedAt": "2022-02-02T09:22:07.683Z"
          }
      },
      {
          "id": 175,
          "attributes": {
              "comment": "Too much action. Too little flowers and kisses",
              "rating": 3,
              "author": "Johan Herokusson",
              "verified": null,
              "createdAt": "2022-02-02T09:23:01.347Z",
              "updatedAt": "2022-02-02T09:23:01.347Z"
          }
      },
      {
          "id": 157,
          "attributes": {
              "comment": "xx",
              "rating": 1,
              "author": "reviewer",
              "verified": null,
              "createdAt": "2022-02-01T20:20:07.876Z",
              "updatedAt": "2022-02-01T20:20:07.876Z"
          }
      },
      {
          "id": 145,
          "attributes": {
              "comment": "Im jealous of the godfather.",
              "rating": 3,
              "author": "Batman",
              "verified": true,
              "createdAt": "2022-02-01T16:58:49.667Z",
              "updatedAt": "2022-02-01T16:58:49.667Z"
          }
      },
      {
          "id": 266,
          "attributes": {
              "comment": "Lets go!",
              "rating": 5,
              "author": "Don C",
              "verified": null,
              "createdAt": "2022-02-02T22:04:05.801Z",
              "updatedAt": "2022-02-02T22:04:05.801Z"
          }
      },
      {
          "id": 147,
          "attributes": {
              "comment": "s",
              "rating": 1,
              "author": "reviewer",
              "verified": null,
              "createdAt": "2022-02-01T17:08:28.642Z",
              "updatedAt": "2022-02-01T17:08:28.642Z"
          }
      },
      {
          "id": 221,
          "attributes": {
              "comment": "Don Corleone <3",
              "rating": 5,
              "author": "Göte",
              "verified": null,
              "createdAt": "2022-02-02T14:32:06.770Z",
              "updatedAt": "2022-02-02T14:32:06.770Z"
          }
      },
      {
          "id": 139,
          "attributes": {
              "comment": "Greatest Moviest. You heard me. (Testing from Heroku)",
              "rating": 5,
              "author": "Johan Herokusson",
              "verified": null,
              "createdAt": "2022-02-01T14:44:02.543Z",
              "updatedAt": "2022-02-01T14:44:02.543Z"
          }
      },
      {
          "id": 161,
          "attributes": {
              "comment": "I love this movie!",
              "rating": 5,
              "author": "godmother",
              "verified": null,
              "createdAt": "2022-02-01T20:57:06.400Z",
              "updatedAt": "2022-02-01T20:57:06.400Z"
          }
      },
      {
          "id": 286,
          "attributes": {
              "comment": "No way",
              "rating": 1,
              "author": "father",
              "verified": true,
              "createdAt": "2022-02-03T18:22:18.102Z",
              "updatedAt": "2022-02-03T18:22:18.102Z"
          }
      },
      {
          "id": 158,
          "attributes": {
              "comment": "x",
              "rating": 2,
              "author": "reviewer",
              "verified": null,
              "createdAt": "2022-02-01T20:21:25.505Z",
              "updatedAt": "2022-02-01T20:21:25.505Z"
          }
      },
      {
          "id": 260,
          "attributes": {
              "comment": "damn!",
              "rating": 5,
              "author": "goddamn",
              "verified": true,
              "createdAt": "2022-02-02T20:42:18.576Z",
              "updatedAt": "2022-02-02T20:42:18.576Z"
          }
      },
      {
          "id": 113,
          "attributes": {
              "comment": "i love this movie",
              "rating": 4,
              "author": "godmother",
              "verified": null,
              "createdAt": "2022-02-01T12:36:31.428Z",
              "updatedAt": "2022-02-01T12:36:31.428Z"
          }
      },
      {
          "id": 110,
          "attributes": {
              "comment": "yes",
              "rating": 4,
              "author": "godmother",
              "verified": null,
              "createdAt": "2022-02-01T12:24:10.032Z",
              "updatedAt": "2022-02-01T12:24:10.032Z"
          }
      },
      {
          "id": 142,
          "attributes": {
              "comment": "love it ",
              "rating": 2,
              "author": "reviewer",
              "verified": null,
              "createdAt": "2022-02-01T16:56:38.255Z",
              "updatedAt": "2022-02-01T16:56:38.255Z"
          }
      },
      {
          "id": 186,
          "attributes": {
              "comment": "I hate this guy",
              "rating": 0,
              "author": "godneighbor",
              "verified": true,
              "createdAt": "2022-02-02T10:26:08.741Z",
              "updatedAt": "2022-02-02T10:26:08.741Z"
          }
      },
      {
          "id": 162,
          "attributes": {
              "comment": "i love this movie",
              "rating": 5,
              "author": "godmother",
              "verified": null,
              "createdAt": "2022-02-01T20:59:43.068Z",
              "updatedAt": "2022-02-01T20:59:43.068Z"
          }
      }
  ] } }

  let movieId = 2; 

test("Recieved data correct format", async () => {
    const payload = await getRatings(movieId, api);
  
    expect(payload).toBeTruthy();
    expect(payload.data).toBeGreaterThanOrEqual(0);
    expect(payload.metaMsg).toContain("User rating: ");

});

test("If more than 5 review data does not contain IMDB raiting", async () => {
    const payload = await getRatings(movieId, api);
    
    expect(payload.metaMsg).not.toContain("Imdb rating: ");
});