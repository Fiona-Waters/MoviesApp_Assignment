import React from "react";
import PageTemplate from "../components/templateListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getMovies } from "../api/tmdb-api";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const HomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getMovies);
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results.map((movie) => {
    movie.type = "MOVIE";
    return movie;
  });

  return (
    <PageTemplate
      title="Discover Movies"
      shows={movies}
      action={(movie) => {
        return <AddToFavouritesIcon show={movie} />;
      }}
    />
  );
};

export default HomePage;
