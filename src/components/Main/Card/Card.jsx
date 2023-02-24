import React, { Component } from "react";



class Card extends Component {
  render() {
    return (
      <div className="card">
        <a href={this.props.url} target="_blank" rel="noopener noreferrer"><h2>{this.props.title}</h2></a>
        <p>{this.props.abstract}</p>
        <p>{this.props.published_date.slice(0,10)}</p>
        <p>{this.props.byline}</p>
        <img src={this.props.photoUrl} alt="" />
        <div className="removeButton" onClick={() => this.props.removeArticle(this.props.id)} > <button>Remove</button></div>
      </div>
    );
  }
}

export default Card;
