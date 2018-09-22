export const fakeDb = {
  consentGranted: false,
  simulateError: false,
  timeout: 500,
};

// This is a fake API implementation. In a real world application, this
// would be the place to use XHR or axios to make calls to your API.
export default {
  checkConsent() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!fakeDb.error) {
          resolve(fakeDb.consentGranted);
        } else {
          reject(new Error(`Server error`));
        }
      }, fakeDb.timeout);
    });
  },
  grantConsent() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!fakeDb.error) {
          fakeDb.consentGranted = true;
          resolve(fakeDb.consentGranted);
        } else {
          reject(new Error(`Server error`));
        }
      }, fakeDb.timeout);
    });
  },
};
