import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Card/Card.css'




class CardComponent extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }} className='container-new'>
        <Card.Body>
        <Card.Title className="cardTitle">{this.props.title}</Card.Title>
        <Card.Subtitle>{this.props.byline}</Card.Subtitle>
        <Card.Text>{this.props.published_date.slice(0,10)}</Card.Text>
        <Card.Text>{this.props.abstract}</Card.Text>
        <div className="cardButtons">
        <Button variant="outline-danger"><Card.Link className="cardLink" href={this.props.url} target="_blank" rel="noopener noreferrer">See more</Card.Link></Button>
        <div className="removeButton" onClick={() => this.props.removeArticle(this.props.id)} > 
        <Button variant="outline-danger" >Remove</Button></div>
        </div>
        </Card.Body>
      </Card>
    );
  }
}

export default CardComponent;
