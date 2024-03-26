import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("i am constructor from news");
    this.state={
      articles:[]
    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=981c8d275fdd466fbeecfa6e474ae534";
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:parsedData.articles})
  }

  render() {
    return (
      <div className='container'>
        <h2 className='text-center'>Top Headlines!</h2>
        <div className="row my-3">
        {this.state.articles.map(function(element){
          if(element.url!=="https://removed.com" && element.urlToImage!=null) return <NewsItem key={element.url} className="col-md-3" title={element.title.slice(0,47)+"..."} description={element.description.slice(0,97)+"..."} imgurl={element.urlToImage} url={element.url}/>
        })}
        </div>
        
      </div>
    )
  }
}

export default News
