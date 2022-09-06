import React, { useState } from "react";
import MovieList from "./movieController/MovieList";
import FetchImdb, { FETCH_PARAMS } from "../utils/FetchImdb";
import "../styles/Home.css";
export default function Home() {
  const [searchBarVal, setSearchBarVal] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      setTimeout(() => {
        FetchImdb(FETCH_PARAMS.TITLE, searchBarVal)
          .then((data) => {
            console.log(data.Search);
            setMovies(data.Search);
            setLoading(false);
            // instead of using state mechanism in react, directly passing values to 2 children componets for the sake of ease of task
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }, 1000);
    }
  };
  return (
    <div className="home">
      <div >
        <input
          onChange={(e) => {
            setSearchBarVal(e.target.value);
          }}
          onKeyUp={handleSearch}
          autoFocus
          className="search-bar"
          type="text"
          placeholder=" search the title ..."
        />
      </div>
      <div>{loading ? <h1>Loading...</h1> : <MovieList movies={movies} />}</div>
    </div>
  );
}
