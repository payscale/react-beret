import React from 'react';
import Helmet from 'react-helmet';
import { Ads, Favicons, Gtm, WebFont } from '../src/components';

const App = () => (
  <div className="example-app" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '32px' }}>
    Inspect this page to see beret's rendered elements.
    <Helmet>
      <Ads
        slots={[{
          networkCode: '123456',
          name: 'Test_100x100',
          width: 100,
          height: 100,
          elementId: 'testAd'
        }]}
      />
      <Favicons
        favicons={[{
          href: 'favicon-96x96.png',
          sizes: '96x96',
          type: 'image/png'
        }]}
      />
      <Gtm containerId="abc123" />
      <WebFont
        families={[{ fontName: 'Roboto', weights: [300, 400, 700, 900] }]}
      />
    </Helmet>
  </div>
);

export default App;