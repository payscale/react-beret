import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Favicons = ({ favicons }) => {
  if (!favicons || !favicons.length) {
    return null;
  }

  return (
    <Fragment>
      {favicons.map(favicon => (
        <link
          rel={favicon.rel || 'icon'}
          href={favicon.href}
          sizes={favicon.sizes}
          type={favicon.type}
        />)
      )}
    </Fragment>
  );
};

Favicons.propTypes = {
  /** The favicon paths and rel (rel defaults to icon) */
  favicons: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      rel: PropTypes.string,
      sizes: PropTypes.string,
      type: PropTypes.string
    })
  )
};

export default Favicons;
