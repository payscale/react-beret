import React from 'react';
import { mount } from 'enzyme';
import Gtm from '../components/Gtm';

describe('Gtm', () => {
  test('exists and is not null', () => {
    const element = mount(<Gtm />);
    expect(element.exists()).toBe(true);
    expect(element.getElement()).not.toBe(null);
  });

  test('contains containerId', () => {
    const gtm = mount(<Gtm containerId="test12345" />);
    expect(gtm.html().indexOf(`test12345`) > -1).toBe(true);
  });
});
