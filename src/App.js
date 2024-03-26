// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import React, { Component } from 'react'
import NewsItem from './component/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
