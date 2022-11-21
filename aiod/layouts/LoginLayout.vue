<!-- eslint-disable import/order -->
<template>
    <div class="bg-black">
      <AppHeader />
      <MemberNavigation />
      <Nuxt />
      <!-- <AppDecoration /> -->
      <AppFooter />
    </div>
</template>

<script>

import MemberNavigation from '~/components/global/MemberNavigation.vue'
import AppFooter from '~/components/global/AppFooter.vue'
import AppHeader from '~/components/global/AppHeader.vue'
// import AppDecoration from '~/components/global/AppDecoration.vue'



import 'object-fit-images'
// eslint-disable-next-line import/order
import { jarallax, jarallaxVideo } from 'jarallax'

window.addEventListener('load', function(event) {
  jarallaxVideo()

  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.8
  })

  jarallax(document.querySelectorAll('.jarallax-video'), {
    speed: 0.8,
    videoSrc: 'https://youtu.be/mru3Q5m4lkY'
  })
})

export default  {
  name: 'LoginLayout',
  components: {
  // eslint-disable-next-line vue/no-unused-components
    AppHeader,
    MemberNavigation,
    AppFooter,
    // AppDecoration

  },
  scrollToTop: true
}
</script>

<style scoped>
#modal-view-background {
  align-items: center;
  background-position: bottom;
  background-repeat: no-repeat;
}
</style>