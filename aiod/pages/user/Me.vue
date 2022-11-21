<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>

  <div class="mw-75 w-auto mx-auto mt-4 text-center" id="modal-view-background">
      <h1 class="fs-1 fw-bold mb-4 text-white">Profile details</h1>
      <p class="fs-5 mx-1 text-center text-success">
        You are now signed in. Browse through website freely.
      </p>
      <form @submit.prevent="userLogin">
        <div class="mb-4">
          <label
            for="email"
            class="
              text-white
              mb-2
            "
            >Your email</label
          >
          <input
            type="email"
            class="
              text-center
              text-success
              mb-4
              bg-profile
              border border-secondary
              rounded-3
              w-auto
              p-2
            "
            :value="loggedInUser.email"
            disabled
          />
        </div>

        <div class="mb-4">
          <label
            for="username"
            class="
              mb-2
              text-white
            "
            >Your username</label
          >
          <input
            type="text"
            class="
              text-center
              text-success
              me-4
              mb-4
              bg-profile
              border border-secondary
              rounded-3
              w-auto
              p-2
            "
            :value="loggedInUser.username"
            disabled
          />
        </div>
      </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
    // eslint-disable-next-line vue/multi-word-component-names
  name: 'Me',
  layout: 'LoginLayout',
  middleware: 'auth',
  computed: {
    ...mapGetters(['loggedInUser']),
  },
}
</script>

<style scoped>


</style>
