import React, { Component } from 'react';
import './App.css';
import Container from './components/container/container.js';
import image01 from './1.png'
import image02 from './2.png'
import image03 from './3.png'
import image04 from './4.png'
import image05 from './5.png'
import image06 from './6.png'

class App extends Component {
  state = { 
    news : [{img : image01, headline : "Highlights from Oscars night", subcat : "Entertainment & Arts"},
             {img : image02, headline : "Pressure on PM to consider Brexit Delay", subcat : "UK Politics"},
             {img : image03, headline : "Pupils to be taught about relationships", subcat : "Family & Education"}],

    news2 : [
             {img : image04, headline : "Reaction from the Carabao Cup and Premier League", subcat : "Football"},
             {img : image05, headline : "Sarri undermined by disgraceful insubordination", subcat : "Football"},
             {img : image06, headline : "The biggest fight in British history - Tyson v Bruno 30 years on", subcat : "Boxing"}],
    newsHeadline : {header : "News Headlines >"},
    sportHeadline : {header : "Sport Headlines >"}
  }

  render() {
    return (
      <div className="App">
          <Container header = {this.state.newsHeadline.header} news = {this.state.news}/>
          <Container header = {this.state.sportHeadline.header} news = {this.state.news2}/>
      </div>
    );
  }
}

export default App;