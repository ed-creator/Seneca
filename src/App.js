// jshint ignore: start

import React, { Component } from 'react';
import QuestionContainer from './components/QuestionContainer';
import Header from './components/Header';
import Footer from './components/Footer';


import './App.css';


class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <QuestionContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
