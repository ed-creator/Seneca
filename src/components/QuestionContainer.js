// jshint ignore: start

import React, {Component} from 'react';
import QuestionToggle from './QuestionToggle';


class QuestionContainer extends Component {
  constructor() {
    super();

    this.state = {
      answers: false,
      score: 0,

    }
  }

  updateScore = (answer) => {
    var self = this
    if(answer == true) { self.setState({score: self.state.score += 1}) }
    if(answer == false) { self.setState({score: self.state.score -= 1}) }
    debugger;
  }

  render() {
    console.log(this.state.score)
    return (
      <div>
        <div className="Mask">
          <div className=''>
            <QuestionToggle callback={this.updateScore} id='one' correct={'Hot'} incorrect={'Cold'} value='correct'/>
            <QuestionToggle callback={this.updateScore} id='two' correct={'Option 1'} incorrect={'Option 2'} value='correct'/>
            <QuestionToggle callback={this.updateScore} id='three' correct={'Active'} incorrect={'Not Active'} value='correct'/>
          </div>
          <p>The answer is incorrect</p>
          </div>
      </div>
    )
  }
}

export default QuestionContainer;
