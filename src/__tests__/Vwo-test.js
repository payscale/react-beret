import React from 'react';
import { shallow } from 'enzyme';
import Vwo from '../lib/Vwo';

describe('Vwo', () => {
  test('exists and is not null', () => {
    const element = shallow(<Vwo />);
    expect(element.exists()).toBe(true);
    expect(element.getElement()).not.toBe(null);
  });

  test('contains accountId', () => {
    const element = shallow(<Vwo accountId="test12345" />);
    expect(element.html()).toMatch(`test12345`);
  });
});
