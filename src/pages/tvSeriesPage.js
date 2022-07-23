import React from "react";
import PageTemplate from "../components/templateTvListPage";
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
  const tvShows = data.results;

  return (
    <PageTemplate
      title="Discover TV Shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return <AddToFavouritesIcon tvShow={tvShow} />
      }}
    />
);
};

export default TvSeriesPage;