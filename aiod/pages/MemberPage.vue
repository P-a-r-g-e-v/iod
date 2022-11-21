<template>
    <div class="mw-75 w-auto mx-auto mt-4">
      <h1 class="fs-1 fw-bold">
        Hello, {{ loggedInUser ? loggedInUser.username : 'World!' }}
      </h1>
    </div>
  </template>

  <script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'MemberPage',
    layout: 'LoginLayout',
    computed: {
      ...mapGetters(['loggedInUser']),
    },
  }
  </script>