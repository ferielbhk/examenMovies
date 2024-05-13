import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToWishList } from "./redux/actions";
import axios from "axios";
const Movie = ({ id, title, year, genre, description, img }) => {
  const [movie, setMovie] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.wishList.movies);

  const addToWishlistHandler = () => {
    const movieExists = movies.find((movie) => movie.id === id);
    if (movieExists) {
      setMessage("This movie is already in your wishlist!");
    } else {
      dispatch(addToWishList({ id, title, year, genre, description, img }));
      setMessage("Movie added to wishlist!");
    }
  };

  useEffect(() => {
    console.log(movies);
  }, [movies, dispatch]);

  return (
    <Card>
      <Card.Img variant="top" src={`images/${img}`} height={250} />
      <Card.Body>
        <Link to={`/DetailsMovies/${id}`} className="btn btn-info">
          {title}
        </Link>

        <Card.Text>Year: {year}</Card.Text>
        <Card.Text>Genre: {genre}</Card.Text>
        <Card.Text>Description: {description}</Card.Text>
        <Button onClick={addToWishlistHandler}>Add To Wishlist</Button>
        {message && <p>{message}</p>}
      </Card.Body>
    </Card>
  );
};

export default Movie;
