import Cookies from 'js-cookie';

export default {
  checkConsent() {
    return Cookies.get(`eu_cookie`);
  },
  grantConsent() {
    Cookies.set(`eu_cookie`, true, { expires: 30 });

    return true;
  },
};
