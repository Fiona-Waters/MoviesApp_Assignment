import React from "react";
import PageTemplate from "../components/templateListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import MyPlaylistAddIcon from "../components/cardIcons/playlistAddIcon";

const UpcomingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "movie",
    getUpcomingMovies
  );

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
      title="Upcoming Movies"
      shows={movies}
      action={(movie) => {
        return <MyPlaylistAddIcon movie={movie} />;
      }}
    />
  );
};
export default UpcomingMoviesPage;
