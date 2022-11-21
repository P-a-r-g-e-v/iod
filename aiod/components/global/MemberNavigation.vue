<template>
  <div class="pt-6 py-4 px-4 bg-royal-grey text-center">
    <a class="p-2 btn btn-sm btn-primary" href="/">Home page</a>
    <a
      v-if="isAuthenticated"
      class="text-white p-2 btn btn-sm btn-danger ms-3"
      href="/logout"
      @click.prevent="userLogout"
      >Logout</a
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MemberNavigation',
  layout: 'default',
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  methods: {
    async userLogout() {
      await this.$auth.logout()
    },
  },
}
</script>

<style scoped>
.btn-profile {
  background-color: cadetblue;
}

.btn-profile:hover {
  background-color: #3f787a;
}

</style>