// jshint ignore: start

import React, {Component} from 'react';
import QuestionToggle from './QuestionToggle';

import { mount } from 'enzyme';

const props = {id: 'one', correct: 'Hot', incorrect: 'Cold', value: 'correct'}



describe('QuestionToggle',() => {

  let question_toggle = mount(<QuestionToggle {...props}/>);

  it('renders the left answer', () => {
    // console.log(question_toggle.debug())
    expect(question_toggle.find('p.alignleft').text()).toEqual('Hot')
  });
  it('renders the right(sided) answer', () => {
    expect(question_toggle.find('p.alignright').text()).toEqual('Cold')
  });
  it('renders an answer set as true', () => {
    expect(question_toggle.state().answer).toEqual(true)
  })
  describe('after changing answer', () => {
    beforeEach(() => {
      // question_toggle.find('.Rectangle-5').at(1).simulate('click');
    });
    it('renders an answer set as false', () => {
      // expect(question_toggle.state().answer).toEqual(false)
    })
  })
});
