import React from 'react';
import { mount } from 'enzyme';
import Vwo from '../components/Vwo';

describe('Vwo', () => {
  test('exists and is not null', () => {
    const element = mount(<Vwo />);
    expect(element.exists()).toBe(true);
    expect(element.getElement()).not.toBe(null);
  });

  test('contains accountId', () => {
    const vwo = mount(<Vwo accountId="test12345" />);
    expect(vwo.html().indexOf(`test12345`) > -1).toBe(true);
  });
});
