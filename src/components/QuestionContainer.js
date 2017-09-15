// jshint ignore: start

import React, {Component} from 'react';
import QuestionToggle from './QuestionToggle';


class QuestionContainer extends Component {
  constructor() {
    super();

    this.state = {
      // score is used as a display setter & to check if all three answers are correct
      score: 0,
      // 1 = correct answer, 0 = false answer, this must correspond to each answer value
      q1: 0,
      q2: 1,
      q3: 1,
      answer_status: 'The answer is incorrect',
    }
  }

  updateScore = (answer, question_num) => {
    var self = this
    if(answer === true && question_num === '1' ) { self.setState({q1: 1}) }
    else if(answer === false && question_num === '1') { self.setState({q1: 0}) }
    else if(answer === true && question_num === '2' ) { self.setState({q2: 1}) }
    else if(answer === false && question_num === '2') { self.setState({q2: 0}) }
    else if(answer === true && question_num === '3' ) { self.setState({q3: 1}) }
    else if(answer === false && question_num === '3') { self.setState({q3: 0}) }
  }

  checkAnswer(sum) {
    const correct = 'The answer is correct!'
    const incorrect = 'The answer is incorrect'
    if(sum === 3) { this.setState({answer_status: correct}) }
    else { this.setState({answer_status: incorrect}) }
  }
  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevState.q1 !== this.state.q1 || prevState.q2 !== this.state.q2 || prevState.q3 !== this.state.q3) {
      var sum = this.state.q1 + this.state.q2 + this.state.q3
      this.setState({score: sum})
      this.checkAnswer(sum)
      };
  }
  // componentWillUpdate(prevProps, prevState) {
  //   if (prevState.score !== this.state.score)
  //     debugger;
  //     {this.checkAnswer()}
  // }

  componentDidMount() {
    var sum = this.state.q1 + this.state.q2 + this.state.q3
    this.setState({score: sum})
  }

  render() {
    console.log(this.state.score)
    console.log(this.state.answer_status)
    return (
      <div>
        <div className={`MaskV${this.state.score}`} >
          <div className='questionbox'>
            <QuestionToggle updateQuestionScores={this.updateScore} id='1' count={this.state.q1} correct={'Hot'} incorrect={'Cold'} value='correct'/>
          <br/>
            <QuestionToggle updateQuestionScores={this.updateScore} id='2' count={this.state.q2} correct={'Option 1'} incorrect={'Option 2'} value='incorrect'/>
            <br/>
            <QuestionToggle updateQuestionScores={this.updateScore} id='3' count={this.state.q3} correct={'Active'} incorrect={'Not Active'} value='incorrect'/>
          </div>
          <p className='aligncentre'>{this.state.answer_status}</p>
          </div>
      </div>
    )
  }
}

export default QuestionContainer;
