import React, { Component } from "react";
import { userContext } from "../../../context/usercontext";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (<nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/newslist">List News</Link>
      <Link to="/form">Add a new article</Link>
      <Link to="/*">Error</Link>
      <userContext.Consumer>
      {({ logout, user }) => user ? <span>Hello, {user} <button onClick={logout}>Logout</button></span>: ""}
      </userContext.Consumer>



      </nav>);

  }
}

export default Nav;
