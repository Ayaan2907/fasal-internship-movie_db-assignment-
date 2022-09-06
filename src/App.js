import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/App.css";
// import "@aws-amplify/ui-react/styles.css";
import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
import { MovieDetails } from "./components";
import { Home, Navbar } from "./components";

Amplify.configure(awsExports);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user.attributes.email))
      .catch(() => setUser(null));
    console.log(user);
  }, []);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <header className="App-navbar">
            <Navbar user={user} />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/playlist/" element={<h1>All playlists</h1>} />
            <Route path="/playlist/:id" element={<h1>specific playlist</h1>} />
            <Route path="*" element={<h1>404 - Not Found!</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default withAuthenticator(App);
