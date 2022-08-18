import React from "react";
import FantasyMovieForm from "../components/fantasyMovieForm";
import Header from "../components/headerMovieList";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) =>  ({
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

const FantasyMoviePage = (props) => {
  const classes = useStyles();
 
 

  return (
    <>
        <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Header title={"My Fantasy Movie"} />
          <FantasyMovieForm/>
        </Grid>
      </Grid>
    </>
  );
};

export default FantasyMoviePage;

