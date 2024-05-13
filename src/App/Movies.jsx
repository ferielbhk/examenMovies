import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import Movie from "./Movie";

const Movies = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movieTable")
      .then((res) => {
        setData(res.data);
        setFilteredMovies(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = () => {
    if (!searchTerm) {
      setFilteredMovies(data);
    } else {
      const filtered = data.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  return (
    <>
      <Container>
        <NavigationBar />
        <div className="container">
          <label className="mx-2">Search With Title </label>
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <button onClick={handleSearch}>Submit</button>
        </div>

        <Row>
          {filteredMovies.length === 0 && (
            <div className="alert alert-info" role="alert">
              No result found
            </div>
          )}

          {filteredMovies.map((movie) => (
            <Col key={movie.id}>
              <Movie
                key={movie.id}
                id={movie.id} // Assurez-vous de transmettre l'ID
                img={movie.img}
                title={movie.title}
                year={movie.year}
                genre={movie.genre}
                description={movie.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Movies;
