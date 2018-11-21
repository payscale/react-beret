import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Favicons = ({ faviconPath }) => {
  // Remove trailing slash
  const path = faviconPath.replace(/\/+$/, '');

  return (
    <Fragment>
      <link rel="apple-touch-icon" href={`${path}/apple-touch-icon-180x180.png`} />
      <link rel="icon" type="image/png" href={`${path}/favicon-32x32.png`} sizes="32x32" />
      <link rel="icon" type="image/png" href={`${path}/android-chrome-192x192.png`} sizes="192x192" />
      <link rel="icon" type="image/png" href={`${path}/favicon-96x96.png`} sizes="96x96" />
      <link rel="icon" type="image/png" href={`${path}/favicon-16x16.png`} sizes="16x16" />
    </Fragment>
  );
};

Favicons.propTypes = {
  /** The url path to PayScale favicon images */
  faviconPath: PropTypes.string
};

Favicons.defaultProps = {
  faviconPath: 'https://cdn-payscale.com/images/favicon'
};

export default Favicons;
