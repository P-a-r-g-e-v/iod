<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <!-- Page title-->
  <section
    class="pt-6 pb-lg-6 pb-5 bg-repeat-0 bg-dark bg-cover-size bg-position-top-end bg-size-contain bg-attachment-fixed text-white"
  >
    <div class="container bg-glass py-lg-5">
      <!-- Breadcrumbs -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-lg-4 pb-md-3">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-white">Homepage</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink to="/eventspage" class="text-white">Events</NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Modern Challenges
          </li>
        </ol>
      </nav>

      <!-- Title -->
      <h1 class="display-2 mb-sm-5 pb-md-3 text-white">Modern Challenges</h1>

      <!-- Carousel -->
      <div
        class="tns-carousel-wrapper tns-controls-onhover gallery mb-lg-6 mb-5 pb-md-4"
      >
        <tiny-slider
          class="tns-carousel-inner"
          :nav-container="'#project-thumbnails'"
          :nav-as-thumbnails="true"
          mode="gallery"
          mouseDrag='true'
          arrowKeys='true'
          :controls='false'
        >
          <!-- Gallery item -->
          <div class="gallery">
            <a class="gallery-item rounded" href="assets/images/img1.jpg">
              <img src="assets/images/img1.jpg" alt="Gallery thumbnail" />
              <span class="gallery-caption"
                >Discussing about basics</span
              >
            </a>
          </div>

          <!-- Gallery item -->
          <div class="gallery">
            <a class="gallery-item rounded" href="assets/images/img2.jpg">
              <img src="assets/images/img2.jpg" alt="Gallery thumbnail" />
              <span class="gallery-caption"
                >General meeting</span
              >
            </a>
          </div>

          <!-- Gallery item -->
          <div class="gallery">
            <a class="gallery-item rounded" href="assets/images/img3.jpg">
              <img src="assets/images/img3.jpg" alt="Gallery thumbnail" />
              <span class="gallery-caption"
                >Post meeting talking</span
              >
            </a>
          </div>

          <!-- Gallery item -->
          <div class="gallery">
            <a class="gallery-item rounded" href="assets/images/img4.jpg">
              <img src="assets/images/img4.jpg" alt="Gallery thumbnail" />
              <span class="gallery-caption"
                >Presentation planning</span
              >
            </a>
          </div>

          <!-- Gallery item -->
          <div class="gallery">
            <a class="gallery-item rounded" href="assets/images/img5.jpg">
              <img src="assets/images/img5.jpg" alt="Gallery thumbnail" />
              <span class="gallery-caption"
                >Final decision</span
              >
            </a>
          </div>

          <!-- Gallery item -->
          <div class="gallery">
            <a class="gallery-item rounded" href="assets/images/img3.jpg">
              <img src="assets/images/img3.jpg" alt="Gallery thumbnail" />
              <span class="gallery-caption"
                >Post meeting talking</span
              >
            </a>
          </div>
        </tiny-slider>

        <!-- Thumbnails -->
        <div id="project-thumbnails" class="tns-thumbnails">
          <button type="button" data-nav="0">
            <img class="img" src="assets/images/img1.jpg" alt="Thumbnail" />
          </button>
          <button type="button" data-nav="1">
            <img src="assets/images/img2.jpg" alt="Thumbnail" />
          </button>
          <button type="button" data-nav="2">
            <img src="assets/images/img3.jpg" alt="Thumbnail" />
          </button>
          <button type="button" data-nav="3">
            <img src="assets/images/img4.jpg" alt="Thumbnail" />
          </button>
          <button type="button" data-nav="4">
            <img src="assets/images/img5.jpg" alt="Thumbnail" />
          </button>
          <button type="button" data-nav="5">
            <img src="assets/images/img3.jpg" alt="Thumbnail" />
          </button>
        </div>
      </div>

      <!-- Project goal -->
      <div class="row">
        <div class="col-md-6">
          <h2 class="h1 pb-md-3 text-white">Event Details</h2>
          <p class="fs-lg">
            Fitch Ratings opinion is that governance will become more ratings-relevant for banks as public authorities, consumers and #ESG-aware investors are increasingly conscious of the social impact of the institutions they do business with and have become less tolerant of banks' conduct transgressions.
          </p>
          <p class="fs-lg">
            Traditional #governance elements, such as #transparency, ownership and organisational structure, have long been captured in Fitch’s rating criteria, but the agency believes that continued focus on qualitative governance #rating considerations remains important in a forward-looking rating framework. During this webinar, we will be looking at some high-profile governance failures at banks, reviewing rating impacts and lessons learned.
          </p>
        </div>
        <div class="col-lg-5 offset-lg-1 col-md-6 pb-4">
          <div class="d-table w-100 p-sm-4 p-3 rounded-4 glass-dark shadow-purple shadow-sm">
            <div class="d-table-row">
              <h6 class="d-table-cell py-2 px-sm-4 px-2 text-uppercase text-white">
                Location
              </h6>
              <span class="d-table-cell py-2 px-sm-4 px-2 text-white"
                >Elite Plaza, Yerevan, Armneia</span
              >
            </div>
            <div class="d-table-row">
              <h6 class="d-table-cell py-2 px-sm-4 px-2 text-uppercase text-white">
                Speaker(s)
              </h6>
              <span class="d-table-cell py-2 px-sm-4 px-2 text-white"
                >Konstantin Saroyan</span
              >
            </div>
            <div class="d-table-row">
              <h6 class="d-table-cell py-2 px-sm-4 px-2 text-uppercase text-white">
                Moderator(s)
              </h6>
              <span class="d-table-cell py-2 px-sm-4 px-2 text-white"
                >Melsa Ararat</span
              >
            </div>
            <div class="d-table-row">
              <h6 class="d-table-cell py-2 px-sm-4 px-2 text-uppercase text-white">
                Duration
              </h6>
              <span class="d-table-cell py-2 px-sm-4 px-2 text-white"
                >2.0 hours</span
              >
            </div>
            <div class="d-table-row">
              <h6 class="d-table-cell py-2 px-sm-4 px-2 text-uppercase text-white">
                Date/Time
              </h6>
              <span class="d-table-cell py-2 px-sm-4 px-2 text-white"
                >22/12/2022 Starting 14:00pm</span
              >
            </div>
            <div class="d-table-row">
              <h6 class="d-table-cell py-2 px-sm-4 px-2 text-uppercase text-white">
                Meeting Type
              </h6>
              <span class="d-table-cell py-2 px-sm-4 px-2 text-white"
                >Online</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'lightgallery.js'
import 'lightgallery.js/dist/css/lightgallery.css'

export default {
  name: 'EventSingle',
  mounted() {
    const galleries = document.querySelectorAll('.gallery')
    galleries.forEach(gallery => window.lightGallery(gallery, {
        selector: ".gallery-item",
        download: !1,
        videojs: !0,
        youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0
        },
        vimeoPlayerParams: {
            byline: 0,
            portrait: 0
        }
    }))
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth!important;
  overflow-x: hidden;
}

.bg-glass {
  background: white;
  background: linear-gradient(
    to left bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 0.6rem;
}
.glass-dark {
  background: linear-gradient(
    to left bottom,
    rgba(99, 102, 241, 0.7),
    rgba(99, 102, 241, 0.02)
  );
  backdrop-filter: saturate(180%) blur(5px);
}

.shadow-sm {
  box-shadow: 0 1.75rem 1.875rem rgb(0 0 0 / 8%), 0 1.25rem 1rem rgb(0 0 0 / 5%), 0 0.5rem 0.625rem rgb(0 0 0 / 4%), 0 0.25rem 0.25rem rgb(30 33 44 / 3%) !important;
}
</style>
