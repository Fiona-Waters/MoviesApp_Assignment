import React from "react";
import PageTemplate from "../components/templateListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getTVseries} from '../api/tmdb-api';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';


const TvSeriesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discoverTv', getTVseries)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  } 
  
  const tvShows = data.results.map((tvShow) => {
    tvShow.title = tvShow.name;
    tvShow.type = "TV_SHOW"
    return tvShow;
  });
  

  return (
    <PageTemplate
      title="Discover TV Shows"
      shows={tvShows}
      action={(tvShow) => {
        return <AddToFavouritesIcon show={tvShow} />
      }}
    />
);
};

export default TvSeriesPage;