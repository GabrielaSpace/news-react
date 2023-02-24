import React, { Component } from "react";
import { userContext } from "../../../context/usercontext";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (<nav className="nav-bar">
       <userContext.Consumer>
      {({ logout, user }) => user ? <span>Hello, {user} <button onClick={logout}>Logout</button></span>: ""}
      </userContext.Consumer>
      <Link to="/">Home</Link>
      <Link to="/news">List News</Link>
      <Link to="/form">Add a new article</Link>
      <Link to="/*">Error</Link>
      </nav>);
  }
}

export default Nav;
