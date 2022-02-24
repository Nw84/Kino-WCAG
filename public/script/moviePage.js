const url = document.location + '';
const movieId = url.split('/').filter(e => e).slice(-1);
let reviewPageId = 1;
let arrayLength;
let lastPage;

async function loadReview() {
  const res = await fetch("http://localhost:5080/api/movies/" + movieId + "/reviews/" + reviewPageId);
  let payload = await res.json();
  let reviews = payload.data;
  lastPage = payload.metaLastPage;
  arrayLength = payload.metaLength;

  const reviewTotal = document.querySelector(".reviewTotal");
  if (arrayLength >= 1) {
    reviewTotal.innerHTML = "Review page " + reviewPageId + "/ " + lastPage;
  } else {
    reviewTotal.innerHTML = "There are currently no reviews for the selected movie, so you could be the first one to review it ;)"
  }

  let lastTimeClickedNext = 0;

  const nextReviewButton = document.querySelector(".nextReviewButton");
  if (reviewPageId === lastPage) {
    nextReviewButton.disabled = true;
    nextReviewButton.classList.add("disabledButton")
  } else {
    nextReviewButton.disabled = false;
    nextReviewButton.classList.remove("disabledButton")
  };
  nextReviewButton.onclick = function nextReviewPage() {
    if (Date.now() - lastTimeClickedNext < 10000) return;
    lastTimeClickedNext = Date.now();
    if (reviewPageId < lastPage) {
      reviewPageId++;
    } else {
      reviewPageId;
    }
    loadReview();
  }

  const previousReviewButton = document.querySelector(".previousReviewButton");
  if (reviewPageId === 1) {
    previousReviewButton.disabled = true;
    previousReviewButton.classList.add("disabledButton");
  } else {
    previousReviewButton.disabled = false;
    previousReviewButton.classList.remove("disabledButton")
  }
  previousReviewButton.onclick = function previousReviewPage() {
    if (reviewPageId > 1) {
      reviewPageId--;
    }
    else {
      reviewPageId;
    }
    loadReview();
  }

  document.querySelector(".movie-review").innerHTML = "";

  if (arrayLength >= 1) {
    reviews.forEach(review => {
      const li = document.createElement("li");
      const author = document.createElement("span");
      author.innerText = review.author + " ";
      const rating = document.createElement("a");
      rating.innerText = "Rating: " + review.rating + " ";
      const comment = document.createElement("a");
      comment.innerText = "Comment: " + review.comment;

      if (author) {
        li.append(author)
      };
      if (rating) {
        li.append(rating)
      };
      if (comment) {
        li.append(comment)
      };
      document.querySelector(".movie-review").append(li);
    });
  }
};
loadReview();

// fetch to local API for screening times for individual movies
(async () => {
  const res = await fetch("http://localhost:5080/api/movies/" + movieId + "/screeningtime");
  const data = await res.json();

  data.data.forEach(showtime => {
    const li = document.createElement("li");
    const movieShowTime = document.createElement("span");
    movieShowTime.innerText = [showtime.time.replace(/T/, " kl ").replace(/:00.000Z/, " i ") + showtime.room + showtime.title];

    li.append(movieShowTime);

    document.querySelector(".screenings-for-each-movie").append(li);
  });
})();

(async () => {
  const res2 = await fetch("http://localhost:5080/api/movies/" + movieId + "/ratings");
  const rate = await res2.json();
  document.querySelector(".movie-rating").innerHTML = rate.metaMsg + " " + JSON.stringify(rate.rating);
})();


document.querySelector("#addBtn").onclick = async (ev) => {
  ev.preventDefault();
  const rating = document.querySelector("#rate").value;
  const comment = document.querySelector("#addComment").value;
  const author = document.querySelector("#addName").value;

  await fetch(`/api/movies/${movieId}/reviews`, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movieId: movieId,
      comment: comment,
      rating: rating,
      name: author,
    }),
  });

  document.querySelector("#rate").selectedIndex = 0;
  document.querySelector("#addComment").value = "";
  document.querySelector("#addName").value = "";

  reviewPageId = lastPage;

  loadReview();
};