import React, { Component } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";

class Main extends Component {
  render () {
    return (
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </div>
    );
  }
}

export default Main;