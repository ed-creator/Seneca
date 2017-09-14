// jshint ignore: start

import React, {Component} from 'react';
import QuestionToggle from './QuestionToggle';


class QuestionContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="Mask">
          <p>The answer is incorrect</p>
        </div>
        <div>

        </div>
      </div>
    )
  }
}

export default QuestionContainer;
