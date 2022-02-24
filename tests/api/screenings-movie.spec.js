import { getScreeningsMovie } from "../../src/script/loadScreening.js";
import api from "../../src/script/apiLoader.js";

const now = new Date;
const showRoom = "Stora salongen";
let movieId = 1;

test("Recieved data contains date&time which exceeds current date", async () => {
    const payload = await getScreeningsMovie(api, movieId);

    payload.data.forEach(screening => {
        const screeningTime = new Date(screening.time);
        expect(screeningTime > now).toBeTruthy();
    });
});

test("Recieved data contains data and contains correct showroom", async () => {
    const payload = await getScreeningsMovie(api, movieId);

    expect(payload.data.length).toBeGreaterThan(0);   
    expect(payload.data[0].time).toBeTruthy();
    expect(payload.data[0].room).toBe(showRoom);
});

test("Recieved data contains correct title", async () => {
    
    const movieTitel = [
        "The Shawshank Redemption", 
        "The Godfather", 
        "The Godfather: Part II", 
        "The Dark Knight", 
        "12 Angry Men"
    ];

    for (;movieId < movieTitel.length;) {
        const payload = await getScreeningsMovie(api, movieId)
        expect(payload.data[0].title).toBe(movieTitel[movieId - 1])
        movieId ++
    };
});