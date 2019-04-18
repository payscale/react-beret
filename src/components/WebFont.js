import React from 'react';
import PropTypes from 'prop-types';

const WebFont = ({ families }) => {
  if (!families || !families.length) {
    return null;
  }

  const familyStrings = families.map(family => `${family.fontName}:${family.weights.join(',')}`).join('|');

  /** We download the @font-faces and then insert 'font-display: swap' so that text doesn't flash as we load the page. FOUT instead of FOIT. */
  return (
  <script async crossOrigin="anonymous" type="text/javascript" dangerouslySetInnerHTML={{__html: `
    const loadFont = (url) => {
      // the 'fetch' equivalent has caching issues
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          let css = xhr.responseText;
          css = css.replace(/}/g, 'font-display: swap; }');
    
          const head = document.getElementsByTagName('head')[0];
          const style = document.createElement('style');
          style.appendChild(document.createTextNode(css));
          head.appendChild(style);
        }
      };
      xhr.send();
    }
    
    loadFont('https://fonts.googleapis.com/css?family=${familyStrings}');
  `}} />
  );
};

WebFont.propTypes = {
  families: PropTypes.arrayOf(
    PropTypes.shape({
      fontName: PropTypes.string,
      weights: PropTypes.arrayOf(PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]))
    })
  )
};

WebFont.defaultProps = {
  families: [{ fontName: 'Roboto', weights: [300, 400, 700, 900] }]
};

export default WebFont;
