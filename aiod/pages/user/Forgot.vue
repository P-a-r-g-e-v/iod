<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card border-0 pb-5" id="modal-view-background">
    <div class="border-0 pb-0 px-md-5 px-4 d-block position-relative">
      <h3 class="mt-4 mb-5 text-center">New password</h3>
    </div>
      <div class="px-md-5 px-4">
        <form @submit.prevent="userPassword" class="needs-validation pt-lg-5" novalidate>
          <div
            v-if="err"
            class="
              p-2
              mb-4
              text-sm text-danger
              bg-secondary
              rounded-3
            "
            role="alert"
          >
            {{ err }}
          </div>
          <div class="mb-4">
            <label for="email" class="form-label-lg">Your email</label>
            <input v-model="email" type="email" class="form-control" id="signup-email" placeholder="your email address" required>
          </div>
          <button class="btn btn-primary w-100" type="submit">New password</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Forgot',
  layout: 'LoginLayout',
  auth: 'guest',
  data() {
      return {
      err: null,
      email: '',
      }
  },
  methods: {
    async userPassword() {
      try {
          await this.$axios.post('auth/forgot-password', {
          email: this.email,
          })
      } catch (e) {
          if (e.response) this.err = e.response.data.error.message
      }
    },
  }
}
</script>

<style scoped>

</style>
