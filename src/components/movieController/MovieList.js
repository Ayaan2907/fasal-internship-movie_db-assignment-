import React from "react";
import MovieCard from "./MovieCard";
export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => {
        return <MovieCard key={movie.imdbID} movie={movie} />;
      })}
    </div>
  );
}
