import React from 'react';
import PropTypes from 'prop-types';

const Favicons = ({ favicons }) => {
  if (!favicons || !favicons.length) {
    return null;
  }

  return (
    <React.Fragment>
      {favicons.map(favicon => (
        <link
          rel={favicon.rel || 'icon'}
          href={favicon.href}
          sizes={favicon.sizes}
          type={favicon.type}
        />)
      )}
    </React.Fragment>
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
