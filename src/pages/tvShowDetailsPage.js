import React from "react";
import { useParams } from "react-router-dom";
import TvShowDetails from "../components/tvShowDetails";
import PageTemplate from "../components/templateTvPage";
import { getTVShow, getTVShowCredits } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import TvCast from "../components/tvCast";

const TVShowDetailsPage = () => {
  const { id } = useParams();
  const {
    data: tvShow,
    error,
    isLoading,
    isError,
  } = useQuery(["show", { id: id }], getTVShow);
  const { data: showCast } = useQuery(
    ["show cast", { id: id }],
    getTVShowCredits
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
            <TvShowDetails tvShow={tvShow} />
            <TvCast cast={showCast} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for tv show details</p>
      )}
    </>
  );
};

export default TVShowDetailsPage;
