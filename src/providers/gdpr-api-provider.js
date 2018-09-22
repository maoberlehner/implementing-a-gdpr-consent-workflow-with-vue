import gdprApi from '../services/gdpr-api';

export default {
  checkConsent() {
    return gdprApi.checkConsent();
  },
  grantConsent() {
    return gdprApi.grantConsent();
  },
};
