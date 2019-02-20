import React from 'react';
import PropTypes from 'prop-types';

// Google Ads Marketing (DoubleClick)
const Ads = ({ slots }) => {
  const adStrings = (slots || []).map(
    slot =>
      `googletag.defineSlot('/${slot.networkCode}/${slot.name}', [${slot.width}, ${slot.height}], '${
        slot.elementId
      }').addService(googletag.pubads());`
  );

  return (
    <React.Fragment>
      <script 
        dangerouslySetInnerHTML={{
          __html: `var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function () {
  var gads = document.createElement('script');
  gads.async = true;
  gads.type = 'text/javascript';
  var useSSL = 'https:' == document.location.protocol;
  gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
  var node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(gads, node);
})();`
        }}
      />
      <script crossOrigin="anonymous"
        dangerouslySetInnerHTML={{
          __html: `googletag.cmd.push(function () {
  if (hasAcceptedCookiePolicy()) {
    ${adStrings.join()}
  }
  googletag.pubads().enableSingleRequest();
  googletag.pubads().collapseEmptyDivs();
  googletag.enableServices();
});`
        }}
      />
    </React.Fragment>
  );
};

Ads.propTypes = {
  slots: PropTypes.arrayOf(
    PropTypes.shape({
      networkCode: PropTypes.string,
      name: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      elementId: PropTypes.string
    })
  )
};

export default Ads;
