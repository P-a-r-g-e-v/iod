<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <div class="bg-royal-black">
    <!-- Page title-->
      <section class="mb-md-2 pt-6 pb-lg-6 pb-5 bg-repeat-0 bg-size-cover" style="background-image: url(assets/images/news-head3.jpg);">
        <div class="container pt-lg-5 pb-lg-2">
          <div class="row">
            <div class="col-lg-6 col-md-8">
              <!-- Breadcrumbs -->
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb mb-lg-4 pb-md-3">
                  <li class="breadcrumb-item">
                    <NuxtLink to="/" class="text-white">Homepage</NuxtLink>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">News</li>
                </ol>
              </nav>

              <!-- Title -->
              <h1 class="display-1 text-uppercase text-white"
                  data-aos="zoom-out"
                  data-aos-offset="300"
                  data-aos-delay="333"
                  data-aos-duration="1050"
                  data-aos-once="true"
              >News</h1>
              <p class="mb-0 lead text-white"
                  data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-delay="333"
                  data-aos-duration="1050"
                  data-aos-once="true"
              >Stay tuned with our news and articles.</p>
            </div>
          </div>
        </div>
      </section>


      <!-- Page content-->
      <!-- News grid -->
      <section class="container pt-lg-6 pt-5 pb-4">
        <!-- NewsPage Component -->
        <AppNews />
      </section>
  </div>
</template>

<script>
import AppNews from '~/components/global/AppNews.vue'


export default {
  name: 'NewsPage',
  components: {
    AppNews,
  },
  scrollToTop: true
}
</script>

<style scoped>
html {
  scroll-behavior: smooth!important;
  margin:0;
  padding:0;
  overflow-x:hidden;
}

.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  color: #6366f1!important;
  background-color: rgba(0,0,0,0);
  border-color: #6366f1 !important;
}

a:hover {
  color: #6366f1 !important;
  text-decoration: none;
}

.page-item.active .page-link {
  z-index: 3;
  color: #6366f1 !important;
  background-color: rgba(0,0,0,0);
  border-color: rgba(0,0,0,0);
}

.page-link:focus {
  z-index: 3;
  color: #6366f1 !important;
  background-color: rgba(0,0,0,0);
  outline: 0;
  outline-color: initial;
  outline-style: initial;
  outline-width: 0px;
  box-shadow: none;
}

.nav-tabs .nav-link:hover {
  color: #6366f1 !important;;
}

.card-body {
  background-color:rgba(101, 101, 101, 1)!important;
  backdrop-filter: blur(10px)!important;
}
</style>