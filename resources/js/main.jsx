import React, { Component } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import AnimeList from "./components/AnimeList";
import { DETAILS_PATH, HOME_PATH, SEARCH_PATH } from "./constants";
import AnimeDetails from "./components/AnimeDetails";

class Main extends Component {
  render () {
    return (
      <div>
        <Routes>
          <Route path={DETAILS_PATH} element={<AnimeDetails/>}/>
          <Route path={SEARCH_PATH} element={<AnimeList/>}/>
          <Route path={HOME_PATH} element={<HomePage/>}/>
        </Routes>
      </div>
    );
  }
}

export default Main;