
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AIoD',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.3.5/tiny-slider.css'
      },
      { rel: 'stylesheet',
        media: 'screen',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.8/simplebar.css'
      },
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js' },
      { src: '/js/theme.min.js', defer: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/node_modules/jarallax/dist/jarallax.css",
    "~/node_modules/tiny-slider/dist/tiny-slider.css",
    "~/static/css/theme.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/axios',
    { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: 'client' },
    { src: '~/plugins/jarallax.js', ssr: false },
    { src: '~/plugins/tiny-slider.js', ssr: false },
    { src: '~/plugins/video-background.js', ssr: false },
    { src: '~/plugins/simplebar.min.js', ssr: false },
    { src: '~/plugins/lightgallery.client.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/strapi',
    '@nuxtjs/axios',
    '@nuxt/image',
    '@nuxtjs/auth-next'
  ],

  strapi: {
    url: process.env.STRAPI_URL + "api" || 'http://localhost:1337/api',
    entities: ['events', 'categories'],
    key: 'test_token'
  },

  image: {
    strapi: {
      baseURL:  process.env.STRAPI_URL || 'http://localhost:1337/'
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
    baseURL: process.env.STRAPI_URL_AXIOS || 'http://localhost:1337/api'
  },
  auth: {
    // Options
    strategies: {
      local: {
        token: {
          property: 'jwt',
        },
        user: {
          property: false,
        },
        endpoints: {
          login: {
            url: 'auth/local',
            method: 'post',
          },
          user: {
            url: 'users/me',
            method: 'get',
          },
          logout: false,
        },
      },
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
