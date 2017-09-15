// jshint ignore: start

import React, {Component} from 'react';
import QuestionToggle from './QuestionToggle';

import { mount } from 'enzyme';

const props = {id: '1',count: 1, correct: 'Hot', incorrect: 'Cold', value: 'correct'}



describe('QuestionToggle',() => {

  let question_toggle = mount(<QuestionToggle {...props}/>);

  it('renders the left answer', () => {
    expect(question_toggle.find('p.left-left').text()).toEqual('Hot')
  });
  it('renders the right(sided) answer', () => {
    expect(question_toggle.find('p.right-left').text()).toEqual('Cold')
  });
  it('renders an answer set as true', () => {
    expect(question_toggle.state().answer).toEqual(true)
  })
});
