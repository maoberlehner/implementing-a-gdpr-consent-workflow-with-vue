<template>
  <div class="container mx-auto max-w-l p-4">
    <h1 class="text-center">GDPR Consent Workflow with Vue.js</h1>

    <section class="rounded shadow-lg mt-12 p-6">
      <h2>Example 1: Newsletter form</h2>

      <div class="newsletter-demo mt-4 p-6">
        <newsletter-form/>
      </div>

      <h3 class="mt-6">Fake API response settings</h3>
      <p class="mt-2">
        Configure the response of the fake GDPR API. The example above does not make real API
        requests, instead you can use the configuration options below to simulate the behavior
        of the fake API which is used for this demo.
      </p>

      <label class="block mt-4">
        <input
          v-model="fakeDb.consentGranted"
          type="checkbox"
        >
        <span class="ml-2 text-grey-darker text-sm font-bold">Consent granted</span>
      </label>

      <label class="block mt-4">
        <input
          v-model="fakeDb.error"
          type="checkbox"
        >
        <span class="ml-2 text-grey-darker text-sm font-bold">Simulate error</span>
      </label>

      <label class="block mt-4">
        <span class="block text-grey-darker text-sm font-bold">Response time</span>
        <input
          v-model="fakeDb.timeout"
          class="
            mt-2
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
      </label>
    </section>

    <section class="relative rounded shadow-lg mt-12 p-6">
      <h2>Example 2: Cookie bar</h2>

      <p class="mt-2">
        This is an example implementation of the EU cookie
        bar we've all learned to love in recent years.
      </p>

      <p class="mt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
      </p>

      <p class="mt-2">
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

<style>
.newsletter-demo {
  background: #efefefef;
}
</style>
