import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactPageScroller from "react-page-scroller";

// Components
import Home from './sections/home/home'
import Profile from './sections/profile/profile'
import Experience from './sections/experience/experience'
import Projects from './sections/projects/projects'
import Skills from './sections/skills/skills'
import Contact from './sections/contact/contact'



class App extends Component {

  // goToPage = (pageNumber) => {
  //   this.reactPageScroller.goToPage(pageNumber);
  // }

  render() {
    return (
      <div className="main">
        <ReactPageScroller ref={c => this.reactPageScroller = c}>
          <Home></Home> 
          <Profile></Profile> 
          <Experience></Experience> 
          <Projects></Projects> 
          <Skills></Skills> 
          <Contact></Contact> 
        </ReactPageScroller>
      </div>

    );
  }
}

export default App;
