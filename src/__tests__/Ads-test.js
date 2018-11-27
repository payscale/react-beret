import React from 'react';
import { mount } from 'enzyme';
import Helmet from 'react-helmet';
import Ads from '../lib/Ads';

describe('Ads', () => {
  test('exists and is not null', () => {
    const element = mount(<Ads />);
    expect(element.exists()).toBe(true);
    expect(element.getElement()).not.toBe(null);
  });

  test('contains ad slot scripts when given', () => {
    const slots = [
      {
        networkCode: '123456',
        name: 'Test_100x100',
        width: 100,
        height: 100,
        elementId: 'testAd'
      }
    ];
    mount(<Ads slots={slots} />);
    const helmet = Helmet.peek();
    expect(helmet.scriptTags.some(tag => tag.innerHTML.indexOf(
      `googletag.defineSlot('/123456/Test_100x100', [100, 100], 'testAd').addService(googletag.pubads());`
    ) > -1)).toBe(true);
  });
});
