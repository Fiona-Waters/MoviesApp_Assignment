import React from "react";
import FantasyMovieList from "../components/fantasyMovieList";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { SampleFantasyMovies } from "./sampleData";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

export default {
  title: "My Fantasy Movie/Fantasy Movie List",
  component: FantasyMovieList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
};

export const Basic = () => {
  return <FantasyMovieList fantasyMovie={SampleFantasyMovies} />;
};

Basic.storyName = "Default";
