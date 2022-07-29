import React from "react";
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";
import { getActorBio } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const ActorBioPage = () => {
  const { id } = useParams();
  const {
    data: actor,
    error,
    isLoading,
    isError,
  } = useQuery(["actor", { id: id }], getActorBio);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} />
            <Link to={`/actor/${actor.id}/movies`}>
              <Button variant="contained" size="large" color="success">
                {actor.name}'s Movies ...
              </Button>
            </Link>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default ActorBioPage;
