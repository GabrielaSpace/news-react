import React, { Component } from "react";
import Card from "./Card/Card";
import Form from "../Form/Form";
import { v4 as uuidv4 } from 'uuid';


class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      Articles:[]
    }
  }


  async componentDidMount() {
    await new Promise((resolve, reject) => setTimeout(resolve, 3000, "waiting..."))
    const chosenTopic = 'science';
    const resp = await fetch(`https://api.nytimes.com/svc/topstories/v2/${chosenTopic}.json?api-key=${process.env.REACT_APP_API_KEY}`);
    const data = await resp.json();
    const dataApi = data.results;
    const defaultNews= dataApi.slice(2,7) 

    this.setState({
      Articles: defaultNews
    })   
}


  addArticle = (Article) => {
  const updateArticles = [Article, ...this.state.Articles];
  this.setState({ Articles: updateArticles, showMessage: `The article ${Article.title} has been added` });
  setTimeout(() => {this.setState({ showMessage: false })}, 5000);
  console.log(Article);
}
 removeArticle = (i) => {
  const updateArticles = this.state.Articles.filter(
  (Article,j )=> j !== i)
  this.setState({Articles: updateArticles, showMessage: `The article has been removed` });
  setTimeout(() => {this.setState({ showMessage: false })}, 5000);

 }
 removeAllArticles = () => {
  this.setState({Articles:[]})
}


  render() {
    const { showForm } = this.props;
    return (
      <>
  {showForm ? (
    <>
      <Form onSubmit={this.addArticle} />
      {this.state.showMessage && <div className="showMessage">{this.state.showMessage}</div>}
    </>
  ) : (
    <div className="container-articles">
      {this.state.Articles.map((Article, i) => (
        <Card
          key={uuidv4()}
          id={i}
          title={Article.title}
          abstract={Article.abstract}
          published_date={Article.published_date}
          byline={Article.byline}
          url={Article.url}
          removeArticle={() => this.removeArticle(i)}
        />
      ))}
    </div>
  )}
</>


    );
  }
}

export default List;