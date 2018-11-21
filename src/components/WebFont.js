import React from 'react';
import PropTypes from 'prop-types';

const WebFont = ({ families }) => {
  if (!families || !families.length) {
    return null;
  }

  const familyStrings = families.map(family => `${family.fontName}:${family.weights.join(',')}`);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `WebFontConfig = {
  google: { families: ${JSON.stringify(familyStrings)} }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
  '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();`
      }}
    />
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

export default WebFont;