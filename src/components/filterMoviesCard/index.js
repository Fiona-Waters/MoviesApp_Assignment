import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import {
  getGenres,
  getLanguages,
  getMovieCertifications,
} from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterMoviesCard(props) {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);
  const { data: info } = useQuery("certification", getMovieCertifications);
  const { data: languages } = useQuery("language", getLanguages);
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }
  const certifications = info?.certifications?.US;

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleCertificationChange = (e, props) => {
    handleChange(e, "certification", e.target.value);
  };

  const handleLanguageChange = (e, props) => {
    handleChange(e, "language", e.target.value);
  };

  const handleVoteAverageChange = (e) => {
    handleChange(e, "vote average", e.target.value);
  };

  const handleSortTitleChange = (e) => {
   handleChange(e, "sortTitle", e.target.checked)
  };

  const handleSortReleaseDateChange = (e) => {
    handleChange(e, "sortReleaseDate", e.target.checked)
   };

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Filter
          </Typography>
          <TextField
            className={classes.formControl}
            id="filled-search"
            label="Search field"
            type="search"
            value={props.titleFilter}
            variant="filled"
            onChange={handleTextChange}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="genre-label">Genre</InputLabel>
            <Select
              labelId="genre-label"
              id="genre-select"
              value={props.genreFilter}
              onChange={handleGenreChange}
            >
              {genres.map((genre) => {
                return (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="certification-label">Certification</InputLabel>
            <Select
              labelId="certification-label"
              id="certification-select"
              value={props.certificationFilter}
              onChange={handleCertificationChange}
            >
              {certifications?.map((c) => {
                return (
                  <MenuItem key={c.certification} value={c.certification}>
                    {c.certification}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="certification-label">Language</InputLabel>
            <Select
              labelId="language-label"
              id="language-select"
              value={props.languageFilter}
              onChange={handleLanguageChange}
            >
              <MenuItem key={""} value={"all"}>
                All
              </MenuItem>
              {languages?.map((l) => {
                return (
                  <MenuItem key={l.iso_639_1} value={l.iso_639_1}>
                    {l.english_name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="vote-average-label">Vote Average</InputLabel>
            <Select
              labelId="vote-average-label"
              id="vote average"
              value={props.voteAverageFilter}
              onChange={handleVoteAverageChange}
            >
              <option value="-1">All</option>
              <option value="1"> 1+</option>
              <option value="2"> 2+</option>
              <option value="3"> 3+</option>
              <option value="4"> 4+</option>
              <option value="5"> 5+</option>
              <option value="6"> 6+</option>
              <option value="7"> 7+</option>
              <option value="8"> 8+</option>
              <option value="9"> 9+</option>
            </Select>
          </FormControl>
        </CardContent>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Sort
            <h6>Please check one box only</h6>
            <FormGroup>
              <FormControlLabel control={<Checkbox onChange={handleSortTitleChange} />} label="By Title Alphabetical"/>
              <FormControlLabel control={<Checkbox onChange={handleSortReleaseDateChange} />} label="By Release Date"/>
            </FormGroup>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
