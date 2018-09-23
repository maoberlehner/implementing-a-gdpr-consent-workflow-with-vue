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
      error: null,
      loading: false,
    };
  },
  created() {
    if (this.immediate) this.checkConsent();
  },
  methods: {
    async checkConsent() {
      try {
        this.setLoadingState();
        const consentGranted = await this.provider.checkConsent();

        if (consentGranted) {
          // If a consent was found, we emit
          // the corresponding event.
          this.$emit(`consent-granted`);
        } else {
          // If no consent was found, we wan't
          // to ask the user for their consent.
          this.$emit(`request-consent`);
        }
        // Reset the loading state after everything is done.
        this.loading = false;
      } catch (error) {
        this.setErrorState(error);
      }
    },
    async denyConsent() {
      // We don't want to persist the information if a user
      // hasn't given their consent, so we emit the event
      // to signal that the user has denied their consent.
      this.$emit(`consent-denied`);
    },
    async grantConsent() {
      try {
        this.setLoadingState();
        const consentGranted = await this.provider.grantConsent();

        if (consentGranted) {
          this.$emit(`consent-granted`);
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
      error: this.error,
      loading: this.loading,
      // Methods
      checkConsent: this.checkConsent,
      denyConsent: this.denyConsent,
      grantConsent: this.grantConsent,
    });
  },
};
