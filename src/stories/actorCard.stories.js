import React from "react";
import ActorCard from "../components/actorCard";
import { sampleActor } from "./sampleData";
import { MemoryRouter } from "react-router-dom";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Actor Page/Actor Card",
  component: ActorCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return <ActorCard actor={sampleActor} action={(sampleActor) => null} />;
};

Basic.storyName = "Default";
