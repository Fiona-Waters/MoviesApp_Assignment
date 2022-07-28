import React from "react";
import PageTemplate from "../components/templateListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getActorMovies} from '../api/tmdb-api';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { useParams } from "react-router-dom";


const ActorMovies = () => {
  const { id } = useParams()
  const {  data: movie, error, isLoading, isError }  = useQuery(["Actor Movies",{id: id}],
   getActorMovies)
  console.log("actormovies blah", movie)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = movie.cast.map((movie) => {
    movie.type = "MOVIE";
    return movie;
  });

  return (
    <PageTemplate
      title="Actor Movies"
      shows={movies}
      action={(movie) => {
        return <AddToFavouritesIcon show={movie} />
      }}

    />
);
};

export default ActorMovies;