import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Header from "../components/headerMovieList";
import Grid from "@material-ui/core/Grid";
import {
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import React from "react";
import { auth } from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    paddingTop: theme.spacing(7),
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

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const { register, handleSubmit, reset } = useForm();

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const [loggedInUser] = useAuthState(auth);
  console.log("loggedinuser", loggedInUser);

  // async function needed as checking data with firebase, returns promise
  const onSubmit = async (user) => {
    await signInWithEmailAndPassword(user.email, user.password);
    const origin = location.state?.intent?.pathname || "/";
    navigate(origin);
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Header title={"Login Page"} />
        </Grid>
      </Grid>
      <Box component="div" className={classes.root}>
        <Typography component="h4" variant="h5">
          You must log in to view the protected pages!
        </Typography>
        <Typography component="h5" variant="h6">
          Please log in here...
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
            label="Email"
            name="email"
            autoFocus
            inputRef={register({ required: "Email required" })}
          />
          <br></br>
          <TextField
            className={classes.textField}
            variant="outlined"
            margin="normal"
            required
            label="Password"
            name="password"
            inputRef={register({ required: "Password Required" })}
          />
          <br></br>
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
                  email: "",
                  password: "",
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

export default LoginPage;
