import React, { Component } from 'react'

export class NewsItem extends Component {
  constructor(){
    super();
    console.log("i am constructor");
  }

  render() {
    let {title,description,imgurl,url}=this.props;
    return (
      <div className="card mx-2 my-1 p-0" style={{width:"19rem"}}>
        <img className="card-img-top" src={imgurl} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target='_blank' className="btn btn-primary">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
