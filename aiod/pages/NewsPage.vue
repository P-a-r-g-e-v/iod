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
      <div class="container pt-lg-6 pt-5 pb-4">

        <h2 class="h1 mb-5 text-center text-white">Categories</h2>

        <!-- Filterable grid container. IMPORTANT: it should wrap filters/sorters and target grid of items in order for plugin to work! -->
        <div data-filter-grid="">

          <!-- Filter navs -->
          <nav class="mb-lg-5 mb-4 pb-3" data-simplebar="" data-simplebar-auto-hide="false">
            <ul class="nav nav-tabs nav-fill flex-nowrap mb-0 text-nowrap">
              <li class="nav-item mb-0">
                <span class="nav-link active" data-filter="all">
                  All News
                </span>
              </li>
              <li class="nav-item mb-0">
                <span class="nav-link" data-filter=".company-news">
                  Company News
                </span>
              </li>
              <li class="nav-item mb-0">
                <span class="nav-link" data-filter=".innovation">
                  Innovation
                </span>
              </li>
              <li class="nav-item mb-0">
                <span class="nav-link" data-filter=".industry-news">
                  Industry News
                </span>
              </li>
              <li class="nav-item mb-0">
                <span class="nav-link" data-filter=".expert-tips">
                  Expert Tips
                </span>
              </li>
              <li class="nav-item mb-0">
                <span class="nav-link" data-filter=".marketing">
                  Blog
                </span>
              </li>
            </ul>
          </nav>

          <!-- Filterable grid of items -->
          <div class="row pt-3">
            <div class="grid-item industry-news col-md-6 mb-md-5 mb-grid-gutter pb-lg-3">

              <!-- Post preview: card alt -->
              <article class="image-scale h-100 card shadow card-hover border-0">
                <NuxtLink class="image-inner card-img-top" to="/newssingle">
                  <img src="assets/images/img1.jpg" alt="Blog card image">
                </NuxtLink>
                <div class="card-body">
                  <h3 class="h5 mb-2 pb-1">
                    <NuxtLink class="nav-link text-white" to="/newssingle">How to Build a Successful Team?</NuxtLink>
                  </h3>
                  <ul class="nav nav-muted mb-2 pb-1">
                    <li class="nav-item me-2">
                      <a class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal text-white" href="#">
                        Industry News
                      </a>
                      <span class="text-border px-1">|</span>
                    </li>
                    <li class="nav-item me-2">
                      <a class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal text-white" href="#">
                        June 24, 2022
                      </a>
                      <span class="text-border d-sm-inline-block d-none px-1">|</span>
                    </li>
                  </ul>
                  <p class="card-text text-white">Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...</p>
                </div>
              </article>
            </div>
            <div class="grid-item innovation col-md-6 mb-md-5 mb-grid-gutter pb-lg-3">

              <!-- Post preview: card alt -->
              <article class="image-scale h-100 card shadow card-hover border-0">
                <NuxtLink class="image-inner card-img-top" to="/newssingle">
                  <img src="assets/images/img2.jpg" alt="Blog card image">
                </NuxtLink>
                <div class="card-body">
                  <h3 class="h5 mb-2 pb-1">
                    <NuxtLink class="nav-link text-white" to="/newssingle">How Knowledge Improvement Can Help?</NuxtLink>
                  </h3>
                  <ul class="nav nav-muted mb-2 pb-1">
                    <li class="nav-item me-2">
                      <a class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal text-white" href="#">
                        Innovation
                      </a>
                      <span class="text-border px-1">|</span>
                    </li>
                    <li class="nav-item me-2">
                      <a class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal text-white" href="#">
                        June 12, 2022
                      </a>
                      <span class="text-border d-sm-inline-block d-none px-1">|</span>
                    </li>
                  </ul>
                  <p class="card-text text-white">Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus...</p>
                </div>
              </article>
            </div>
            <div class="grid-item expert-tips col-md-6 mb-md-5 mb-grid-gutter pb-lg-3">

              <!-- Post preview: card alt -->
              <article class="image-scale h-100 card shadow card-hover border-0">
                <NuxtLink class="image-inner card-img-top" to="/newssingle">
                  <img src="assets/images/img3.jpg" alt="Blog card image">
                </NuxtLink>
                <div class="card-body">
                  <h3 class="h5 mb-2 pb-1">
                    <NuxtLink class="nav-link text-white" to="/newssingle">The Difference Between a Creator and User</NuxtLink>
                  </h3>
                  <ul class="nav nav-muted mb-2 pb-1">
                    <li class="nav-item me-2">
                      <a class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal text-white" href="#">
                        Expert Tips
                      </a>
                      <span class="text-border px-1">|</span>
                    </li>
                    <li class="nav-item me-2">
                      <a class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal text-white" href="#">
                        May 16, 2022
                      </a>
                      <span class="text-border d-sm-inline-block d-none px-1">|</span>
                    </li>
                  </ul>
                  <p class="card-text text-white">Cras est nisi purus velit facilisi vitae, dolor. Lorem scelerisque integer duis et nulla lobortis cursus. Viverra erat sollicitudin praesent viverra...</p>
                </div>
              </article>
            </div>
            <div class="grid-item expert-tips col-md-6 mb-md-5 mb-grid-gutter pb-lg-3">

              <!-- Post preview: card alt -->
              <article class="image-scale h-100 card shadow card-hover border-0">
                <NuxtLink class="image-inner card-img-top" to="/newssingle">
                  <img src="assets/images/img4.jpg" alt="Blog card image">
                </NuxtLink>
                <div class="card-body">
                  <h3 class="h5 mb-2 pb-1">
                    <NuxtLink class="nav-link text-white" to="/newssingle">Become a Professional at Every Aspect</NuxtLink>
                  </h3>
                  <ul class="nav nav-muted mb-2 pb-1">
                    <li class="nav-item me-2">
                      <a class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal text-white text-white text-white" href="#">
                        Expert Tips
                      </a>
                      <span class="text-border px-1">|</span>
                    </li>
                    <li class="nav-item d-sm-block d-none me-2">
                      <a class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal text-white text-white text-white" href="#">
                        February 25, 2022
                      </a>
                      <span class="text-border d-sm-inline-block d-none px-1">|</span>
                    </li>
                  </ul>
                  <p class="card-text text-white">Tellus quis aliquet volutpat nunc pulvinar donec sed sapien. Vitae elit id dolor, tristique massa. Fames lobortis orci rutrum bibendum integer...</p>
                </div>
              </article>
            </div>
            <div class="grid-item industry-news col-md-6 mb-md-5 mb-grid-gutter pb-lg-3">

              <!-- Post preview: card alt -->
              <article class="image-scale h-100 card shadow card-hover border-0">
                <NuxtLink class="image-inner card-img-top" to="/newssingle">
                  <img src="assets/images/img5.jpg" alt="Blog card image">
                </NuxtLink>
                <div class="card-body">
                  <h3 class="h5 mb-2 pb-1">
                    <NuxtLink class="nav-link text-white" to="/newssingle">Top 10 Industry Trends</NuxtLink>
                  </h3>
                  <ul class="nav nav-muted mb-2 pb-1">
                    <li class="nav-item me-2">
                      <a class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal text-white text-white" href="#">
                        Industry News
                      </a>
                      <span class="text-border px-1">|</span>
                    </li>
                    <li class="nav-item me-2">
                      <a class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal text-white text-white" href="#">
                        January 14, 2020
                      </a>
                      <span class="text-border d-sm-inline-block d-none px-1">|</span>
                    </li>
                  </ul>
                  <p class="card-text text-white">Dignissim sed enim, eleifend morbi condimentum. Congue id quis vulputate dignissim eget. Ac ullamcorper nunc habitasse enim interdum platea...</p>
                </div>
              </article>
            </div>
            <div class="grid-item company-news col-md-6 mb-md-5 mb-grid-gutter pb-lg-3">

              <!-- Post preview: card alt -->
              <article class="image-scale h-100 card shadow card-hover border-0">
                <NuxtLink class="image-inner card-img-top" to="/newssingle">
                  <img src="assets/images/img3.jpg" alt="Blog card image">
                </NuxtLink>
                <div class="card-body">
                  <h3 class="h5 mb-2 pb-1">
                    <NuxtLink class="nav-link text-white" to="/newssingle">Law Regulations News</NuxtLink>
                  </h3>
                  <ul class="nav nav-muted mb-2 pb-1">
                    <li class="nav-item me-2">
                      <a class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal text-white" href="#">
                        Law News
                      </a>
                      <span class="text-border px-1">|</span>
                    </li>
                    <li class="nav-item me-2">
                      <a class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal text-white" href="#">
                        December 1, 2021
                      </a>
                      <span class="text-border d-sm-inline-block d-none px-1">|</span>
                    </li>
                  </ul>
                  <p class="card-text text-white">Maecenas donec lacinia nunc, quam sit magnis mauris. Neque bibendum et mauris, aenean. Vel arcu amet in sem parturient  integer duis et nulla...</p>
                </div>
              </article>
            </div>
          </div>

          <!-- Pagination -->
          <nav aria-label="News navigation">
            <ul class="pagination justify-content-center mb-lg-5 mb-4 pt-3">
              <li class="page-item d-sm-none">
                <span class="page-link page-link-static">1 / 4</span>
              </li>
              <li class="page-item active d-none d-sm-block" aria-current="page">
                <span class="page-link">1
                  <span class="visually-hidden">(current)</span>
                </span>
              </li>
              <li class="page-item d-none d-sm-block">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item d-none d-sm-block">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item d-none d-sm-block">
                <a class="page-link" href="#">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  <i class="ci-arrow-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  </div>
</template>

<script>
import mixitup from 'mixitup';
export default {
  name: 'NewsPage',
  data () {
    return {
      msg: 'Vue.js & MixItUp example',
      mixer: null,
    }
  },
  mounted() {
    const container = document.querySelector('[data-filter-grid]');
    this.mixer = mixitup(container, {
        selectors: {
            target: ".grid-item"
        },
        controls: {
            scope: "local"
        },
        classNames: {
            block: "",
            elementFilter: "",
            modifierActive: "active"
        },
        animation: {
            duration: 350
        }
    });
  }
}
</script>

<style scoped>
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