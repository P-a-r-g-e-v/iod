<!-- eslint-disable vue/v-on-style -->
<!-- eslint-disable vue/attribute-hyphenation -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <!-- Pricing -->
  <section id="join-us">
    <div class="container py-lg-4">
      <h2 class="h1 text-white">Why Join Us?</h2>
    </div>

    <!-- Carousel -->
    <div class="container px-0">
      <div class="tns-carousel-wrapper tns-nav-outside mt-n4 ms-lg-n5">
        <tiny-slider
          class="tns-carousel-inner pt-4 ps-lg-5"
          data-carousel-options='{
              "loop": false,
              "controls": false,
              "responsive": {
                "0": {
                  "items": 1
                },
                "576": {
                  "items": 2
                },
                "768": {
                  "items": 3
                },
                "992": {
                  "items": 4
                }
              }
            }'
          :loop="false"
          :controls="false"
          :responsive="responsive_plans"
          :mouseDrag="true"
        >
          <!-- Horizontal step item -->
          <div class="step pt-2 px-3">
            <div class="step-head mb-3">
              <span class="step-indicator">01</span>
              <span class="step-line"></span>
            </div>
            <div class="step-body">
              <h3 class="h5 mb-2 text-white">
                Join the directors and leaders in the Armenia and beyond
                <i class="ci-arrow-right"></i>
              </h3>
            </div>
          </div>

          <!-- Horizontal step item -->
          <div class="step pt-2 px-3">
            <div class="step-head mb-3">
              <span class="step-indicator">02</span>
              <span class="step-line"></span>
            </div>
            <div class="step-body">
              <h3 class="h5 mb-2 text-white">
                Whether you’re the founder of a start-up, the director of a
                business <i class="ci-arrow-right"></i>
              </h3>
            </div>
          </div>

          <!-- Horizontal step item -->
          <div class="step pt-2 px-3">
            <div class="step-head mb-3">
              <span class="step-indicator">03</span>
              <span class="step-line"></span>
            </div>
            <div class="step-body">
              <h3 class="h5 mb-2 text-white">
                The AIoD is the place to connect <i class="ci-arrow-right"></i>
              </h3>
            </div>
          </div>

          <!-- Horizontal step item -->
          <div class="step pt-2 px-3">
            <div class="step-head mb-3">
              <span class="step-indicator">04</span>
            </div>
            <div class="step-body">
              <h3 class="h5 mb-2 text-white">
                Share knowledge and develop professionally.
              </h3>
            </div>
          </div>
        </tiny-slider>
      </div>
    </div>
    <div class="container mt-md-2 pt-lg-3 pt-3 pb-2 d-flex justify-content-center">
      <div class="row">
       <div class="col-12 rainbow d-flex text-center">
        <!-- <NuxtLink :to="loggedInUser ? '/user/me' : '/user/login'">
          <button class="btn btn-translucent-primary btn-hover-shadow btn-lg my-auto">
          Join AIoD <i class="ci-arrow-right"></i>
        </button>
        </NuxtLink> -->

       </div>
      </div>
    </div>
    <div class="container pt-lg-5 pt-5 pb-4">
      <h2
        class="h1 mb-md-5 pb-2 text-center text-white"
        data-aos="zoom-out"
        data-aos-offset="330"
        data-aos-delay="450"
        data-aos-duration="1150"
        data-aos-once="true"
      >
        Pricing plans
      </h2>

      <!-- Vertical pricing plan wrapper + Carousel -->
      <div class="pricing-wrap tns-carousel-wrapper tns-nav-outside">
        <!-- Price switch -->
        <div class="mx-auto mb-md-5 mb-4 pb-2" style="max-width: 390px">
          <div class="switch">
            <input
              v-on:click="switchAlt"
              class="switch-input visually-hidden"
              type="checkbox"
              id="switchAlt"
            />
            <label class="switch-label" for="switchAlt">
              <span class="switch-label-item">Monthly</span>
              <span class="switch-label-item"
                >Yearly
                <small class="ms-2 fs-xs fw-normal">-12% Off</small>
              </span>
            </label>
          </div>
        </div>

        <tiny-slider
          class="tns-carousel-inner"
          data-carousel-options='{
            "gutter": 30,
            "loop": false,
            "controls": false,
            "responsive": {
            "0": {
                "items": 3,
                "nav": true
            },
            "576": {
                "items": 2
            },
            "992": {
                "items": 3,
                "nav": false
            }
            }
        }'
          :gutter="30"
          :controls="true"
          :mouseDrag="true"
          :arrowKeys="true"
          :controlsText="'⬅➡'"
          :responsive="responsive_options"
        >
          <div>
            <!-- Plan card -->
            <div
              class="card h-100"
              data-aos="fade-up"
              data-aos-offset="350"
              data-aos-delay="550"
              data-aos-duration="1050"
              data-aos-once="true"
            >
              <div class="card-img-top text-center pt-4">
                <h3 class="mt-3 mb-2">Basic</h3>
              </div>
              <div class="card-body pt-0">
                <div
                  class="display-4 d-flex justify-content-center mb-3 py-2 px-4 text-purple"
                >
                  $
                  <span
                    class="price"
                    data-current-price="22"
                    data-new-price="20"
                    >22</span
                  >
                  <sup class="lead fw-bold mt-4 ms-2">/mon</sup>
                </div>
                <hr class="hr-gradient mx-n4 mb-4" />
                <ul class="list-unstyled d-table mx-auto mb-0 pb-2">
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-purple me-2"></i>
                    <span>Advanced Analytics</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-purple me-2"></i>
                    <span>Change Management</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-purple me-2"></i>
                    <span>Corporate Finance</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-purple me-2"></i>
                    <span>Private Section</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-purple me-2"></i>
                    <span>Social Media Marketing</span>
                  </li>
                  <li class="d-flex align-items-center mb-2 opacity-90">
                    <i class="ci-cross text-muted me-2"></i>
                    <span class="text-muted">Strategy & Marketing</span>
                  </li>
                  <li class="d-flex align-items-center mb-2 opacity-90">
                    <i class="ci-cross text-muted me-2"></i>
                    <span class="text-muted">Information Technology</span>
                  </li>
                </ul>
              </div>
              <div class="card-footer pt-0 border-0 text-center">
                <a class="btn btn-outline-primary mb-4" href="#">Choose plan</a>
              </div>
            </div>
          </div>

          <div>
            <!-- Featured plan card -->
            <div
              class="card border-success bg-dark h-100"
              data-aos="fade-up"
              data-aos-offset="350"
              data-aos-delay="750"
              data-aos-duration="1150"
              data-aos-once="true"
            >
              <div class="card-img-top text-center pt-4">
                <h3 class="mt-3 mb-2 text-white">Optimal</h3>
              </div>
              <div class="card-body pt-0">
                <div
                  class="display-4 d-flex justify-content-center mb-3 py-2 px-4 text-success"
                >
                  $
                  <span
                    class="price"
                    data-current-price="64"
                    data-new-price="62"
                    >64</span
                  >
                  <sup class="lead fw-bold mt-4 ms-2">/mon</sup>
                </div>
                <hr class="hr-gradient hr-light mx-n4 mb-4" />
                <ul class="list-unstyled d-table mx-auto mb-0 pb-2">
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-success me-2"></i>
                    <span class="text-white">Advanced Analytics</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-success me-2"></i>
                    <span class="text-white">Change Management</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-success me-2"></i>
                    <span class="text-white">Corporate Finance</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-success me-2"></i>
                    <span class="text-white">Private Section</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-success me-2"></i>
                    <span class="text-white">Social Media Marketing</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-success me-2"></i>
                    <span class="text-white">Strategy & Marketing</span>
                  </li>
                  <li class="d-flex mb-2 opacity-50">
                    <i class="ci-cross text-muted mt-1 me-2"></i>
                    <span class="text-white">Information Technology</span>
                  </li>
                </ul>
              </div>
              <div class="card-footer pt-0 border-0 text-center">
                <a class="btn btn-primary mb-4" href="#">Choose plan</a>
              </div>
            </div>
          </div>

          <div>
            <!-- Plan card -->
            <div
              class="card h-100"
              data-aos="fade-up"
              data-aos-offset="350"
              data-aos-delay="950"
              data-aos-duration="1250"
              data-aos-once="true"
            >
              <div class="card-img-top text-center pt-4">
                <h3 class="mt-3 mb-2">Premium</h3>
              </div>
              <div class="card-body pt-0">
                <div
                  class="display-4 d-flex justify-content-center mb-3 py-2 px-4 text-purple"
                >
                  $
                  <span
                    class="price"
                    data-current-price="98"
                    data-new-price="94"
                    >98</span
                  >
                  <sup class="lead fw-bold mt-4 ms-2">/mon</sup>
                </div>
                <hr class="hr-gradient mx-n4 mb-4" />
                <ul class="list-unstyled d-table mx-auto mb-0 pb-2">
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-purple me-2"></i>
                    <span>Advanced Analytics</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-purple me-2"></i>
                    <span>Change Management</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-purple me-2"></i>
                    <span>Corporate Finance</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-purple me-2"></i>
                    <span>Private Section</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-purple me-2"></i>
                    <span>Social Media Marketing</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-purple me-2"></i>
                    <span>Strategy & Marketing</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-purple me-2"></i>
                    <span>Information Technology</span>
                  </li>
                </ul>
              </div>
              <div class="card-footer pt-0 border-0 text-center">
                <a class="btn btn-outline-primary mb-4" href="#">Choose plan</a>
              </div>
            </div>
          </div>
        </tiny-slider>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JoinAIOD',
  data() {
    return {
      responsive_options: {
        0: {
          items: 1,
          nav: true,
        },
        576: {
          items: 2,
        },
        992: {
          items: 3,
          nav: false,
        },
      },
      responsive_plans: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    }
  },
}
</script>

