export default {
  props: {
    immediate: {
      default: false,
      type: Boolean,
    },
    provider: {
      type: Object,
    },
  },
  data() {
    return {
      askForConsent: false,
      consentDenied: false,
      consentGranted: false,
      error: null,
      loading: false,
    };
  },
  created() {
    if (this.immediate) this.checkConsent();
  },
  methods: {
    async checkConsent({ grantedCallback } = {}) {
      try {
        this.setLoadingState();
        this.consentGranted = await this.provider.checkConsent();

        if (this.consentGranted) {
          // Reset the state if a consent was found.
          this.askForConsent = false;
          this.consentDenied = false;
          // Run the given callback function (if one was provided).
          if (grantedCallback) grantedCallback();
        } else {
          // If no consent was found, we wan't
          // to ask the user for their consent.
          this.askForConsent = true;
        }
        // Reset the loading state after everything is done.
        this.loading = false;
      } catch (error) {
        this.setErrorState(error);
      }
    },
    async denyConsent({ deniedCallback } = {}) {
      // We don't want to persist the information if a user
      // hasn't given their consent, so we simply set the state
      // to signal that the user has denied their consent.
      this.askForConsent = false;
      this.consentDenied = true;
      // If one is given, we run the callback function.
      if (deniedCallback) deniedCallback();
    },
    async grantConsent({ grantedCallback } = {}) {
      try {
        this.setLoadingState();
        this.consentGranted = await this.provider.grantConsent();

        if (this.consentGranted) {
          // Reset the state if consent was granted.
          this.askForConsent = false;
          this.consentDenied = false;
          // If one is given, we run the callback function.
          if (grantedCallback) grantedCallback();
        }
        // Reset the loading state after everything is done.
        this.loading = false;
      } catch (error) {
        this.setErrorState(error);
      }
    },
    setErrorState(error) {
      this.error = error;
      this.loading = false;
    },
    setLoadingState() {
      this.error = null;
      this.loading = true;
    },
  },
  render() {
    return this.$scopedSlots.default({
      // Data
      askForConsent: this.askForConsent,
      consentDenied: this.consentDenied,
      consentGranted: this.consentGranted,
      error: this.error,
      loading: this.loading,
      // Methods
      checkConsent: this.checkConsent,
      denyConsent: this.denyConsent,
      grantConsent: this.grantConsent,
    });
  },
};
