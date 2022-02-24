(async () => {
    const res = await fetch("http://localhost:5080/api/screeningtime");
    const payload = await res.json(); 
    
    payload.data.forEach(showtime => {
        const movieShowTime = document.createElement("span");
        movieShowTime.innerText = [ showtime.time.replace(/T/, " kl ").replace(/:00.000Z/, " i ") + showtime.room + ", " ]; 
        const movieTitle = document.createElement("a");
        movieTitle.innerText = showtime.movie.title; 
        movieTitle.href = `/movies/${showtime.movie.id}`;
        const li = document.createElement("li");
        li.append(movieShowTime);
        li.append(movieTitle); 
        document.querySelector("#screening-list").append(li); 
    }); 
})();