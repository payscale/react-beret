import React from 'react';
import PropTypes from 'prop-types';

// Google Tag Manager (noscript)
const GtmNoScript = ({ containerId }) => (
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${containerId}`}
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
);

GtmNoScript.propTypes = {
  /** The GTM container id */
  containerId: PropTypes.string
};

export default GtmNoScript;
