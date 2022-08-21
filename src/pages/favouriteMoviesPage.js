import React, { useContext } from "react";
import PageTemplate from "../components/templateListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie, getTVShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";

const FavouriteMoviesPage = () => {
  const { movieFavourites, tvFavourites } = useContext(MoviesContext);

  console.log("moviefavourites", movieFavourites);
  console.log("tvfavourites", tvFavourites);
  // Create an array of queries and run in parallel.
  const favouriteMovieQueries = useQueries(
    movieFavourites.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );

  const favouriteTvQueries = useQueries(
    tvFavourites.map((tvId) => {
      return {
        queryKey: ["tv", { id: tvId }],
        queryFn: getTVShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const isLoading2 = favouriteTvQueries.find((t) => t.isLoading === true);

  if (isLoading2) {
    return <Spinner />;
  }

  const movies = favouriteMovieQueries.map((q) => {
    q.data.type = "MOVIE";
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  const tvShows = favouriteTvQueries.map((t) => {
    t.data.type = "TV_SHOW";
    t.data.title = t.data.name;
    t.data.release_date = t.data.first_air_date;
    // t.data.genre_ids = t.data.genres.map((g) => g.id);
    return t.data;
  });

  const allFavourites = movies.concat(tvShows);
  console.log("all favourites", allFavourites);

  return (
    <PageTemplate
      title="Favourite Movies & TV Shows"
      shows={allFavourites}
      action={(show) => {
        return (
          <>
            <RemoveFromFavourites show={show} />
            <WriteReview movie={show} />
          </>
        );
      }}
    />
  );
};

export default FavouriteMoviesPage;
