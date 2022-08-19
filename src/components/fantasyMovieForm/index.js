import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Controller, useForm } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import { useNavigate } from "react-router-dom";
import { getGenres, getActors } from "../../api/tmdb-api";
import DatePicker, { DateObject } from "react-multi-date-picker";
import Multiselect from "multiselect-react-dropdown";
import FantasyMovieList from "../fantasyMovieList";
import { addFantasyMovieToFirebase } from "../../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    background: "white",
    "& > * ": {
      marginTop: theme.spacing(2),
    },
  },
  textField: {
    width: "40ch",
  },
  submit: {
    marginRight: theme.spacing(2),
  },
  snack: {
    width: "50%",
    "& > * ": {
      width: "100%",
    },
  },
}));

const FantasyMovieForm = (props) => {
  const { data } = useQuery("genres", getGenres);
  const { data: actors } = useQuery("actors", getActors);
  const genres = data?.genres;
  const actorList = actors?.results;
  const classes = useStyles();
  const { register, handleSubmit, reset, control } = useForm();
  const context = useContext(MoviesContext);

  const onSubmit = (fantasyMovie) => {
    console.log(fantasyMovie);
    context.addFantasyMovie(fantasyMovie);
    addFantasyMovieToFirebase(fantasyMovie);
  };

  return (
    <>
      <FantasyMovieList fantasyMovie={context.fantasyMovie} />
      <Box component="div" className={classes.root}>
        <Typography component="h4" variant="h5">
          Create Your Own Fantasy Movie
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <TextField
            className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            label="Movie Title"
            name="title"
            autoFocus
            inputRef={register({ required: "Movie Title Required" })}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            label="Budget"
            name="budget"
            autoFocus
            inputRef={register({ required: "Budget Required" })}
          />
          <br></br>
          <p>
            Release Date &nbsp;
            <Controller
              control={control}
              name="releaseDate"
              defaultValue={new DateObject()}
              render={({ value, onChange }) => {
                return (
                  <DatePicker
                    autoFocus
                    title="Release Date"
                    name="releaseDate"
                    value={value}
                    onChange={onChange}
                  />
                );
              }}
            />
          </p>
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="plot"
            label="Movie plot"
            multiline
            fullWidth
            minRows={10}
            inputRef={register({
              required: "No plot info provided",
              minLength: { value: 10, message: "Plot is too short" },
            })}
          />
          &nbsp; &nbsp; &nbsp;
          <Controller
            control={control}
            name="genre"
            defaultValue={""}
            render={({ value, onChange }) => {
              return (
                <Multiselect
                  options={genres}
                  onSelect={onChange}
                  selectedValues={value}
                  name="genres"
                  showCheckbox="true"
                  placeholder="Choose Genres"
                  isObject="true"
                  displayValue="name"
                />
              );
            }}
          />
          <Controller
            control={control}
            name="actor"
            defaultValue={""}
            render={({ value, onChange }) => {
              return (
                <Multiselect
                  options={actorList}
                  onSelect={onChange}
                  selectedValues={value}
                  name="actors"
                  showCheckbox="true"
                  placeholder="Choose Actors"
                  isObject="true"
                  displayValue="name"
                />
              );
            }}
          />
          <Box className={classes.buttons}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
            <Button
              type="reset"
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={() => {
                reset({
                  author: "",
                  content: "",
                });
              }}
            >
              Reset
            </Button>
          </Box>{" "}
        </form>
      </Box>
    </>
  );
};
export default FantasyMovieForm;
