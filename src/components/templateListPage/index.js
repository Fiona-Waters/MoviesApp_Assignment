import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import ShowList from "../showList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#bfbfbf",
    paddingTop: theme.spacing(7),
  },
  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ListPageTemplate({ shows, title, action }) {
  const classes = useStyles();
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [certificationFilter, setCertificationFilter] = useState("G");
  const [languageFilter, setLanguageFilter] = useState("all");
  const [voteAverageFilter, setVoteAverageFilter] = useState(-1);
  const [checkedTitle, setCheckedTitle] = useState(false);
  const [checkedReleaseDate, setCheckedReleaseDate] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const genreId = Number(genreFilter);

  let displayedShows = shows
    .filter((s) => {
      return s.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((s) => {
      return genreId > 0 ? s.genre_ids.includes(genreId) : true;
    })
    .filter((s) => {
      //fix this
      return certificationFilter !== "G"
        ? s.certification
            .toLowerCase()
            .search(certificationFilter.toLowerCase()) !== -1
        : true;
    })
    .filter((s) => {
      return languageFilter !== "all"
        ? s.original_language
            .toLowerCase()
            .search(languageFilter.toLowerCase()) !== -1
        : true;
    })
    .filter((s) => {
      return s.vote_average >= voteAverageFilter;
    });

  // add sorting
  if (checkedTitle === true) {
    displayedShows.sort((a, b) => (a.title > b.title ? 1 : -1));
  } else if (checkedReleaseDate === true) {
    displayedShows.sort(
      (a, b) =>
        new Date(...a.release_date.split("/").reverse()) -
        new Date(...b.release_date.split("/").reverse())
    );
  }

  const handleChange = (type, value) => {
    if (type === "name") setTitleFilter(value);
    else if (type === "certification") setCertificationFilter(value);
    else if (type === "language") setLanguageFilter(value);
    else if (type === "vote average") setVoteAverageFilter(value);
    else if (type === "sortTitle") setCheckedTitle(value);
    else if (type === "sortReleaseDate") setCheckedReleaseDate(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <ShowList action={action} shows={displayedShows} />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          certificationFilter={certificationFilter}
          languageFilter={languageFilter}
          voteAverageFilter={voteAverageFilter}
          checkedTitle={checkedTitle}
          checkedReleaseDate={checkedReleaseDate}
        />
      </Drawer>
    </>
  );
}
export default ListPageTemplate;
