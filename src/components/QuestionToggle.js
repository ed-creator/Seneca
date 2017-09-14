// jshint ignore: start

import React, {Component} from 'react';
import Toggle from 'react-toggle';
// import { ToggleButton } from 'react-bootstrap';
import Switch from 'react-toggle-switch';
import ToggleButton from 'react-toggle-button'



class QuestionToggle extends Component {
  constructor() {
    super();

    this.state = {
      answer: false,
    }
  }

  setAnswer() {
    // const ans = !this.state
    this.setState({answer: !this.state.answer})
  }

  render() {
    console.log(this.state.answer)
    return (
      <div className='Rectangle-5'>
        <button className='Rectangle-5' onClick={() => this.setAnswer()}>

        </button>

      </div>
    )
  }
}

export default QuestionToggle;





{/* <label className="switch">
<input type="checkbox"/>
<span className="slider round"></span>
</label> */}
