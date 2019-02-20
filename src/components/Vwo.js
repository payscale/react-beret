import React from 'react';
import PropTypes from 'prop-types';

// Visual Web Optimizer (VWO) (A/B testing)
const Vwo = ({ accountId, shouldLoadVwoFuncName }) => (
  <script crossOrigin="anonymous"
    dangerouslySetInnerHTML={{
      __html: `
if (typeof window.${shouldLoadVwoFuncName} === 'function' && ${shouldLoadVwoFuncName}()) {
  var _vwo_code=(function(){
    var account_id='${accountId}',
    settings_tolerance=2000,
    library_tolerance=2500,
    use_existing_jquery=false,
    f=false,d=document;return{use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){settings_timer=setTimeout('_vwo_code.finish()',settings_tolerance);var a=d.createElement('style'),b='body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);this.load('//dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&r='+Math.random());return settings_timer;}};}());
  _vwo_settings_timer=_vwo_code.init();
}`
    }}
  />
);

Vwo.propTypes = {
  /** The VWO account id */
  accountId: PropTypes.string,
  /** The name of the function that checks if VWO should load.
   * Must exist on the window object and return a boolean. */
  shouldLoadVwoFuncName: PropTypes.string
};

Vwo.defaultProps = {
  shouldLoadVwoFuncName: 'shouldLoadVwo'
};

export default Vwo;
