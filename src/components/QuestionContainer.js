// jshint ignore: start

import React, {Component} from 'react';
import QuestionToggle from './QuestionToggle';


class QuestionContainer extends Component {
  constructor() {
    super();

    this.state = {
      answer_status: 'The answer is incorrect',
      // score is also used as a display setter
      score: 0

    }
  }

  updateScore = (answer) => {
    var self = this
    if(answer == true) { self.setState({score: self.state.score += 1}) }
    if(answer == false) { self.setState({score: self.state.score -= 1}) }
    self.checkAnswer()
  }

  checkAnswer() {
    const correct = 'The answer is correct!'
    const incorrect = 'The answer is incorrect'
    if(this.state.score === 3) { this.setState({answer_status: correct})  }
    if(this.state.score < 3) { this.setState({answer_status: incorrect})  }

  }

  render() {
    console.log(this.state.score)
    return (
      <div>
        <div className={`MaskV${this.state.score}`}>
          <div className=''>
            <QuestionToggle callback={this.updateScore} id='one' correct={'Hot'} incorrect={'Cold'} value='correct'/>
            <QuestionToggle callback={this.updateScore} id='two' correct={'Option 1'} incorrect={'Option 2'} value='correct'/>
            <QuestionToggle callback={this.updateScore} id='three' correct={'Active'} incorrect={'Not Active'} value='correct'/>
          </div>
          <p className='aligncentre'>{this.state.answer_status}</p>
          </div>
      </div>
    )
  }
}

export default QuestionContainer;
