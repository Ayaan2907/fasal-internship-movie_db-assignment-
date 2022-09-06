import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <>
      <Link to={`/movie/${movie.imdbID}`}>
        <div>
          <img src={movie.Poster} alt={movie.Title} />
          <h1>{movie.Title}</h1>
          <h2>{movie.Year}</h2>
          <h2>{movie.Type}</h2>
        </div>
      </Link>
    </>
  );
}
