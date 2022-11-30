<!-- eslint-disable vue/attribute-hyphenation -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <!-- Hero slider -->
  <section id="history" class="tns-carousel-wrapper tns-controls-outer tns-controls-outer-custom">
    <tiny-slider
      class="tns-carousel-inner"
      data-carousel-options='{
          "responsive": {
            "0": { "controls": false },
            "991": { "controls": true }
          }
        }'
      :navContainer="'#pager'"
      mode="gallery"
      controls='true'
      mouseDrag='true'
      arrowKeys='true'
      controlsText="⬅➡"
    >

    <!--
      atributes fro autoplay
        ***
      autoplay='true'
      autoplayHoverPause='true'
      :autoplayButtonOutput='false'
      autoplayTimeout='4500'
        ***
    -->

      <!-- Slide 1 -->
      <div
        class="bg-size-cover py-xl-6"
        style="
          background-image: url(../assets/images/carousel1.jpg);
          height: 100vh!important;
          /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6); */
        "
      >
        <div class="container pt-5 pb-6 bg-glass">
          <div class="row pt-lg-4">
            <div class="col offset-lg-1 offset-xl-0 pt-4 pt-md-6 text-center">
              <h2 class="display-4 mt-lg-5 pt-3 from-start text-hero">The Armenian Institute of Directors (AIoD) was founded in the last
                quarter of 2014, with advisory assistance of the International Finance Corporation.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 2 -->
      <div
        class="bg-size-cover py-xl-6"
        style="
          background-image: url(../assets/images/carousel2.jpg);
          height: 100vh;
        "
      >
        <div class="container pt-5 pb-6 bg-glass">
          <div class="row pt-lg-4">
            <div class="offset-lg-1 offset-xl-0 pt-4 pt-md-6 text-center">
              <h2 class="display-4 mt-lg-5 pt-3 scale-down text-hero">
                The AIoD is a non-governmental organization, with the mission to promote the role of an effective director.
                We share knowledge and develop professionally.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 3 -->
      <div
        class="bg-size-cover py-xl-6"
        style="
          background-image: url(../assets/images/carousel3.jpg);
          height: 100vh;
        "
      >
        <div class="container pt-5 pb-6 bg-glass">
          <div class="row pt-lg-4">
            <div class="offset-lg-1 offset-xl-0 pt-4 pt-md-6 text-center">
              <h2 class="display-4 mt-lg-5 pt-3 from-start text-hero">The institute undertakes the role of the “intellectual leader” in the field of
                effective corporate governance that will serve for economic development and welfare of our society.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 4 -->
      <div
        class="bg-size-cover py-xl-6"
        style="
          background-image: url(../assets/images/carousel4.jpg);
          height: 100vh;
        "
      >
        <div class="container pt-5 pb-6 bg-glass">
          <div class="row pt-lg-4">
            <div class="offset-lg-1 offset-xl-0 pb-4 pt-md-6 text-center">
              <h2 class="display-4 mt-lg-5 pt-3 scale-down text-hero">If you are already a successful director looking to
                take your career to the next level, our world-class
                professional development, designed by directors,
                will help you accelerate your career and make you
                more effective.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </tiny-slider>

    <!-- Pager -->
    <div class="container position-relative">
      <div class="row mt-lg-n5 pt-lg-4">
        <div class="col-lg-12 col-md-8 col-sm-10 offset-lg-1 offset-xl-0">
          <div class="position-relative">
            <div
              id="pager"
              class="tns-pager tns-pager-inverse mb-xl-5 pb-5 pb-md-6"
            >
              <button type="button" data-nav="0">01</button>
              <button type="button" data-nav="1">02</button>
              <button type="button" data-nav="2">03</button>
              <button type="button" data-nav="3">04</button>
              <NuxtLink
                to="/memberspage#join-us"
                class="btn btn-arrow join-btn"
                id="purple"
                >Join us <i class="ci-arrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import VueTinySlider from 'vue-tiny-slider'

// eslint-disable-next-line vue/component-definition-name-casing
Vue.component('tiny-slider', VueTinySlider)

export default {
  name: 'AppHero',
  data() {
    return {
      responsive_hero_options: {
        0: {
          controls: false,
        },
        991: {
          controls: true,
        },
      },
    }
  },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');

html, body {
  scroll-behavior: smooth!important;
}

@media only screen and (min-width: 700px) {
  .join-btn {
    margin-left: 38.5rem!important;
  }
}

.btn-arrow i {
  position: relative;
  transition: ease-out 0.12s;
}

.btn-arrow:hover i{
  transform: translateX(15px);
  transition: ease-out 0.14s;
}
.bg-glass {
  background-color: rgba(12, 11, 11, 0.4);
  box-shadow: 0 0 10px
  rgba(0, 0, 0, .25);
  backdrop-filter: saturate(185%) blur(10px);
  border-radius: 0.6rem;
  height:100%;
}

.tns-pager.tns-pager-inverse [data-nav]::before {
  background-color:  rgba(255, 255, 255, 0.4)!important;
}
.tns-pager.tns-pager-inverse [data-nav]::after {
  background-color: white!important;
}
.tns-pager.tns-pager-inverse [data-nav].tns-nav-active {
  color: white1!important;
}
.tns-pager.tns-pager-inverse [data-nav] {
  color: rgba(255, 255, 255, 0.65)!important;
}

h3 {
  font-size: 1.438rem!important;
}

.text-hero {
  color: whitesmoke!important;
  font-weight: 400!important;
  font-size: 2.688rem;
  font-family: 'Questrial', sans-serif;
  line-height: 135%;
}

#purple {
  color:#6366f1!important
}


#purple.btn.btn-arrow.join-btn::before {
  background-color: transparent!important;
}

</style>
