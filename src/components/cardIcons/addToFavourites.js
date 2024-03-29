import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToFavouritesIcon = ({ show }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(show);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;
