import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useNavigate } from "react-router-dom";
import Header from "../headerMovieList";
import { getGenres, getActors } from "../../api/tmdb-api";
import DatePicker from "react-multi-date-picker";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
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
  const {  data: actors,  }  = useQuery('actors', getActors)
  console.log(props);
  console.log("data", data);
  const genres = data?.genres;
  const actorList = actors?.results;
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(MoviesContext);
  const [genre, setGenre] = useState("All");
  const [actor, setActor] = useState("");
  const [value, setValue] = useState(new Date());
  // get list of genres, like in filter
  const navigate = useNavigate();

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleActorChange = (event) => {
    setActor(event.target.value);
  }

  const handleSnackClose = (e) => {
    StereoPannerNode(false);
    navigate("/my-fantasy-movie");
  };

  const onSubmit = (fantasyMovie) => {
    console.log(fantasyMovie);
    // what else to include here?
    // context.addFantasyMovie create this func and call it here
    //  setOpen(true);
  };

  return (
    <>
      <Header title={"Create Your Own Fantasy Movie"} />
      <Box component="div" className={classes.root}>
        <Typography component="h2" variant="h3">
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
            id="" // what to use as id?
            label="Movie Title"
            name="title"
            autoFocus
            inputRef={register({ required: "Movie Title Required" })}
          />
          &nbsp; &nbsp; &nbsp;
          <TextField
            id="select-rating"
            select
            variant="outlined"
            label="Genre Select"
            value={genre}
            onChange={handleGenreChange}
            helperText="Don't forget your genre"
          >
            {genres?.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </TextField>
          <br></br>
          Please Choose Your Release Date
          <br></br>
          <DatePicker title="Release Date" value={value} onChange={setValue} />
          <br></br>
          <TextField
            className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            label="Budget"
            name="budget"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="content"
            label="Movie plot"
            id="content"
            multiline
            minRows={10}
            inputRef={register({
              required: "No plot info provided",
              minLength: { value: 10, message: "Plot is too short" },
            })}
          />
        </form>
        <TextField
            id="select-rating"
            select
            variant="outlined"
            label="Actor Select"
            value={actor}
            onChange={handleActorChange}
            helperText="Don't forget your actors"
          >
            {actorList?.map((actor) => {
              return (
                <MenuItem key={actor.name} value={actor.name}>
                  {actor.name}
                </MenuItem>
              );
            })}
          </TextField>
      </Box>
    </>
  );
};
export default FantasyMovieForm;
