import React from 'react';
import { shallow } from 'enzyme';
import WebFont from '../components/WebFont';

describe('WebFont', () => {
  test('returns null element if no font families given', () => {
    const element = shallow(<WebFont families={[]} />);
    expect(element.getElement()).toBe(null);
  });

  test('contains font family strings', () => {
    const element = shallow(
      <WebFont
        families={[
          {
            fontName: 'Roboto',
            weights: [300, 500, 700]
          }
        ]}
      />
    );
    expect(element.html()).toMatch(`["Roboto:300,500,700"]`);
  });
});
