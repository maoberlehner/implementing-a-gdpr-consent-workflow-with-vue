<template>
  <portal to="modal">
    <div class="AppModal">
      <div class="AppModal__inner">
        <button
          class="AppModal__close"
          @click="$emit(`close`)"
        >
          X
        </button>

        <slot/>

        <div class="AppModal__actions">
          <button @click="$emit(`decline`)" >
            Decline
          </button>
          <button @click="$emit(`accept`)">
            Accept
          </button>
        </div>
      </div>
    </div>
  </portal>
</template>

<script>
// Naive, not accesible (!) modal implementation.
// Don't use this in production!
export default {
  name: `AppModal`,
};
</script>

<style lang="scss">
@import '../assets/scss/settings/**/*';

.AppModal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  &__inner {
    position: relative;
    margin: setting-spacing(l);
    padding: setting-spacing(l);
    max-width: 32em;
    border-radius: 0.25em;
    box-shadow: 0 0.35em 1em rgba(#000, 0.2);
    background-color: #fff;
  }

  &__close {
    position: absolute;
    top: 0;
    right: 0;
    padding: setting-spacing(s, true);
    border: none;
    background-color: transparent;
    font-size: 1.25em;
    font-weight: 700;
  }

  &__actions {
    margin-top: setting-spacing(m);
    display: flex;
    justify-content: flex-end;

    > :not(:first-child) {
      margin-left: setting-spacing(s);
    }
  }
}
</style>
