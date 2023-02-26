import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../Form/Form.css'



class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      abstract: '',
      published_date: '',
      byline: '',
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
        url: this.state.url

    }
    this.props.onSubmit(newArticle);
    this.setState({title: '', abstract: '', published_date: '', byline: '', url:''});
}

  render() {
    return (<form onSubmit={this.handleSubmit}>
        <h1>Add an article</h1>
        <input className='input' type='text' placeholder='Write a Title' name='title' value={this.state.title} onChange={this.handleChange} />
        <input className='input' type='text' placeholder='Write an abstract' name='abstract' value={this.state.abstract} onChange={this.handleChange} />
        <input className='input' type='date' placeholder='Write a published data' name='published_date' value={this.state.published_date} onChange={this.handleChange} />
        <input className='input' type='text' placeholder='Write an author' name='byline' value={this.state.byline} onChange={this.handleChange} />
        <input className='input' type='text' placeholder='Write an url' name='url' value={this.state.url} onChange={this.handleChange} />
        <button variant="outline-danger">Add article</button>
    </form>
    )

  }
}

export default Form;