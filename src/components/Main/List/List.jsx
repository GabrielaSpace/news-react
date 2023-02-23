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
  this.setState({ Articles: updateArticles, showMessage: `Added article: ${Article.title}` });
  setTimeout(() => {this.setState({ showMessage: false })}, 5000);
  console.log(Article);
}
 


  render() {
    return (
      <><Form onSubmit={this.addArticle} /><div className="container-articles">
        {this.state.showMessage && <div className='showMessage'> {this.state.showMessage}</div>}
        {this.state.Articles.map((Article) => <Card key={Article.id} id={Article.id} title={Article.title} description= {Article.description} 
        published_data= {Article.published_data} byline={Article.byline} photoUrl={Article.photoUrl} bylinePhoto= {Article.bylinePhoto} />
        )}


      </div></>
    );
  }
}

export default List;
