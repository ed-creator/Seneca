// jshint ignore: start

import React from 'react';
import { mount } from 'enzyme';
import QuestionContainer from './QuestionContainer';

describe('QuestionContainer',() => {
  let question_container = mount(<QuestionContainer />);

  it('renders the container', () => {
    console.log(question_container.debug())
    expect(question_container.find('p.aligncentre').text()).toEqual('The answer is incorrect')
  });
});
