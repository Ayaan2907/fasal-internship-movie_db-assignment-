import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
// import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
import { Home, MovieDetails, Navbar } from "./components";

Amplify.configure(awsExports);

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <BrowserRouter>
        <header className="App-navbar">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/playlist/" element={<h1>All playlists</h1>} />
          <Route path="/playlist/:id" element={<MovieDetails/>} />
          <Route path="*" element={<h1>404 - Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default withAuthenticator(App);
