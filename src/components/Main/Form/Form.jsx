import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';


class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      description: '',
      published_data: '',
      byline: '',
      photoUrl: '',
      photoCaption:''

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
        description: this.state.description,
        published_data: this.state.published_data,
        byline: this.state.byline,
        photoUrl: this.state.photoUrl,
        photoCaption: this.state.photoCaption,

        
    }
    this.props.onSubmit(newArticle);
    this.setState({title: '', description: '', published_data: '', byline: '', photoUrl: '', photoCaption:''});
}

  render() {
    return <form className="form-Article" onSubmit={this.handleSubmit}>
        <input className='input' type='text' placeholder='Write a Title' name='title' value={this.state.title} onChange={this.handleChange} />
        <input className='input' type='text' placeholder='Write a description' name='description' value={this.state.description} onChange={this.handleChange} />
        <input className='input' type='date' placeholder='Write a published data' name='published_data' value={this.state.published_data} onChange={this.handleChange} />
        <input className='input' type='text' placeholder='Write a author' name='byline' value={this.state.byline} onChange={this.handleChange} />
        <input className='input' type='text' placeholder='Write an url' name='photoUrl' value={this.state.photoUrl} onChange={this.handleChange} />
        <input className='input' type='text' placeholder='photo caption' name='photoCaption' value={this.state.photoCaption} onChange={this.handleChange} />
        <button className='button'>Add article</button>
        

    </form>;
  }
}

export default Form;
