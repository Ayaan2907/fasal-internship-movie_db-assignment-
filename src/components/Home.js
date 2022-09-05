import React, { useState } from "react";
import MovieList from "./MovieList";
import FetchImdb, { FETCH_PARAMS } from "../utils/FetchImdb";

export default function Home() {
  const [searchBarVal, setSearchBarVal] = useState("");
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      FetchImdb(FETCH_PARAMS.TITLE, searchBarVal).then((data) => {
        console.log(data.Search);
        // TODO: later using redux store this data into redux store and use it in MovieList component
      });
    }
  };
  return (
    <>
      <div>Home</div>
      <input
        onChange={(e) => {
          setSearchBarVal(e.target.value);
        }}
        onKeyUp={handleSearch}
        autoFocus
        type="text"
        className="searchBar"
        placeholder=" search here..."
      />
      <MovieList />
    </>
  );
}
