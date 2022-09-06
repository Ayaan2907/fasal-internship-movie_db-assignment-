import React from "react";
import MovieCard from "./MovieCard";
export default function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => {
        return <MovieCard key={movie.imdbID} movie={movie} />;
      })}
    </>
  );
}
