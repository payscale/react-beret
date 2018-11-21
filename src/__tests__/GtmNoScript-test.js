import React from 'react';
import { shallow } from 'enzyme';
import GtmNoScript from '../components/GtmNoScript';

describe('GtmNoScript', () => {
  test('exists and is not null', () => {
    const element = shallow(<GtmNoScript />);
    expect(element.exists()).toBe(true);
    expect(element.getElement()).not.toBe(null);
  });

  test('contains containerId', () => {
    const element = shallow(<GtmNoScript containerId="test12345" />);
    expect(element.html()).toMatch(`test12345`);
  });
});
