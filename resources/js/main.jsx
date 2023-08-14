import React, { Component } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import AnimeList from "./components/AnimeList";
import { HOME_PATH, SEARCH_PATH } from "./constants";

class Main extends Component {
  render () {
    return (
      <div>
        <Routes>
          <Route path={HOME_PATH} element={<HomePage/>}/>
          <Route path={SEARCH_PATH} element={<AnimeList/>}/>
        </Routes>
      </div>
    );
  }
}

export default Main;