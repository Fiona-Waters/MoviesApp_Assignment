import React from "react";
import TvShowCard from "../components/showCard";
import { sampleTV } from "./sampleData";
import { MemoryRouter } from "react-router-dom";
import MoviesContextProvider from "../contexts/moviesContext";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "Show Page/Show Card",
  component: TvShowCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TvShowCard
      show={sampleTV}
      action={(tvShow) => <AddToFavouritesIcon tvShow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};

Basic.storyName = "Default";
