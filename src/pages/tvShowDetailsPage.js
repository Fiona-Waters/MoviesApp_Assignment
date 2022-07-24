import React from "react";
import { useParams } from "react-router-dom";
import ShowDetails from "../components/showDetails";
import PageTemplate from "../components/templateTvPage";
// import useMovie from "../hooks/useMovie";
import { getTVseries } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';


const TVShowDetailsPage = () => {
  const { id } = useParams();
  const { data: tvShow, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getTVseries
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tvShow ? (
        <>
          <PageTemplate tvShow={tvShow}>
            <ShowDetails show={tvShow} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for tv show details</p>
      )}
    </>
  );
};

export default TVShowDetailsPage;