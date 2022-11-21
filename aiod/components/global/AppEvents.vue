<template>
  <div data-filter-grid="">
    <!-- Filter navs -->
    <!-- Media tabs image -->
    <div
      data-simplebar=""
      data-simplebar-horizontal-top=""
      data-simplebar-auto-hide="false"
      class="pt-lg-0 pt-5"
    >
      <ul
        class="nav media-tabs flex-nowrap pb-lg-5 pb-sm-4 pb-3"
        role="tablist"
      >
        <li class="nav-item">
          <span
            class="nav-link active"
            data-toggle="tab"
            role="tab"
            data-filter="all"
          >
            <img
              class="media-tabs-icon mb-3 green-icon c-icon"
              src="assets/images/all-events.png"
              style="width: 48px"
              alt="All Events"
            />
            All Events
          </span>
        </li>

        <li v-for="item in categories.data" :key="item.id" class="nav-item">
          <span
            class="nav-link"
            data-toggle="tab"
            role="tab"
            :data-filter="'.' + item.attributes.FilterKey"
          >
            <nuxt-img
              class="media-tabs-icon mb-3 green-icon c-icon"
              provider="strapi"
              :src="item.attributes.Icon.data.attributes.url"
              style="width: 48px"
              :alt="item.attributes.Name"
            />
            {{ item.attributes.Name }}
          </span>
        </li>
      </ul>
    </div>

    <!-- Filterable grid of items -->
    <div class="row pt-lg-3">
      <!-- Grid item -->
      <div class="grid-item construction col-lg-4 col-sm-6 mb-grid-gutter">
        <!-- Portfolio card with slide effect -->
        <article>
          <NuxtLink class="portfolio-card-slide" to="/eventsingle">
            <div class="portfolio-card-img">
              <img src="assets/images/event01.jpg" alt="Card image" />
            </div>
            <div class="portfolio-card-body">
              <h3 class="portfolio-card-title text-white">Modern Challenges</h3>
              <div class="fs-sm text-muted">Elite Plaza</div>
              <div class="btn btn-outline-primary text-uppercase">
                View event
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- Grid item -->
      <div class="grid-item project-development col-lg-4 col-sm-6 mb-grid-gutter">
        <!-- Portfolio card with slide effect -->
        <article>
          <NuxtLink class="portfolio-card-slide" to="/eventsingle">
            <div class="portfolio-card-img">
              <img src="assets/images/event02.jpg" alt="Card image" />
            </div>
            <div class="portfolio-card-body">
              <h3 class="portfolio-card-title text-white">Qualification Standards</h3>
              <div class="fs-sm text-muted">Elite Plaza</div>
              <div class="btn btn-outline-primary text-uppercase">
                View event
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- Grid item -->
      <div
        class="grid-item project-development col-lg-4 col-sm-6 mb-grid-gutter"
      >
        <!-- Portfolio card with slide effect -->
        <article>
          <NuxtLink class="portfolio-card-slide" to="/eventsingle">
            <div class="portfolio-card-img">
              <img src="assets/images/event03.jpg" alt="Card image" />
            </div>
            <div class="portfolio-card-body">
              <h3 class="portfolio-card-title text-white">Leadership</h3>
              <div class="fs-sm text-muted">Elite Plaza</div>
              <div class="btn btn-outline-primary text-uppercase">
                View event
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- Grid item -->
      <div
        class="grid-item interior-design col-lg-4 col-sm-6 mb-grid-gutter"
      >
        <!-- Portfolio card with slide effect -->
        <article>
          <NuxtLink class="portfolio-card-slide" to="/eventsingle">
            <div class="portfolio-card-img">
              <img src="assets/images/event04.jpg" alt="Card image" />
            </div>
            <div class="portfolio-card-body">
              <h3 class="portfolio-card-title text-white">Armenian Associations</h3>
              <div class="fs-sm text-muted">Elite Plaza</div>
              <div class="btn btn-outline-primary text-uppercase">
                View event
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- Grid item -->
      <div
        class="grid-item interior-design col-lg-4 col-sm-6 mb-grid-gutter"
      >
        <!-- Portfolio card with slide effect -->
        <article>
          <NuxtLink class="portfolio-card-slide" to="/eventsingle">
            <div class="portfolio-card-img">
              <img src="assets/images/event05.jpg" alt="Card image" />
            </div>
            <div class="portfolio-card-body">
              <h3 class="portfolio-card-title text-white">Experience Sharing</h3>
              <div class="fs-sm text-muted">Business Center</div>
              <div class="btn btn-outline-primary text-uppercase">
                View event
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- Grid item -->
      <div class="grid-item construction col-lg-4 col-sm-6 mb-grid-gutter">
        <!-- Portfolio card with slide effect -->
        <article>
          <NuxtLink class="portfolio-card-slide" to="/eventsingle">
            <div class="portfolio-card-img">
              <img src="assets/images/event06.jpg" alt="Card image" />
            </div>
            <div class="portfolio-card-body">
              <h3 class="portfolio-card-title text-white">Productive Day</h3>
              <div class="fs-sm text-muted">Private Residence</div>
              <div class="btn btn-outline-primary text-uppercase">
                View event
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- Grid item -->
      <div class="grid-item construction col-lg-4 col-sm-6 mb-grid-gutter">
        <!-- Portfolio card with slide effect -->
        <article>
          <NuxtLink class="portfolio-card-slide" to="/eventsingle">
            <div class="portfolio-card-img">
              <img src="assets/images/event07.jpg" alt="Card image" />
            </div>
            <div class="portfolio-card-body">
              <h3 class="portfolio-card-title text-white">Public Sector</h3>
              <div class="fs-sm text-muted">Private Residence</div>
              <div class="btn btn-outline-primary text-uppercase">
                View event
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- Grid item -->
      <div
        class="grid-item interior-design repairs col-lg-4 col-sm-6 mb-grid-gutter"
      >
        <!-- Portfolio card with slide effect -->
        <article>
          <NuxtLink class="portfolio-card-slide" to="/eventsingle">
            <div class="portfolio-card-img">
              <img src="assets/images/event08.jpg" alt="Card image" />
            </div>
            <div class="portfolio-card-body">
              <h3 class="portfolio-card-title text-white">Governance</h3>
              <div class="fs-sm text-muted">Elite Plaza</div>
              <div class="btn btn-outline-primary text-uppercase">
                View event
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- Grid item -->
      <div
        class="grid-item project-development interior-design repairs col-lg-4 col-sm-6 mb-grid-gutter"
      >
        <!-- Portfolio card with slide effect -->
        <article>
          <NuxtLink class="portfolio-card-slide" to="/eventsingle">
            <div class="portfolio-card-img">
              <img src="assets/images/event09.jpg" alt="Card image" />
            </div>
            <div class="portfolio-card-body">
              <h3 class="portfolio-card-title text-white">
                Law Is Above All
              </h3>
              <div class="fs-sm text-muted">Elite Plaza</div>
              <div class="btn btn-outline-primary text-uppercase">
                View event
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
    <div class="mb-lg-5 mb-4 pt-3 text-center">
      <button
        class="btn btn-lg btn-link load-more-btn p-0 text-decoration-none"
        type="button"
      >
        <i class="ci-arrow-convert mt-n1 me-3 align-middle"></i>
        Load more
      </button>
    </div>
  </div>
