import React from "react";
import { Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";
export default function Navbar() {
  return (
    <>
      <h2>Movie Search </h2>
      {/* <Link to={"/playlist/"}> */}
      <p>All Playlists</p>
      {/* </Link>  */}
      <input
        onChange={(e) => {
          // setSearchBarVal(e.target.value);
          // basically it is giving us a front-end event, we have to bind that event with certain action
          // now we have to get input value from this event.
        }}
        // onKeyUp={search}
        autoFocus
        type="text"
        className="searchBar"
        placeholder=" search here..."
      />
      <AmplifySignOut />
    </>
  );
}
