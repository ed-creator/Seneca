// jshint ignore: start

import React, { Component } from 'react';
import QuestionContainer from './components/QuestionContainer';
import QuestionToggle from './components/QuestionToggle';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Mask'>

        </div>
        <QuestionToggle value='hi'/>
      </div>
    );
  }
}

export default App;
