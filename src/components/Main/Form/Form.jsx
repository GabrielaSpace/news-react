import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';


class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      abstract: '',
      published_date: '',
      byline: '',
      photoUrl: '',
      url:''

    }
   
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const newArticle = {
        id: uuidv4(),
        title: this.state.title,
        abstract: this.state.abstract,
        published_date: this.state.published_date,
        byline: this.state.byline,
        photoUrl: this.state.photoUrl,
        url: this.state.url,

        
    }
    this.props.onSubmit(newArticle);
    this.setState({title: '', abstract: '', published_date: '', byline: '', photoUrl: '', url:''});
}

  render() {
    return <form className="form-Article" onSubmit={this.handleSubmit}>
        <input className='input' type='text' placeholder='Write a Title' name='title' value={this.state.title} onChange={this.handleChange} />
        <input className='input' type='text' placeholder='Write an abstract' name='abstract' value={this.state.abstract} onChange={this.handleChange} />
        <input className='input' type='date' placeholder='Write a published data' name='published_date' value={this.state.published_date} onChange={this.handleChange} />
        <input className='input' type='text' placeholder='Write a author' name='byline' value={this.state.byline} onChange={this.handleChange} />
        <input className='input' type='text' placeholder='Write an url' name='photoUrl' value={this.state.photoUrl} onChange={this.handleChange} />
        <input className='input' type='text' placeholder='url' name='url' value={this.state.url} onChange={this.handleChange} />
        <button className='button'>Add article</button>
        

    </form>;
  }
}

export default Form;
