import React from "react";
import { Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";

export default function Navbar() {
  return (
    <>
      <Link to="/">
        Home 
      </Link>
      <Link to="/playlist/">All playlists</Link>
      <AmplifySignOut />
    </>
  );
}
