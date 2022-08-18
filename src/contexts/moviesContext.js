import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [movieFavourites, setMovieFavourites] = useState([]);
  const [tvFavourites, setTvFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState([]);
  const [mustWatch, setMustWatch ] = useState([]);
  const [fantasyMovie, setFantasyMovie] = useState([]);
  console.log('Must Watch Array', mustWatch);
  console.log("fantasy movie", fantasyMovie)

  const addToFavourites = (show) => {
    if (show.type === "MOVIE") {
      let newFavourites = [...movieFavourites, show.id];
      setMovieFavourites(newFavourites);
    } else {
      let newFavourites = [...tvFavourites, show.id];
      setTvFavourites(newFavourites);
    }
  };

  const removeFromFavourites = (show) => {
    if (show.type === "MOVIE") {
      setMovieFavourites(movieFavourites.filter((mId) => mId !== show.id));
    } else {
    setTvFavourites(tvFavourites.filter((mId) => mId !== show.id));
    }
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review} )
  };

  const addFantasyMovie = (fantasyMovie) => {
    setFantasyMovie(fantasyMovie)
  }

  const addToMustWatchList = (movie) => {
      if (!mustWatch.includes(movie.id)) {
        let newMustWatch = [...mustWatch, movie.id];
        setMustWatch(newMustWatch)
      }
  };

  const removeFromMustWatch = (movie) => {
    setMustWatch(mustWatch.filter((mId) => mId !== movie.id));
  }

  return (
    <MoviesContext.Provider
      value={{
        mustWatch,
        movieFavourites,
        tvFavourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToMustWatchList,
        removeFromMustWatch,
        addFantasyMovie,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;