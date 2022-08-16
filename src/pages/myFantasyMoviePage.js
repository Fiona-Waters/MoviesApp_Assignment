import React, { useReducer } from "react";
import { useForm } from "react-hook-form";
import FantasyMovieForm from "../components/fantasyMovieForm";

console.log("hello");
const FantasyMoviePage = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    < FantasyMovieForm />
  );
};

export default FantasyMoviePage;

// display fantasy movies, like movie cards? upload an image?
// have form component on the same page? when you submit it updates?
// or have a link to the form here and make another page for the form?
