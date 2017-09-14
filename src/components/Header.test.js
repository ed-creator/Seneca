// jshint ignore: start

import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

describe('Header',() => {
  let header = mount(<Header />);

  it('renders the header', () => {
    expect(header.find('p.navbar-element').at(0).text()).toEqual('Home')
  });
});
