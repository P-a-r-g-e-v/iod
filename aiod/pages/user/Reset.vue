<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card border-0 pb-5" id="modal-view-background">
    <div class="border-0 pb-0 px-md-5 px-4 d-block position-relative">
      <h3 class="mt-4 mb-5 text-center">New password</h3>
    </div>
    <div class="px-md-5 px-4">
      <form @submit.prevent="userPassword" class="needs-validation  pt-lg-5" novalidate>
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
        <div
          v-if="success"
          class="
            p-2
            mb-4
            text-sm text-success
            bg-secondary
            rounded-3
          "
          role="alert"
          >
            Your account has been updated successfully, you can now
            <NuxtLink class="font-medium" to="/user/login">Login</NuxtLink>
          </div>
          <div class="mb-4">
            <label class="form-label-lg" for="password">Password</label>
            <input v-model="password" class="form-control" type="password" id="signup-password" placeholder="******">
          </div>
        <button class="btn btn-primary w-100" type="submit">New password</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Reset',
  layout: 'LoginLayout',
  auth: 'guest',
  data() {
      return {
      success: false,
      err: null,
      password: '',
      passwordConfirmation: '',
      }
  },
  methods: {
    async userPassword() {
    try {
        await this.$axios.post('auth/reset-password', {
        code: this.$route.query.code,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
        })

        this.success = true
    } catch (e) {
        if (e.response) this.err = e.response.data.error.message
    }
    },
  }
}
</script>

<style scoped>

</style>
