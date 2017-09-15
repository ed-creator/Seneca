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

  componentDidMount() {
    if(this.props.value === 'incorrect') {this.setState({answer: false, slider: 'left'})}
  }

  setAnswer() {
    this.setState({answer: !this.state.answer});
    this.props.updateQuestionScores(this.state.answer, this.props.id);
    if(this.state.slider === 'left') {this.setState({slider: 'right'})}
    else {this.setState({slider: 'left'})}
  }

  render() {
    return (
      <div >
        {/* {console.log(this.props)} */}
        <button className='Rectangle-5' onClick={() => this.setAnswer()} >
          <div>
            <div className={`Rectangle-3-${this.state.slider}`}>
              <p className={`left-${this.state.slider}`}>{this.props.left}</p>
              <p className={`right-${this.state.slider}`}>{this.props.right}</p>
            </div>
          </div>
        </button>
      </div>
    )
  }
}

export default QuestionToggle;
