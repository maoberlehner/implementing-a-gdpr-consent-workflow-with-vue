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
      class="CookieBar"
    >
      <p>
        Please give us your consent to use cookies, thanks!
      </p>
      <button @click="grantConsent">
        {{ loading ? `Loading ...` : `Accept` }}
      </button>
      <p
        v-if="error"
        class="error"
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

<style lang="scss">
@import '../assets/scss/settings/**/*';

.CookieBar {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: setting-spacing(m);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
}
</style>
