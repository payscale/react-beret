export const exportCookieFuncsToWindow = () => {
  if (window && window.hasAcceptedCookiePolicy) {
    return;
  }

  Object.assign(window, {
    hasAcceptedCookiePolicy,
    createNecessaryCookie,
    createCookie,
    readCookie,
    eraseCookie
  });
};

export const hasAcceptedCookiePolicy = () => {
  const acceptCookie = readCookie('accept-cookie');
  const originCookie = readCookie('client-origin');

  if (acceptCookie === 'yes' || acceptCookie === 'na') {
    return true;
  } else if (originCookie === 'non-eu') {
    createNecessaryCookie('accept-cookie', 'na', '.payscale.com', 365);
    return true;
  }
  return false;
};

export const createNecessaryCookie = (name, value, domain, days) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toGMTString()}`;
  }

  const cookie = domain ? `${name}=${value}${expires}; domain=${domain}; path=/` : `${name}=${value}${expires}; path=/`;

  document.cookie = cookie;
};

export const createCookie = (name, value, domain, days) => {
  const accepted = hasAcceptedCookiePolicy();

  if (accepted || days === -1) {
    createNecessaryCookie(name, value, domain, days);
  }
};

export const readCookie = name => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};

export const eraseCookie = (name, domainName) => {
  if (domainName) {
    createCookie(name, '', domainName, -1);
  } else {
    const domain = document.domain;
    const domainParts = domain.split('.');
    for (let i = 0; i < domainParts.length; i++) {
      const constructedDomain = domainParts.slice(i).join('.');
      createCookie(name, '', constructedDomain, -1);
      createCookie(name, '', `.${constructedDomain}`, -1);
    }
  }
};
