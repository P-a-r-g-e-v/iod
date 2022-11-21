<!-- eslint-disable vue/attribute-hyphenation -->
<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <!-- Pricing -->
  <section>
    <div class="container">
      <h2 class="h1">That’s how we do it</h2>
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
          :loop='false'
          :controls='false'
          :responsive="responsive_plans"
          :mouseDrag='true'
        >
          <!-- Horizontal step item -->
          <div class="step pt-2 px-3">
            <div class="step-head mb-3">
              <span class="step-indicator">01</span>
              <span class="step-line"></span>
            </div>
            <div class="step-body">
              <h3 class="h5 mb-2">Work Estimate</h3>
              <p class="mb-0 text-muted">
                Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                velit nostrud aliquip sunt.
              </p>
            </div>
          </div>

          <!-- Horizontal step item -->
          <div class="step pt-2 px-3">
            <div class="step-head mb-3">
              <span class="step-indicator">02</span>
              <span class="step-line"></span>
            </div>
            <div class="step-body">
              <h3 class="h5 mb-2">Contract</h3>
              <p class="mb-0 text-muted">
                Anim reprehenderit sint voluptate exercitation adipisicing
                laborum adipisicing. Minim ad tempor.
              </p>
            </div>
          </div>

          <!-- Horizontal step item -->
          <div class="step pt-2 px-3">
            <div class="step-head mb-3">
              <span class="step-indicator">03</span>
              <span class="step-line"></span>
            </div>
            <div class="step-body">
              <h3 class="h5 mb-2">Mobilization</h3>
              <p class="mb-0 text-muted">
                Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
                voluptate ullamco proident ea ad.
              </p>
            </div>
          </div>

          <!-- Horizontal step item -->
          <div class="step pt-2 px-3">
            <div class="step-head mb-3">
              <span class="step-indicator">04</span>
            </div>
            <div class="step-body">
              <h3 class="h5 mb-2">Construction Work</h3>
              <p class="mb-0 text-muted">
                Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore
                dolore et ad et veniamad.
              </p>
            </div>
          </div>
        </tiny-slider>
      </div>
    </div>

    <div class="container mt-md-4 pt-lg-6 pt-5 pb-4">
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
          controls="true"
          mouseDrag="true"
          arrowKeys="true"
          controlsText="⬅➡"
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
                  class="display-4 d-flex justify-content-center mb-3 py-2 px-4 text-primary"
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
                    <i class="ci-checkmark text-primary me-2"></i>
                    <span>Advanced Analytics</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-primary me-2"></i>
                    <span>Change Management</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-primary me-2"></i>
                    <span>Corporate Finance</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-primary me-2"></i>
                    <span>One Way Link Building</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-primary me-2"></i>
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
                    <span class="text-white">One Way Link Building</span>
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
                  class="display-4 d-flex justify-content-center mb-3 py-2 px-4 text-primary"
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
                    <i class="ci-checkmark text-primary me-2"></i>
                    <span>Advanced Analytics</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-primary me-2"></i>
                    <span>Change Management</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-primary me-2"></i>
                    <span>Corporate Finance</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-primary me-2"></i>
                    <span>One Way Link Building</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-primary me-2"></i>
                    <span>Social Media Marketing</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-primary me-2"></i>
                    <span>Strategy & Marketing</span>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="ci-checkmark text-primary me-2"></i>
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

<style>


</style>
