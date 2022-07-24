import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [movieFavourites, setMovieFavourites] = useState([]);
  const [tvFavourites, setTvFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState([]);
  const [mustWatch, setMustWatch ] = useState([]);
  console.log('Must Watch Array', mustWatch);

  const addToFavourites = (show) => {
    if (!favourites.includes(show.id)) {
      let newFavourites = [...favourites, show.id];
      setFavourites(newFavourites);
    }
    if (show.type === "MOVIE") {
      let newFavourites = [...movieFavourites, show.id];
      setMovieFavourites(newFavourites);
    } else {
      let newFavourites = [...tvFavourites, show.id];
      setTvFavourites(newFavourites);
    }
  };


  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review} )
  };

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
        favourites,
        mustWatch,
        movieFavourites,
        tvFavourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToMustWatchList,
        removeFromMustWatch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;