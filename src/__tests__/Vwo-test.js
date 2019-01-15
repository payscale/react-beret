import React from 'react';
import { mount } from 'enzyme';
import Helmet from 'react-helmet';
import Vwo from '../components/Vwo';

describe('Vwo', () => {
  test('exists and is not null', () => {
    const element = mount(<Vwo />);
    expect(element.exists()).toBe(true);
    expect(element.getElement()).not.toBe(null);
  });

  test('contains accountId', () => {
    mount(<Vwo accountId="test12345" />);
    const helmet = Helmet.peek();
    expect(helmet.scriptTags.some(tag => tag.innerHTML.indexOf(`test12345`) > -1)).toBe(true);
  });
});
