import React from 'react';
import PropTypes from 'prop-types';

// JSON LD Schema (https://json-ld.org/ and https://schema.org/)
const JsonLd = ({ jsonLdObjects }) => {
  if (!jsonLdObjects || jsonLdObjects.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      {jsonLdObjects.map((obj, id) => (
        <script
          type="application/ld+json"
          key={`jsonld-${id}`}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </React.Fragment>
  );
};

JsonLd.propTypes = {
  /** An array of jsonLd schema objects */
  jsonLdObjects: PropTypes.array
};

export default JsonLd;
