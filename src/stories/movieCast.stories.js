import React from "react";
import MovieCast from "../components/movieCast";
import { sampleCast } from "./sampleData";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Movie Details Page/Movie Cast Table",
  component: MovieCast,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return <MovieCast cast={sampleCast} />;
};

Basic.storyName = "Default";
