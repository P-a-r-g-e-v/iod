<!-- eslint-disable vue/attributes-order -->
<template>
   <!-- Sign up form -->
   <div class="card border-0 pb-5 bg-royal-grey" id="modal-view-background">
      <div class="border-0 pb-0 px-md-5 px-4 d-block position-relative">
        <h3 class="mt-4 mb-0 text-center text-white">Sign up</h3>
      </div>
      <div class="px-md-5 px-4">
        <p class="fs-sm text-muted text-center">Sign up using email and password, become a member of AIoD organisation. Start</p>
        <form @submit.prevent="userRegister" class="needs-validation" novalidate>
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
            Your account has been created successfully, you can now
            <NuxtLink class="font-medium" to="/user/login">Login</NuxtLink>
          </div>

          <div class="mb-4">
            <label for="username" class="form-label-lg text-white">User name</label>
            <input v-model="username" type="text" class="form-control" id="signup-name" placeholder="Your user name" required>
          </div>
          <div class="mb-4">
            <label for="email" class="form-label-lg text-white">Email</label>
            <input v-model="email" type="email" class="form-control" id="signup-email" placeholder="Your email address" required>
          </div>
          <div class="mb-4">
            <label class="form-label-lg  text-white" for="password">Password</label>
            <input v-model="password" class="form-control" type="password" id="signup-password" placeholder="******">
          </div>
          <button class="btn btn-primary w-100 mt-4" type="submit">Sign up</button>
          <p class="fs-sm pt-4 mb-0  text-white">Already have an account?
            <NuxtLink to="/user/login" class="fw-bold text-decoration-none">Sign in</NuxtLink>
          </p>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  layout: 'LoginLayout',
  auth: 'guest',
data() {
  return {
    success: false,
    err: null,
    username: '',
    email: '',
    password: '',
  }
},
methods: {
  async userRegister() {
    try {
      this.$axios.setToken(false)

      await this.$axios.post('auth/local/register', {
        username: this.username,
        email: this.email,
        password: this.password,
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
a {
  color: #6366f1!important;
  text-decoration: none;
}

a:hover {
  color: #4044ee!important;
}

</style>

