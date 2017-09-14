// jshint ignore: start

import React from 'react';
import { mount } from 'enzyme';
import Footer from './Footer';

describe('Footer',() => {
  let footer = mount(<Footer />);

  it('renders the footer', () => {
    expect(footer.find('p.Seneca').text()).toEqual('Seneca')
  });
});
