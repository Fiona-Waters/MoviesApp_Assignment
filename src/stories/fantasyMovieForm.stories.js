import React from "react";
import FantasyMovieForm from "../components/fantasyMovieForm";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

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
  title: "My Fantasy Movie/Fantasy Movie Form",
  component: FantasyMovieForm,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
};

export const Basic = () => {
  return <FantasyMovieForm />;
};

Basic.storyName = "Default";
