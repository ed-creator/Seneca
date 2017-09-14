// jshint ignore: start

import React, {Component} from 'react';
import App from './App';
import { mount } from 'enzyme';

describe('App',() => {
  let app = mount(<App />);

  it('renders the app', () => {
    // console.log(app.debug())
    expect(app.find('p.aligncentre').text()).toEqual('The answer is incorrect')
  });
});
