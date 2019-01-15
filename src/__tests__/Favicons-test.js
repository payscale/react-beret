import React from 'react';
import { shallow } from 'enzyme';
import Favicons from '../components/Favicons';

describe('Favicons', () => {
  test('renders null element if no favicons', () => {
    const element = shallow(<Favicons />);
    expect(element.getElement()).toBe(null);
  });
});
