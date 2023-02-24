import React, { Component } from "react";
import { userContext } from "../../../context/usercontext";

class Home extends Component {

  static contextType = userContext;
  constructor(props) {
    super(props)
  
    this.username = React.createRef();

    this.state = {
      username:""
    }
  }
  sendName = () => {
    const {login} = this.context; 
    login(this.state.username);
    alert("Submitted name: " + this.state.username);
    this.username.current.value = "";
    this.setState({ username: "" });
  }

  handleChange = () => {
    const username = this.username.current.value; //Leer campo por referencia
    this.setState({ username });
  }


  render() {
    
    return <div>

    <input type='text' ref={this.username} onChange={this.handleChange} placeholder='Please write your name' />
    {this.state.username ? <button onClick={this.sendName}>Login</button> : ""}

    </div>;
  }
}

export default Home;
