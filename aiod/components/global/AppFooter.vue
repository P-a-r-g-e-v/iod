<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<!-- eslint-disable vue/v-on-style -->
<template>
  <div>
    <!-- Footer -->
    <footer id="contacts" class="footer pt-2 bg-royal-black">
      <div class="container py-3">
        <div class="row">
          <div class="col-lg-5 col-md-6">
            <div
              class="d-sm-flex align-items-center justify-content-between mb-4"
            >
              <NuxtLink class="d-inline-block" to="/">
                <img
                  style="filter: saturate(200%);"
                  src="/assets/images/logo-footer.png"
                  width="120"
                  alt="Createx logo"
                />
              </NuxtLink>
              <div class="mt-sm-1 mt-4 pe-sm-4">
                <a href="/#" class="btn-social ci-whatsapp-a">
                  <i class="ci-whatsapp"></i>
                </a>
                <a
                  href="http://m.me/ArmenianInstituteofDirectors"
                  target="_blank"
                  class="btn-social ci-messenger-a"
                >
                  <i class="ci-messenger"></i>
                </a>
                <a
                  href="https://www.facebook.com/ArmenianInstituteofDirectors"
                  target="_blank"
                  class="btn-social ci-facebook-a"
                >
                  <i class="ci-facebook"></i>
                </a>
                <a href="/#" class="btn-social ci-twitter-a">
                  <i class="ci-twitter"></i>
                </a>
                <a
                  href="https://am.linkedin.com/company/armenian-institute-of-directors#:~:text=The%20AIoD%20is%20a%20non,and%20welfare%20of%20Armenian%20society."
                  target="_blank"
                  class="btn-social ci-linkedin-a">
                  <i class="ci-linkedin"></i>
                </a>
              </div>
            </div>
            <p class="mb-md-0 mb-4 fs-sm text-light opacity-60">
              Armenian Institute of Directors promotes the professionalism and
              expertise of directors in Armenia. The Institute supports
              directors in adding value to their organisations with a particular
              focus improving the effectiveness of boards and its committees.
            </p>
          </div>
          <div class="col-lg-5 offset-lg-2 col-md-6">
            <h4 class="text-light">Let's stay in touch</h4>
            <form class="input-group">
              <input
                class="form-control input-light"
                type="email"
                placeholder="Your email address"
                required=""
              />
              <button class="btn btn-primary text-uppercase" type="submit">
                Subscribe
              </button>
            </form>
            <p class="mb-0 pt-3 fs-xs text-light opacity-60">
              *Subscribe to our newsletter to receive communications and early
              updates from Armenian Institute of Directors.
            </p>
          </div>
        </div>
        <div class="row mb-5-sm pt-4">
          <div class="col-md-4 mb-md-0 mb-4">
            <h6 class="text-light text-uppercase">Head office</h6>
            <ul class="nav nav-light flex-column">
              <li class="nav-item mb-2">
                <span class="me-1 text-light">Address:</span>
                <a
                  class="nav-link d-inline-block p-0 fw-normal"
                  target="_blank"
                  href="https://www.google.com/maps/place/40%C2%B013'03.1%22N+44%C2%B031'29.5%22E/@40.2175412,44.5235257,441m/data=!3m2!1e3!4b1!4m9!1m2!2m1!1sghapantsyan+2%2F11!3m5!1s0x0:0xd458d5ad00b0dfec!7e2!8m2!3d40.2175405!4d44.5248589"
                  >Ghapantsian Street 2/11, Yerevan, Armenia</a
                >
              </li>
              <li class="nav-item mb-2">
                <span class="me-1 text-light">Call:</span>
                <a
                  href="tel:+374(10)521-291"
                  class="nav-link d-inline-block p-0 fw-normal"
                  >+374 (10) 521-291</a
                >
              </li>
              <li class="nav-item mb-2">
                <span class="me-1 text-light">Email:</span>
                <a
                  href="mailto:info@iod.am"
                  class="nav-link d-inline-block p-0 fw-normal"
                  >info@iod.am</a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 mb-md-0 mb-4">
            <h6 class="text-light text-uppercase">Who we are</h6>
            <ul class="nav nav-light flex-column">
              <li class="nav-item mb-2">
                <NuxtLink to="/" class="nav-link p-0 fw-normal">Home</NuxtLink>
              </li>
              <li class="nav-item mb-2">
                <NuxtLink to="/#about-us" class="nav-link p-0 fw-normal">About Us</NuxtLink>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 fw-normal"
                  >Available Positions</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 fw-normal">Contacts</a>
              </li>
            </ul>
          </div>
          <div class="col-md-5 col-sm-6 mb-md-0 mb-4">
            <h6 class="text-light text-uppercase">Discover</h6>
            <ul class="nav nav-light flex-column">
              <li class="nav-item mb-2">
                <NuxtLink to="/eventspage" class="nav-link p-0 fw-normal"
                  >Events</NuxtLink
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 fw-normal">Work</a>
              </li>
              <li class="nav-item mb-2">
                <NuxtLink
                  to="/newspage"
                  class="nav-link p-0 fw-normal"
                  @click="toggleMenu"
                  >News</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="d-flex align-items-sm-center justify-content-between py-1">
          <div class="fs-xs text-light">
            <span class="d-sm-inline d-block mb-1">
              <span class="fs-sm">&copy; </span>
              All rights reserved. 2022
            </span>
          </div>
          <div class="d-flex align-items-sm-center" >
            <span
              class="d-sm-inline-block d-none text-light fs-sm me-3 align-vertical text-uppercase"
              >Go to top</span
            >
            <NuxtLink class="btn-scroll-top position-static rounded show" to="#top">
              <i class="btn-scroll-top-icon ci-angle-up"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>
.ci-angle-up {
  color: white !important;
}

.rounded {
  border-radius: 0.25rem !important;
}
.position-static {
  position: static !important;
}

.btn-primary {
  background-color: #6366f1 !important;
  border-color: #6366f1 !important;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.btn-primary.show {
  color: #fff;
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

.ci-facebook-a:hover {
  color: #4267b2 !important;
  text-decoration: none;
}

.ci-messenger-a:hover {
  color: #0078ff !important;
  text-decoration: none;
}

.ci-whatsapp-a:hover {
  color: #25d366 !important;
  text-decoration: none;
}

.btn-scroll-top {
  background-color: #6366f1!important;
}

h6 {
  margin-top: 0;
  margin-bottom: .4rem;
  font-weight: 500;
  line-height: 1.2;
}

.nav-link:hover {
  color: #6366f1!important;
}
</style>
