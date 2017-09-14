// jshint ignore: start

import React, {Component} from 'react';

class QuestionToggle extends Component {
  constructor(props) {
    super(props);


    this.state = {
      answer: true,
      slider: 'left'
    }
  }


  setAnswer() {
    this.setState({answer: !this.state.answer});
    this.props.updateQuestionScores(this.state.answer);
    if(this.state.slider === 'left') {this.setState({slider: 'right'})}
    if(this.state.slider === 'right') {this.setState({slider: 'left'})}

  }

  render() {
    return (
      <div >
        <button className='Rectangle-5' onClick={() => this.setAnswer()} >
          <div>
            <div inline className={`Rectangle-3-${this.state.slider}`}>
              <p className={`left-${this.state.slider}`}>{this.props.correct}</p>
              <p className={`right-${this.state.slider}`}>{this.props.incorrect}</p>
            </div>
          </div>
        </button>
      </div>
    )
  }
}

export default QuestionToggle;
