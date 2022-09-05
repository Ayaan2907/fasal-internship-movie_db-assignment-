import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
// import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
import { Home, MovieDetails, Navbar } from "./components";

Amplify.configure(awsExports);

function App({ user }) {
  return (
    <>
      <header className="App-navbar">
        <Navbar />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/movie/:id" element={<MovieDetails />} />
          {/* <Route path="/playlist"> */}
            <Route path="/playlist/" element={<h1>All playlists</h1>} />
            <Route path="/playlist/:id" element={<h1>specific playlists</h1>} />
          {/* </Route> */}
          <Route path="*" element={<h1>404 - Not Found!</h1>} />
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default withAuthenticator(App);
// export default App;
