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
          <QuestionToggle correct={'Hot'} incorrect={'Cold'}/>
          <QuestionToggle correct={'Option 1'} incorrect={'Option 2'}/>
          <QuestionToggle correct={'Active'} incorrect={'Not Active'}/>
        </div>
      </div>
    );
  }
}

export default App;
