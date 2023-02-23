import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>{this.props.published_data}</p>
        <p>{this.props.byline}</p>
        <img src={this.props.photoUrl} alt="" />
        <p>Photo caption: {this.props.photoCaption}</p>
        <div className="removeButton" onClick={() => this.props.removeArticle(this.props.id)}> <button>Remove</button></div>
      </div>
    );
  }
}

export default Card;
