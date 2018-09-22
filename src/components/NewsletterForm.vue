<template>
  <gdpr-consent-frame :provider="gdprApiProvider">
    <div
      slot-scope="{
        askForConsent,
        checkConsent,
        consentDenied,
        denyConsent,
        error,
        grantConsent,
        loading,
      }"
    >
      <template v-if="subscribed">
        <p class="text-green">
          Thank you for subscribing!
        </p>
      </template>
      <template v-else>
        <h3 class="mb-2">Subscribe to our Newsletter!</h3>
        <input
          type="mail"
          class="
            shadow
            appearance-none
            border
            rounded
            py-2
            px-3
            text-grey-darker
            leading-tight
            focus:outline-none
            focus:shadow-outline
          "
        >
        <button
          class="
            ml-2
            bg-blue
            hover:bg-blue-dark
            text-white
            font-bold
            py-2
            px-4
            rounded
            focus:outline-none
            focus:shadow-outline
          "
          @click="checkConsent({ grantedCallback: subscribe })"
        >
          {{ loading ? `Loading ...` : `Subscribe` }}
        </button>
        <p
          v-if="consentDenied"
          class="mt-2 text-red"
        >
          Please give us your consent, thanks!
        </p>
        <p
          v-if="error"
          class="mt-2 text-red"
        >
          There was an error, please try again!
        </p>
      </template>

      <gdpr-consent-modal
        v-if="askForConsent"
        @deny-consent="denyConsent"
        @grant-consent="grantConsent({ grantedCallback: subscribe })"
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
      subscribed: false,
    };
  },
  created() {
    this.gdprApiProvider = gdprApiProvider;
  },
  methods: {
    subscribe() {
      // In a real application, you'd most likely trigger an API request here.
      this.subscribed = true;
    },
  },
};
</script>
