import React from 'react';
import { shallow } from 'enzyme';
import Ads from '../components/Ads';

describe('Ads', () => {
  test('exists and is not null', () => {
    const element = shallow(<Ads />);
    expect(element.exists()).toBe(true);
    expect(element.getElement()).not.toBe(null);
  });

  test('returns ad scripts even when no ad slots are defined', () => {
    const element = shallow(<Ads />);
    expect(element.find('script').length).toBe(2);
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
    const element = shallow(<Ads slots={slots} />);
    const slotScriptEl = element.find('script').at(1);
    expect(slotScriptEl.html()).toMatch(
      `googletag.defineSlot('/123456/Test_100x100', [100, 100], 'testAd').addService(googletag.pubads());`
    );
  });
});
