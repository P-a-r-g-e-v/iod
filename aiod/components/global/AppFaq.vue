<template>
  <div>
    <!-- Asked questions -->
    <section
      class="py-lg-6 py-5 bg-repeat-0"
    >
      <div class="container mt-md-4">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-7">
            <h2 class="h1 pb-md-3 text-white">Freequently Ask Questions</h2>

            <!-- Basic accordion -->
            <div id="accordionFaq" class="accordion">
              <!-- Item -->
              <div class="accordion-item mb-2">
                <h5 id="accordionFaqHeading-1" class="accordion-header">
                  <button
                    class="accordion-button border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordionFaqCollapse-1"
                    aria-expanded="true"
                    aria-controls="accordionFaqCollapse-1"
                  >
                    How to become a member of AIoD?
                  </button>
                </h5>
                <div
                  id="accordionFaqCollapse-1"
                  class="accordion-collapse border-0 collapse show"
                  aria-labelledby="accordionFaqHeading-1"
                  data-bs-parent="#accordionFaq"
                >
                  <div class="accordion-body">
                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec
                    pulvinar aliquet donec enim, ornare. Lacus facilisi
                    curabitur turpis varius mauris. Nisi, tempus risus, odio mi
                    suscipit sed. Curabitur faucibus porttitor quis sem lacus,
                    arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                  </div>
                </div>
              </div>

              <!-- Item -->
              <div class="accordion-item mb-2">
                <h5 id="accordionFaqHeading-2" class="accordion-header">
                  <button
                    class="accordion-button border-0 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordionFaqCollapse-2"
                    aria-expanded="false"
                    aria-controls="accordionFaqCollapse-2"
                  >
                    How can I know more about events?
                  </button>
                </h5>
                <div
                  id="accordionFaqCollapse-2"
                  class="accordion-collapse border-0 collapse"
                  aria-labelledby="accordionFaqHeading-2"
                  data-bs-parent="#accordionFaq"
                >
                  <div class="accordion-body">
                    Ipsum aspernatur officiis, obcaecati modi excepturi,
                    consectetur adipisicing elit. Inventore porro molestiae
                    nihil ad aut atque tempora tempore fugiat ipsum aspernatur
                    officiis, obcaecati modi excepturi, aliquid reprehenderit?
                    Sint ullam magni molestias?
                  </div>
                </div>
              </div>

              <!-- Item -->
              <div class="accordion-item mb-2">
                <h5 id="accordionFaqHeading-3" class="accordion-header">
                  <button
                    class="accordion-button border-0 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordionFaqCollapse-3"
                    aria-expanded="false"
                    aria-controls="accordionFaqCollapse-3"
                  >
                    What type of specific advantages have members?
                  </button>
                </h5>
                <div
                  id="accordionFaqCollapse-3"
                  class="accordion-collapse border-0 collapse"
                  aria-labelledby="accordionFaqHeading-3"
                  data-bs-parent="#accordionFaq"
                >
                  <div class="accordion-body">
                    Doloribus quo sed beatae provident placeat voluptate
                    corporis eligendi maxime laborum reprehenderit voluptatibus
                    obcaecati recusandae illum, delectus ipsum ab vitae cum
                    excepturi? Illo ad id mollitia, sit obcaecati qui laborum
                    iste minima deserunt consequatur sunt neque aliquid, error
                    aspernatur!
                  </div>
                </div>
              </div>

              <!-- Item -->
              <div class="accordion-item mb-2">
                <h5 id="accordionFaqHeading-4" class="accordion-header">
                  <button
                    class="accordion-button border-0 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordionFaqCollapse-4"
                    aria-expanded="false"
                    aria-controls="accordionFaqCollapse-4"
                  >
                    How can I contact with creators of this amazing website?
                  </button>
                </h5>
                <div
                  id="accordionFaqCollapse-4"
                  class="accordion-collapse border-0 collapse"
                  aria-labelledby="accordionFaqHeading-4"
                  data-bs-parent="#accordionFaq"
                >
                  <div class="accordion-body">
                    Open google and type "the best web developers", then close it, because we aren't there. We are on another level.
                  </div>
                </div>
              </div>
            </div>

            <a href="#" class="btn btn-primary mt-sm-5 mt-3">
              Discover more
              <i class="ci-arrow-right ms-2"></i>
            </a>
          </div>
          <div class="col-lg-5 offset-lg-1 col-md-5 col-sm-10 mt-md-0 mt-5">
            <div class="parallax mx-auto">
              <div class="parallax-layer" data-depth="0.05">
                <img
                  src="assets/images/01.svg"
                  alt="Layer-1"
                />
              </div>
              <div class="parallax-layer" data-depth="0.1">
                <img
                  src="assets/images/02.svg"
                  alt="Layer-2"
                />
              </div>
              <div class="parallax-layer" data-depth="0.13">
                <img
                  src="assets/images/03.svg"
                  alt="Layer-3"
                />
              </div>
              <div class="parallax-layer" data-depth="0.16">
                <img
                  src="assets/images/04.svg"
                  alt="Layer-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppFaq',
}
</script>

<style scoped>
 .accordion-button:not(.collapsed) {
  color: #11d8a7!important;
  background-color: rgba(0,0,0,0)!important;
  box-shadow: inset 0 0 0 #e5e8ed!important;
}

.accordion-button:not(.collapsed)::after {
  filter: invert(70%) sepia(155%) saturate(924%) hue-rotate(110deg) brightness(108%) contrast(102%)!important;
}

.accordion-button::after {
  filter: invert(70%) sepia(155%) saturate(924%) hue-rotate(110deg) brightness(108%) contrast(102%)!important;
}
.btn-primary {
  background-color: #5ac098 !important;
  border-color: #5ac098 !important;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.btn-primary.show {
  background-color: #006b41 !important;
  border-color: #006b41 !important;
  color: #fff;
}

</style>
