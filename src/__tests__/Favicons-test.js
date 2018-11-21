import React from 'react';
import { shallow } from 'enzyme';
import Favicons from '../components/Favicons';

describe('Favicons', () => {
  test('exists and is not null', () => {
    const element = shallow(<Favicons />);
    expect(element.exists()).toBe(true);
    expect(element.getElement()).not.toBe(null);
  });

  test('removes trailing slash from faviconPath', () => {
    const element = shallow(<Favicons faviconPath="/with/trailing/slash/" />);
    const firstLinkEl = element.find('link').first();
    expect(firstLinkEl.props().href).toBe('/with/trailing/slash/apple-touch-icon-180x180.png');
  });
});
