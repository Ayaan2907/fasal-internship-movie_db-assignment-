import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchImdb, { FETCH_PARAMS } from "../../utils/FetchImdb";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(`imdb Id : ${id}`);
    setTimeout(() => {
      FetchImdb(FETCH_PARAMS.ID, id)
        .then((data) => {
          setLoading(false);
          setMovie(data);
          // TODO: generate a function to check the playlist storage status of movie in our own database
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, 1000);
  }, [id]);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>Movie Details</div>
          <div>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div>{movie.Title}</div>
          <div>{movie.year}</div>
          <div>{movie.Type}</div>
            <div>{movie.imdbID}</div>
            {/* TODO: display the playlist storage status and option */}
        </div>
      )}
    </>
  );
}
