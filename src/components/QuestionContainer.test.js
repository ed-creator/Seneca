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
  describe('after changing answer', () => {
    beforeEach(() => {
      question_container.find('.Rectangle-5').at(1).simulate('click');
    });
    it('adds to the score if an answer is switched to correct', () => {
      expect(question_container.state().score).toEqual(1)
    })
    describe('after 2nd changing answer', () => {
      beforeEach(() => {
        question_container.find('.Rectangle-5').at(1).simulate('click');
        question_container.find('.Rectangle-5').at(3).simulate('click');
        question_container.find('.Rectangle-5').at(5).simulate('click');
      });
      it('adds to the score if the 2nd answer is switched to correct', () => {
        expect(question_container.state().score).toEqual(3)
      })
    })
  })
  describe('after clicking answer an answer for the second time (setting to incorrect)', () => {
    beforeEach(() => {
      question_container.find('.Rectangle-5').at(1).simulate('click');
    });
    it('reduces the score by one', () => {
      expect(question_container.state().score).toEqual(2)
    })
  })
});