<style scoped>
@media screen and (max-width: 575.98px) {
  .step .step-indicator {
    color: #6366f1 !important;
  }
}


body {
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 height: 100vh;
}
 *, *::before, *::after {
	 box-sizing: border-box;
}
.step .step-indicator::before {
  width: 5.25rem;
  height: 5.25rem;
  background-color: rgba(99, 102, 241, 0.12) !important;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transition-duration: 0.3s, 0.3s;
  transition-timing-function: ease-in-out, ease-in-out;
  transition-delay: 0s, 0s;
  transition-property: transform, opacity;
}

.step .step-indicator::after {
  width: 7.3125rem;
  height: 7.3125rem;
  background-color: rgba(99, 102, 241, 0.06) !important;
  transition: transform 0.3s ease 0.1s, opacity 0.3s ease 0.1s;
  transition-duration: 0.3s, 0.3s;
  transition-timing-function: ease, ease;
  transition-delay: 0.1s, 0.1s;
  transition-property: transform, opacity;
}

.step:hover .step-indicator {
  color: #6366f1 !important;
  transition: 0.3s ease-in-out !important;
}

.btn-translucent-primary:hover {
  color: white!important;
}

/* button box animation */

*, *::before, *::after {
	box-sizing: border-box;
}

@keyframes rotate {
	 100% {
		 transform: rotate(1turn);
	}
}
 .rainbow {
	 position: relative;
	 z-index: 0;
	 width: 248px;
	 height: 140px;
	 border-radius: 10px;
	 overflow: hidden;
	 padding: 2rem;
}
 .rainbow::before {
	 content: '';
	 position: absolute;
	 z-index: -2;
	 left: -50%;
	 top: -50%;
	 width: 200%;
	 height: 200%;
	 background-color: #6366f1;
	 background-repeat: no-repeat;
	 background-size: 50% 50%, 50% 50%;
	 background-position: 0 0, 100% 0, 100% 100%, 0 100%;
	 background-image: linear-gradient(#6366f1, #6366f1), linear-gradient(#414ED4, #414ED4), linear-gradient(#0D37B8, #0D37B8), linear-gradient(#00229C, #00229C);
	 animation: rotate 6s linear infinite;
}
 .rainbow::after {
	 content: '';
	 position: absolute;
	 z-index: -1;
	 left: 6px;
	 top: 6px;
	 width: calc(100% - 12px);
	 height: calc(100% - 12px);
	 background: #242424;
	 border-radius: 5px;
}


/* button box animation */

</style>
