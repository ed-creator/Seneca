// jshint ignore: start

import React, { Component } from 'react';
import QuestionContainer from './components/QuestionContainer';
import Header from './components/Header';

import './App.css';


class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <QuestionContainer />
      </div>
    );
  }
}

export default App;
