import React from "react";
import ActorDetails from "../components/actorDetails";
import { sampleActor } from "./sampleData";
import { MemoryRouter } from "react-router-dom";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Actor Page/Actor Details",
  component: ActorDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return <ActorDetails actor={sampleActor} />;
};

Basic.storyName = "Default";
