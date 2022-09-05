import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchImdb, { FETCH_PARAMS } from "../utils/FetchImdb";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    FetchImdb(FETCH_PARAMS.ID, id).then((data) => {
      setMovie(data); //later using redux store this data into redux store and use it in MovieList component
      console.log(movie);
      // TODO: generate a function to check the playlist storage status of movie in our own database
    });
  }, [id]);
  return (
    <>
      <div>Movie Details</div>
      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div>{movie.Title}</div>
      <div>{movie.year}</div>
      <div>{movie.Type}</div>
      <div>{movie.imdbID}</div>
    </>
  );
}
