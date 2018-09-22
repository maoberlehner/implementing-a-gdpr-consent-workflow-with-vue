<template>
  <portal to="modal">
    <div class="AppModal flex items-center justify-center fixed pin">
      <div class="relative m-4 max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
        <button
          class="absolute pin-t pin-r p-2"
          @click="$emit(`close`)"
        >
          X
        </button>

        <slot/>

        <div class="mt-4">
          <button
            class="
              mr-2
              bg-transparent
              hover:bg-blue
              text-blue-dark
              font-semibold
              hover:text-white
              py-2
              px-4
              border
              border-blue
              hover:border-transparent
              rounded
            "
            @click="$emit(`decline`)"
          >
            Decline
          </button>
          <button
            class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            @click="$emit(`accept`)"
          >
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

<style>
.AppModal {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
