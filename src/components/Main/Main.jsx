import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import List from "./List/List";
import Home from "./Home/Home";
import NotFound from "../NotFound/NotFound";

class Main extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<List />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default Main;

