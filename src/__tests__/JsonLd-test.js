import React from 'react';
import { mount } from 'enzyme';
import JsonLd from '../components/JsonLd';

describe('JsonLd', () => {
  test('exists and is not null', () => {
    const element = mount(<JsonLd />);
    expect(element.exists()).toBe(true);
    expect(element.getElement()).not.toBe(null);
  });

  test('contains jsonLd scripts', () => {
    const jsonLd = mount(<JsonLd jsonLdObjects={[{ '@type': 'Organization', '@context': 'http://schema.org/', 'name': 'PayScale' }, { '@type': 'EmployerAggregateRating', '@context': 'http://schema.org/', 'ratingValue': 10 }]} />);
    expect(jsonLd.children().first().type()).toBe('script');
  });

  test('doesnt render null jsonLd script', () => {
    const jsonLd = mount(<JsonLd jsonLdObjects={[{ '@type': 'Organization', '@context': 'http://schema.org/', 'name': 'PayScale' }, null]}></JsonLd>);
    expect(jsonLd.children().length).toBe(1);
  })
});
