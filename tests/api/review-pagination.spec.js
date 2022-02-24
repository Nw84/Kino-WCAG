import fetch from "node-fetch";

test("Pagination Test1 Richards API and our API sends the same data for movie 1 page 1", async () => {
    const res1 = await fetch("https://lernia-kino-cms.herokuapp.com/api/reviews?pagination[pageSize]=5&pagination[page]=1&sort=createdAt&filters[movie]=1");
    let payload1 = await res1.json();

    const res2 = await fetch("http://localhost:5080/api/movies/1/reviews/1");
    let payload2 = await res2.json();

    expect(payload1.data[2].attributes.author === payload2.data[2].author).toBeTruthy();
    expect(payload1.data[1].attributes.comment === payload2.data[1].comment).toBeTruthy();
    expect(payload1.data[3].attributes.rating === payload2.data[3].rating).toBeTruthy();
    expect(payload1.data[2].id === payload2.data[2].id).toBeTruthy();
})

test("Pagination Test2 Richards API and our API sends the same data for movie 4 and page 8", async () => {
    const res1 = await fetch("https://lernia-kino-cms.herokuapp.com/api/reviews?pagination[pageSize]=5&pagination[page]=8&sort=createdAt&filters[movie]=4");
    let payload1 = await res1.json();

    const res2 = await fetch("http://localhost:5080/api/movies/4/reviews/8");
    let payload2 = await res2.json();

    expect(payload1.data[4].attributes.author === payload2.data[4].author).toBeTruthy();
    expect(payload1.data[1].attributes.comment === payload2.data[1].comment).toBeTruthy();
    expect(payload1.data[2].attributes.rating === payload2.data[2].rating).toBeTruthy();
    expect(payload1.data[3].id === payload2.data[3].id).toBeTruthy();
})

test("Pagination Test3 Richards API and our API sends the same data for movie 4 and page 12", async () => {
    const res1 = await fetch("https://lernia-kino-cms.herokuapp.com/api/reviews?pagination[pageSize]=5&pagination[page]=12&sort=createdAt&filters[movie]=4");
    let payload1 = await res1.json();

    const res2 = await fetch("http://localhost:5080/api/movies/4/reviews/12");
    let payload2 = await res2.json();

    expect(payload1.data[0].attributes.author === payload2.data[0].author).toBeTruthy();
    expect(payload1.data[4].attributes.comment === payload2.data[4].comment).toBeTruthy();
    expect(payload1.data[0].attributes.rating === payload2.data[0].rating).toBeTruthy();
    expect(payload1.data[4].id === payload2.data[4].id).toBeTruthy();
})


test("Pagination Test4 Richards API and our API sends the same data for movie 8 and page 3", async () => {
    const res1 = await fetch("https://lernia-kino-cms.herokuapp.com/api/reviews?pagination[pageSize]=5&pagination[page]=3&sort=createdAt&filters[movie]=8");
    let payload1 = await res1.json();

    const res2 = await fetch("http://localhost:5080/api/movies/8/reviews/3");
    let payload2 = await res2.json();

    expect(payload1.data[2].attributes.author === payload2.data[2].author).toBeTruthy();
    expect(payload1.data[2].attributes.comment === payload2.data[2].comment).toBeTruthy();
    expect(payload1.data[2].attributes.rating === payload2.data[2].rating).toBeTruthy();
    expect(payload1.data[2].id === payload2.data[2].id).toBeTruthy();
})

test("Pagination Test5 Richards API sends 25 reviews and page 2, so our 7 page should be show part of it", async () => {
    const res1 = await fetch("https://lernia-kino-cms.herokuapp.com/api/reviews?pagination[pageSize]=50&pagination[page]=2&sort=createdAt&filters[movie]=4");
    let payload1 = await res1.json();

    const res2 = await fetch("http://localhost:5080/api/movies/4/reviews/11");
    let payload2 = await res2.json();

    expect(payload1.data[2].attributes.author === payload2.data[2].author).toBeTruthy();
    expect(payload1.data[2].attributes.comment === payload2.data[2].comment).toBeTruthy();
    expect(payload1.data[2].attributes.rating === payload2.data[2].rating).toBeTruthy();
    expect(payload1.data[2].id === payload2.data[2].id).toBeTruthy();
})
