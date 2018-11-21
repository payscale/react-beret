import React from 'react';
import { shallow } from 'enzyme';
import Gtm from '../lib/Gtm';

describe('Gtm', () => {
  test('exists and is not null', () => {
    const element = shallow(<Gtm />);
    expect(element.exists()).toBe(true);
    expect(element.getElement()).not.toBe(null);
  });

  test('contains containerId', () => {
    const element = shallow(<Gtm containerId="test12345" />);
    expect(element.html()).toMatch(`test12345`);
  });
});
