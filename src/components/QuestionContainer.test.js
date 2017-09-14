// jshint ignore: start

import React from 'react';
import { mount } from 'enzyme';
import QuestionContainer from './QuestionContainer';

describe('QuestionContainer',() => {
  let question_container = mount(<QuestionContainer />);

  it('renders the container', () => {
    // console.log(note.debug())
    expect(note.find('p').text()).toEqual('The answer is incorrect')
  });
});
