<template>
  <gdpr-consent-frame
    :provider="gdprApiProvider"
    @request-consent="showConsentModal = true"
    @consent-denied="showConsentModal = false"
    @consent-granted="subscribe"
  >
    <div
      slot-scope="{
        checkConsent,
        denyConsent,
        error,
        grantConsent,
        loading,
      }"
      class="o-vertical-spacing"
    >
      <template v-if="subscribed">
        <p class="success">
          Thank you for subscribing!
        </p>
      </template>
      <template v-else>
        <h3>Subscribe to our Newsletter!</h3>
        <input type="email">
        <button @click="checkConsent">
          {{ loading ? `Loading ...` : `Subscribe` }}
        </button>
        <p
          v-if="error"
          class="error"
        >
          There was an error, please try again!
        </p>
      </template>

      <gdpr-consent-modal
        v-if="showConsentModal"
        @deny-consent="denyConsent"
        @grant-consent="grantConsent"
      />
    </div>
  </gdpr-consent-frame>
</template>

<script>
import gdprApiProvider from '../providers/gdpr-api-provider';

import GdprConsentFrame from './GdprConsentFrame';
import GdprConsentModal from './GdprConsentModal.vue';

export default {
  name: `NewsletterForm`,
  components: {
    GdprConsentFrame,
    GdprConsentModal,
  },
  data() {
    return {
      showConsentModal: false,
      subscribed: false,
    };
  },
  created() {
    this.gdprApiProvider = gdprApiProvider;
  },
  methods: {
    subscribe() {
      // We hide the modal because the user must
      // have given their consent at this point.
      this.showConsentModal = false;
      // In a real application, you'd most
      // likely trigger an API request here.
      this.subscribed = true;
    },
  },
};
</script>
