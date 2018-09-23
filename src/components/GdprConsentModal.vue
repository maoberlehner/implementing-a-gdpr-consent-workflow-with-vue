<template>
  <app-modal
    @accept="$emit(`grant-consent`)"
    @close="$emit(`deny-consent`)"
    @decline="$emit(`deny-consent`)"
  >
    <div class="o-content">
      <h2>GDPR Informations</h2>
      <p>
        We want to do a lot of stuff with your data, please
        give us your consent to do so, thank you very much!
      </p>
    </div>
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
