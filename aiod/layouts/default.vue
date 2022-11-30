<template>
  <div class="dark-bg">
    <AppHeader />
    <!-- <AppHeader2 /> -->
    <Nuxt />
    <RequestForm />
    <AppFooter />
  </div>
</template>

<script>
import AOS from 'aos'

import AppHeader from '~/components/global/AppHeader.vue'
import RequestForm from '~/components/global/RequestForm.vue'
import AppFooter from '~/components/global/AppFooter.vue'
// import AppHeader2 from '~/components/global/AppHeader2.vue'

export default {
  // eslint-disable-next-line vue/component-definition-name-casing
  name: 'default',
  components: {
    AppHeader,
    RequestForm,
    AppFooter,
    // AppHeader2
  },
  mounted() {
    AOS.init({})
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  },
}
</script>

<style>


html {
  scroll-behavior: smooth !important;
  overflow-x: auto;
}

::-webkit-scrollbar {
  width: 0.75rem !important;
}

::-webkit-scrollbar-track {
  background: #232323 !important;
}
::-webkit-scrollbar-thumb {
  background: #989898 !important;
}

.dark-bg {
  background-color: #232323;
  z-index: -9999;
}

.jarallax {
  position: relative;
  z-index: 0;
}

.jarallax > .jarallax-img {
  position: absolute;
  object-fit: cover;
  /* support for plugin https://github.com/bfred-it/object-fit-images */
  font-family: 'object-fit: cover;';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.page-loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.4s 0.2s ease-in-out;
  transition: all 0.4s 0.2s ease-in-out;
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  opacity: 0;
  visibility: hidden;
  z-index: 9999;
}
.page-loading.active {
  opacity: 1;
  visibility: visible;
}
.page-loading-inner {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
}
.page-loading.active > .page-loading-inner {
  opacity: 1;
}
.page-loading-inner > span {
  display: block;
  font-size: 1rem;
  font-weight: normal;
  color: #787a80;
}
.page-spinner {
  display: inline-block;
  width: 2.75rem;
  height: 2.75rem;
  margin-bottom: 0.75rem;
  vertical-align: text-bottom;
  background-color: #cfcfd1;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: spinner 0.75s linear infinite;
  animation: spinner 0.75s linear infinite;
}
@-webkit-keyframes spinner {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.breadcrumb-item > a:hover {
  color: #6366f1 !important;
  text-decoration: none;
}

.ci-facebook:hover {
  color: #4267b2 !important;
}

.ci-twitter:hover {
  color: #1da1f2 !important;
}

.ci-youtube:hover {
  color: #ff0000 !important;
}

.ci-linkedin:hover {
  color: #0e76a8 !important;
}
.btn-social .ci-youtube:hover {
  color: #ff0000 !important;
}
.ci-youtube-a:hover {
  color: #ff0000 !important;
  text-decoration: none;
}

.ci-twitter-a:hover {
  color: #1da1f2 !important;
  text-decoration: none;
}

.ci-linkedin-a:hover {
  color: #0e76a8 !important;
}

.ci-facebook-a:hover {
  color: #4267b2 !important;
  text-decoration: none;
}

.ci-messenger-a:hover {
  color: #0078ff !important;
  text-decoration: none;
}

.form-control:focus {
  color: #424551;
  background-color: #fff;
  border-color: #6366f1 !important;
  border-top-color: #6366f1 !important;
  border-right-color: #6366f1 !important;
  border-bottom-color: #6366f1 !important;
  border-left-color: #6366f1 !important;
  outline: 0;
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
  -webkit-box-shadow: 5px 9px 18px -6px rgba(99, 102, 241, 0.71) !important;
  box-shadow: 5px 9px 18px -6px rgba(99, 102, 241, 0.71) !important;
}

.form-control:hover:not(:read-only) {
  border-color: #6366f1 !important;
  border-top-color: #6366f1 !important;
  border-right-color: #6366f1 !important;
  border-bottom-color: #6366f1 !important;
  border-left-color: #6366f1 !important;
}

</style>
