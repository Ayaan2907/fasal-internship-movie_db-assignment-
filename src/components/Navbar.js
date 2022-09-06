import React from "react";
import { Link } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import "../styles/Navbar.css";
export default function Navbar({user}) {
  return (
    <div className="nav-bar">
      <div >
        {user}
        </div>

      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/playlist/">
        <button>All playlists</button>
      </Link>
      <AmplifySignOut />
    </div>
  );
}
