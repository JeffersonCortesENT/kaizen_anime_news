import React, { Component } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import AnimeList from "./components/AnimeList";

class Main extends Component {
  render () {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/search" element={<AnimeList/>}/>
        </Routes>
      </div>
    );
  }
}

export default Main;