<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <div class="bg-royal-black">
      <!-- Page title-->
    <section
      class="pt-6 pb-lg-6 pb-5 bg-repeat-0 bg-size-cover"
      style="background-image: url(assets/images/events00.png)"
    >
      <div class="container py-lg-5">
        <div class="row">
          <div class="col-lg-6 col-md-8">
            <!-- Breadcrumbs -->
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-lg-4 pb-md-3">
                <li class="breadcrumb-item">
                  <NuxtLink to="/" class=" text-white">Homepage</NuxtLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Work</li>
              </ol>
            </nav>

            <!-- Title -->
            <h1 class="display-1 text-uppercase text-white"
              data-aos="zoom-out"
              data-aos-offset="300"
              data-aos-delay="333"
              data-aos-duration="1050"
              data-aos-once="true"
            >
            Our events
            </h1>
            <p class="mb-0 lead text-white"
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-delay="333"
              data-aos-duration="1050"
              data-aos-once="true"
            >
              Here you can browse our old and upcoming events. Every event is unique. Don't miss opportunity to grow as professional.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Page content-->
    <!-- Case studies grid -->
    <section class="container mt-lg-n5 pb-4">
      <!-- Filterable grid container. IMPORTANT: it should wrap filters/sorters and target grid of items in order for plugin to work! -->
      <AppEvents />
    </section>
  </div>
</template>

<script>
import AppEvents from '~/components/global/AppEvents.vue'

export default {
  name: 'EventsPage',
  components: {
    AppEvents
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
.bg-royal-black {
  background-color: #232323!important;
}

</style>

