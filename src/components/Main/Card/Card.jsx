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
        <img src={this.props.bylinePhoto} alt="" />
        <div className="deleteButton" onClick={() => this.props.deleteArticle(this.props.id)}> Remove</div>
      </div>
    );
  }
}

export default Card;
