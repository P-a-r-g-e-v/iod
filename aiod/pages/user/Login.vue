<!-- eslint-disable vue/attributes-order -->
<template>
  <!-- Sign in form -->

  <div class="card border-0 pb-5 bg-royal-black" id="modal-view-background">
    <div class="border-0 pb-0 px-md-5 px-4 d-block position-relative">
      <h3 class="mt-4 mb-0 text-center text-white">Sign in</h3>
    </div>
    <div class="px-md-5 px-4">
      <p class="fs-sm text-muted text-center">Sign in to your account using email and password provided during registration.</p>
      <form class="needs-validation" @submit.prevent="userLogin" novalidate>
        <div
        v-if="err"
        class="
          p-2
          mb-4
          text-sm text-danger
          bg-custom
          rounded-3
          text-center
        "
        role="alert"
      >
        {{ err }}
      </div>
        <div class="mb-4">
          <label for="email" class="form-label-lg text-white">Email</label>
          <input v-model="email" type="email" class="form-control" id="signin-email" placeholder="Your email address">
        </div>
        <div class="mb-4">
          <label class="form-label-lg text-white" for="password">Password</label>
            <input class="form-control" type="password" v-model="password" id="password" placeholder="******">
        </div>
        <div class="d-flex justify-content-between align-items-center mb-4">
          <NuxtLink to="/user/reset" class="fs-sm text-decoration-none l-reset">Reset password?</NuxtLink>
          <NuxtLink to="/user/forgot" class="fs-sm text-decoration-none l-forgot">Forgot password?</NuxtLink>
        </div>
        <button type="submit" class="btn btn-primary w-100">Sign in</button>
        <p class="fs-sm pt-4 mb-0 text-white">
          Don't have an account?
          <NuxtLink to="/user/register" class="fw-bold text-decoration-none text-success">Sign up</NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>



<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  layout: 'LoginLayout',
  auth: 'guest',
  data() {
    return {
      err: null,
      email: '',
      password: '',
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', {
          data: { identifier: this.email, password: this.password },
        })
      } catch (e) {
        if (e.response) this.err = e.response.data.error.message
      }
    },
  },
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

.l-reset {
  color: #cc0000!important;
}

.l-forgot {
  color: #00b7e1!important;
}

</style>
