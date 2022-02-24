export async function getScreenings(api) {
  const now = new Date().toLocaleString();

  const screen = (await api.loadScreenings())
    .filter(obj => {
    let screeningTime = new Date(obj.attributes.start_time).toLocaleString(); 
    let fiveDaysLater = new Date(new Date().getTime() + 5*24*60*60*1000).toLocaleString(); 
    return screeningTime > now & screeningTime < fiveDaysLater;
    })
    .slice(0, 10);
 
  return {
    data: screen.map(obj => {
      return {
        time: obj.attributes.start_time,
        room: obj.attributes.room,
        movie: {
          id: obj.attributes.movie.data.id,
          title: obj.attributes.movie.data.attributes.title,
        }
      };
    }),
  };
}

// filter list with all screeningtimes to only show upcoming screeningtimes for the chosen movie
export async function getScreeningsMovie(api, movieId) {
  const now = new Date();
  const screen = (await api.loadScreeningsMovie(movieId))
    .filter(obj => {
      const screeningTime = new Date(obj.attributes.start_time);
      return screeningTime > now;
    })
  
  return {
    data: screen.map(obj => {
      return {
        time: obj.attributes.start_time,
        room: obj.attributes.room,
        title: obj.attributes.movie.data.attributes.title
      };
    }),
  };
}