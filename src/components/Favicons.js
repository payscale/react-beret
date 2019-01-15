import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const Favicons = ({ favicons }) => {
  if (!favicons || !favicons.length) {
    return null;
  }

  return (
    <Helmet>
      {favicons.map(favicon => (
        <link
          key={favicon.href}
          rel={favicon.rel || 'icon'}
          href={favicon.href}
          sizes={favicon.sizes}
          type={favicon.type}
        />)
      )}
    </Helmet>
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
