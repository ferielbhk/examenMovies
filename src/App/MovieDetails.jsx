import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!movie) {
    return (
      <div className="alert alert-info" role="alert">
        Movie not found
      </div>
    );
  }

  return (
    <>
      <NavigationBar />
      <div className="container p-3 mt-5">
        <Row>
        <Col xs={12} md={6}>
            <img
              src={`/images/${movie.img}`}
              className="card-img-top w-100 img-fluid"
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="card-body">
            <p className="card-text">Description: {movie.description}</p>
            <p className="card-text">Genre: {movie.genre}</p>
              <p className="card-text">Year: {movie.year}</p>
            </div>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default MovieDetails;
