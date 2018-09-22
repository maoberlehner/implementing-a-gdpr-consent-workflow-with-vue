<template>
  <div class="container mx-auto max-w-l p-4">
    <h1 class="text-center">GDPR Consent Workflow with Vue.js</h1>

    <section class="rounded shadow-lg mt-12 p-6">
      <h2>Demo</h2>

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

    <portal-target name="modal"/>
  </div>
</template>

<script>
import { fakeDb } from './services/gdpr-api';

import NewsletterForm from './components/NewsletterForm.vue';

export default {
  name: `App`,
  components: {
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
