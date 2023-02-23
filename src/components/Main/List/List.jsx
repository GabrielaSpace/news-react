import React, { Component } from "react";
import Card from "../Card/Card";
import Form from "../Form/Form";

class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      Articles:[]
    }
  }
  addArticle = (Article) => {
  const updateArticles = [Article, ...this.state.Articles];
  this.setState({ Articles: updateArticles, showMessage: `The article ${Article.title} has been added` });
  setTimeout(() => {this.setState({ showMessage: false })}, 5000);
  console.log(Article);
}
 removeArticle = (id) => {
  const updateArticles = this.state.Articles.filter(
  Article => Article.id !== id)
  this.setState({Articles: updateArticles, showMessage: `The article has been removed` });
  setTimeout(() => {this.setState({ showMessage: false })}, 5000);

 }


  render() {
    return (
      <><Form onSubmit={this.addArticle} /><div className="container-articles">
        {this.state.showMessage && <div className='showMessage'> {this.state.showMessage}</div>}
        {this.state.Articles.map((Article) => <Card key={Article.id} id={Article.id} title={Article.title} description= {Article.description} 
        published_data= {Article.published_data} byline={Article.byline} photoUrl={Article.photoUrl} photoCaption= {Article.photoCaption} removeArticle={this.removeArticle}/>
        )}


      </div></>
    );
  }
}

export default List;
