import React from 'react';
import { mount } from 'enzyme';
import Helmet from 'react-helmet';
import Gtm from '../lib/Gtm';

describe('Gtm', () => {
  test('exists and is not null', () => {
    const element = mount(<Gtm />);
    expect(element.exists()).toBe(true);
    expect(element.getElement()).not.toBe(null);
  });

  test('contains containerId', () => {
    mount(<Gtm containerId="test12345" />);
    const helmet = Helmet.peek();
    expect(helmet.scriptTags.some(tag => tag.innerHTML.indexOf(`test12345`) > -1)).toBe(true);
  });
});
