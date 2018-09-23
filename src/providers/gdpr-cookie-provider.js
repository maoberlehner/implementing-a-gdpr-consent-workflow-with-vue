import Cookies from 'js-cookie';

const COOKIE_NAME = `eu_cookie`;

export default {
  checkConsent() {
    return Cookies.get(COOKIE_NAME);
  },
  grantConsent() {
    Cookies.set(COOKIE_NAME, true, { expires: 30 });

    return true;
  },
};
