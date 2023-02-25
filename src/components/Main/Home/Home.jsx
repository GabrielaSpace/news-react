import React, { Component } from "react";
import { userContext } from "../../../context/usercontext";

class Home extends Component {
  static contextType = userContext;

  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.state = {
      username: "",
    };
  }

  sendName = () => {
    const { login } = this.context;
    login(this.state.username);
    alert("¡Welcome " + this.state.username + "!");
    this.username.current.value = "";
    this.setState({ username: "" });
  };

  handleChange = () => {
    const username = this.username.current.value;
    this.setState({ username });
  };

  render() {
    const { user } = this.context;

    return (
      <div>
        {!user && ( <div>
          <input type="text" ref={this.username} onChange={this.handleChange} placeholder="Please write your username" />
          {this.state.username ? (<button onClick={this.sendName}>Login</button>) : ("" )}</div>
        )}
      </div>
    );
  }
}

export default Home;
