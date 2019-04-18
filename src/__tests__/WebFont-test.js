import React from 'react';
import { shallow, mount } from 'enzyme';
import WebFont from '../components/WebFont';

describe('WebFont', () => {
  test('returns null element if no font families given', () => {
    const element = shallow(<WebFont families={[]} />);
    expect(element.getElement()).toBe(null);
  });

  test('contains font family strings', () => {
    const webfont = mount(
      <WebFont
        families={[
          {
            fontName: 'Roboto',
            weights: [300, 500, 700]
          }
        ]}
      />
    );
    expect(webfont.html().indexOf(`loadFont('https://fonts.googleapis.com/css?family=Roboto:300,500,700')`) > -1).toBe(true);
    expect(webfont.html().indexOf(`font-display: swap`) > -1).toBe(true);
  });
});
