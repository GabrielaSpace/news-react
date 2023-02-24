import React, { Component } from "react";
import List from "./List/List";
import Home from "./Home/Home";
import Header from "../Header/Header";

class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home />
        <List />
      </div>
    );
  }
}

export default Main;