</template>
<script>

import mixitup from 'mixitup';
export default {
  name: 'AppEvents',
  data () {
    return {
      msg: 'Vue.js & MixItUp example',
      mixer: null,
      categories: [],
      events: [],
    }
  },
  created() {
    this.getCategories();
    this.getEvents();
  },
  mounted() {
    setTimeout(() => {
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
    }, 1000);
  },
  methods: {
    async getCategories() {
      try {
        const results = await this.$strapi.find('categories', {
          populate: ['*']
        })
        this.categories = results;
      } catch (error) {
      }
    },
    async getEvents() {
      try {
        const results = await this.$strapi.find('events', {
          populate: ['*']
        })
        this.events = results;
      } catch (error) {
      }
    },
  }
}
</script>

<style scoped>
.media-tabs .nav-link.active,
.media-tabs .nav-link.active .media-tabs-icon {
  color: #fff;
}

/* .green-icon {
  filter: invert(66%) sepia(48%) saturate(364%) hue-rotate(105deg) brightness(90%) contrast(96%);
} */

.media-tabs .nav-link.active img[src*='.svg'].media-tabs-icon {
  filter: brightness(0) invert(1);
}

.media-tabs .nav-link.active {
  background-color: #6366f1!important;
  box-shadow: 0 1.5rem 1.875rem rgb(99 102 241 / 16%),
  0 1.25rem 1rem -0.25rem rgb(99 102 241 / 10%),
  0 0.5rem 0.625rem rgb(99 102 241 / 8%),
  0 0.25rem 0.25rem rgb(99 102 241 / 5%);
}

.nav-link.active .c-icon {
  filter: invert(98%) sepia(2%) saturate(6%) hue-rotate(32deg) brightness(103%)
    contrast(103%);
}

.portfolio-card-slide .portfolio-card-body {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 1.5rem;
  background-color: #6366f1!important;
  text-align: center;
  transform: translateY(4.25rem);
  transition: transform .25s ease-in-out;
  will-change: transform;
}
.portfolio-card-slide:hover .portfolio-card-body {
    transform: translateY(0);
}

.portfolio-card-slide:hover {
    text-decoration: none;
    box-shadow: 0 1.75rem 1.875rem rgb(99 102 241 / 16%), 0 1.25rem 1rem -0.25rem rgb(99 102 241 / 10%), 0 0.5rem 0.625rem rgb(99 102 241 / 8%), 0 0.25rem 0.25rem rgb(30 33 44 / 5%);
}
.portfolio-card-slide {
    display: block;
    position: relative;
    text-decoration: none;
    transition: box-shadow .25s ease-in-out;
    transition-property: box-shadow;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    overflow: hidden;
    box-shadow: 0 1.75rem 1.875rem rgb(99 102 241 / 8%), 0 1.25rem 1rem rgb(99 102 241 / 5%), 0 0.5rem 0.625rem rgb(99 102 241 / 4%), 0 0.25rem 0.25rem rgb(30 33 44 / 3%);
}

.text-muted {
  color: #DDD6CE!important;
}

</style>