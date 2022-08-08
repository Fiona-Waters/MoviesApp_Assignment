import React from "react";
import { useParams } from "react-router-dom";
import ShowDetails from "../components/showDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieCredits } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import MovieCast from "../components/movieCast";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );
  const { data: cast } = useQuery(
    ["movie cast", { id: id }],
    getMovieCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <ShowDetails show={movie} />
            <MovieCast cast={cast}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;