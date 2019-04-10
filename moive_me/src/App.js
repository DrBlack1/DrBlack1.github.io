import React, { Component } from "react";
import "./App.css";
import SiteHeader from "./Components/SiteHeader";
import MovieCard from "./Components/MovieCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteHeader />
        <div className="movie-list">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    );
  }
}

export default App;
