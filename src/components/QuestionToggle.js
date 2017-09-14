// jshint ignore: start

import React, {Component} from 'react';

class QuestionToggle extends Component {
  constructor(props) {
    super(props);


    this.state = {
      answer: true,

    }
  }

  setAnswer() {
    // const ans = !this.state
    this.setState({answer: !this.state.answer});
    this.props.callback(this.state.answer);
  }

  render() {
    // console.log(this.state.answer)
    return (
      <div className='Rectangle-5'>
        <button className='Rectangle-5' onClick={() => this.setAnswer()} >
           <p className="alignleft">{this.props.correct}</p>
           <p className="alignright">{this.props.incorrect}</p>

        </button>

      </div>
    )
  }
}

export default QuestionToggle;
