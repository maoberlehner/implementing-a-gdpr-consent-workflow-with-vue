<template>
  <div class="App o-container o-vertical-spacing o-vertical-spacing--xl">
    <h1>GDPR Consent Workflow with Vue.js</h1>

    <section class="App__example o-vertical-spacing o-vertical-spacing--l">
      <h2>Example 1: Newsletter form</h2>

      <div class="App__newsletter-demo">
        <newsletter-form/>
      </div>

      <div class="o-vertical-spacing o-vertical-spacing--l">
        <div class="o-content">
          <h3>Fake API response settings</h3>
          <p>
            Configure the response of the fake GDPR API. The example above does not make real API
            requests, instead you can use the configuration options below to simulate the behavior
            of the fake API which is used for this demo.
          </p>
        </div>

        <div class="o-vertical-spacing">
          <label>
            <input
              v-model="fakeDb.consentGranted"
              type="checkbox"
            >
            Consent granted
          </label>

          <label>
            <input
              v-model="fakeDb.error"
              type="checkbox"
            >
            Simulate error
          </label>

          <label>
            Response time
            <input v-model="fakeDb.timeout">
          </label>
        </div>
      </div>
    </section>

    <section class="App__example o-content">
      <h2>Example 2: Cookie bar</h2>

      <p>
        This is an example implementation of the EU cookie
        bar we've all learned to love in recent years.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
      </p>

      <p>
        Et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
      </p>

      <cookie-bar/>
    </section>

    <portal-target name="modal"/>
  </div>
</template>

<script>
import { fakeDb } from './services/gdpr-api';

import CookieBar from './components/CookieBar.vue';
import NewsletterForm from './components/NewsletterForm.vue';

export default {
  name: `App`,
  components: {
    CookieBar,
    NewsletterForm,
  },
  data() {
    return {
      fakeDb,
    };
  },
};
</script>

<style lang="scss">
@import './assets/scss/settings/**/*';
@import './assets/scss/generic/**/*';
@import '{
  .o-container,
  .o-container--s,
} from ~@avalanche/object-container';
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--l,
  .o-vertical-spacing--xl,
} from ~@avalanche/object-vertical-spacing';
@import './assets/scss/objects/**/*';

.App {
  padding-top: setting-spacing(xl);
  padding-bottom: setting-spacing(xl);

  h1 {
    text-align: center;
  }

  input:not([type="checkbox"]) {
    display: block;
    padding: setting-spacing(s);
    width: 100%;
    border: 1px solid #dedede;
  }

  label {
    display: block;
    color: #444;
    font-weight: 700;
  }

  &__example {
    position: relative;
    padding: setting-spacing(l);
    overflow: hidden;
    border-radius: 0.25em;
    box-shadow: 0 0.35em 1em rgba(#000, 0.2);
  }

  &__newsletter-demo {
    padding: setting-spacing(m);
    background: #efefefef;
  }
}

.error {
  color: red;
}

.success {
  color: green;
}
</style>
