import React from "react";
import PageTemplate from "../components/templateListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getActors} from '../api/tmdb-api';


const ActorPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('actors', getActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results.map((actor) => {
    actor.title = actor.name;
    actor.type = "ACTOR";
    return actor;
  });

  return (
    <PageTemplate
      title="Discover Actors"
      shows={actors}
      action={(actor) => null}
    />
);
};

export default ActorPage;