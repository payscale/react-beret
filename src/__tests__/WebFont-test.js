import React from 'react';
import { shallow, mount } from 'enzyme';
import Helmet from 'react-helmet';
import WebFont from '../lib/WebFont';

describe('WebFont', () => {
  test('returns null element if no font families given', () => {
    const element = shallow(<WebFont families={[]} />);
    expect(element.getElement()).toBe(null);
  });

  test('contains font family strings', () => {
    mount(
      <WebFont
        families={[
          {
            fontName: 'Roboto',
            weights: [300, 500, 700]
          }
        ]}
      />
    );
    const helmet = Helmet.peek();
    expect(helmet.scriptTags.some(tag => tag.innerHTML.indexOf(`["Roboto:300,500,700"]`) > -1)).toBe(true);
  });
});
