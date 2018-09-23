<template>
  <gdpr-consent-frame
    :provider="gdprCookieProvider"
    immediate
    @request-consent="visible = true"
    @consent-granted="visible = false"
  >
    <div
      v-if="visible"
      slot-scope="{
        error,
        grantConsent,
        loading,
      }"
      class="CookieBar p-4 absolute pin-x pin-b"
    >
      <p class="mt-2">
        Please give us your consent to use cookies, thanks!
      </p>
      <button
        class="
          mt-2
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
        @click="grantConsent"
      >
        {{ loading ? `Loading ...` : `Accept` }}
      </button>
      <p
        v-if="error"
        class="mt-2 text-red"
      >
        There was an error, please try again!
      </p>
    </div>
  </gdpr-consent-frame>
</template>

<script>
import gdprCookieProvider from '../providers/gdpr-cookie-provider';

import GdprConsentFrame from './GdprConsentFrame';

export default {
  name: `CookieBar`,
  components: {
    GdprConsentFrame,
  },
  data() {
    return {
      visible: false,
    };
  },
  created() {
    this.gdprCookieProvider = gdprCookieProvider;
  },
};
</script>

<style>
.CookieBar {
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
}
</style>
