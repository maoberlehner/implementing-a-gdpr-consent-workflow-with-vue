<template>
  <app-modal
    @accept="$emit(`grant-consent`)"
    @close="$emit(`deny-consent`)"
    @decline="$emit(`deny-consent`)"
  >
    <h1>GDPR Informations</h1>
    <p class="mt-2">
      We want to do a lot of stuff with your data, please
      give us your consent to do so, thank you very much!
    </p>
  </app-modal>
</template>

<script>
import AppModal from './AppModal.vue';

export default {
  name: `GdprConsentModal`,
  components: {
    AppModal,
  },
};
</script>
