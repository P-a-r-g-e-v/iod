<!-- eslint-disable vue/attributes-order -->
<template>
  <div>
    <!-- Page title-->
    <section class="py-md-6 py-5 jarallax" data-jarallax data-speed="0.8">
      <div class="container mt-5 py-lg-4">
        <nav aria-label="breadcrumb">
          <ol
            class="breadcrumb breadcrumb-alt breadcrumb-light justify-content-center mb-sm-4"
          >
            <li class="breadcrumb-item">
              <NuxtLink to="/">
                <i class="ci-home"></i>
              </NuxtLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Blog</li>
          </ol>
        </nav>
        <h1 class="display-1 text-center text-light">Blog</h1>
        <p
          class="mx-auto mb-sm-5 pb-3 lead text-center text-light opacity-60"
          style="max-width: 810px"
        >
          Thoughts, trends and up-to-date news in search and digital marketing.
          Subscribe to our blog and receive latest news weekly.
        </p>
        <form
          class="col-lg-6 col-md-8 col-sm-10 d-sm-block d-none mx-auto px-3"
        >
          <div class="input-group">
            <input
              id="search"
              class="form-control form-control-lg input-light"
              type="search"
              placeholder="Search the blog"
            />
            <button class="btn btn-primary" type="submit">Search</button>
          </div>
        </form>
        <form class="d-sm-none d-block">
          <div class="mb-4">
            <input
              id="search-m"
              class="form-control input-light"
              type="search"
              placeholder="Search the blog"
            />
            <button type="submit" class="btn btn-primary w-100 mt-3">
              Search
            </button>
          </div>
        </form>
      </div>

      <!-- Parallax bg -->
      <div
        class="jarallax-img bg-repeat-0"
        style="background-image: url(assets/images/page-title-bg2.jpeg)"
      ></div>
    </section>
    <!-- Page content -->
    <!-- Blog posts -->
    <section
      class="py-lg-6 py-5 bg-repeat-0 bg-position-center-bottom bg-size-contain"
      style="background-image: url(assets/images/stroke01.svg)"
    >
      <div class="container">
        <!-- Latest posts -->
        <div class="row">
          <div class="col-md-6 mb-sm-5 mb-4">
            <!-- Basic post with badge -->
            <article class="image-scale card border-0">
              <NuxtLink
                class="image-inner card-header mb-3 p-0 border-0 rounded position-relative"
                to="/blogsingle"
              >
                <span
                  class="badge bg-success badge-floating badge-floating-end p-2 fs-base fw-bold"
                >
                  Latest Post
                </span>
                <img src="assets/images/latest01.jpg" alt="Blog card image" />
              </NuxtLink>
              <div class="card-body p-0">
                <ul class="nav nav-muted mb-2">
                  <li class="nav-item me-2">
                    <a
                      class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                      href="#"
                    >
                      SEO
                    </a>
                    <span class="text-border px-1">|</span>
                  </li>
                  <li class="nav-item me-2">
                    <a
                      class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                      href="#"
                    >
                      <i class="ci-clock mt-n1 me-2 fs-base align-middle"></i>
                      July 5, 2020
                    </a>
                    <span class="text-border px-1">|</span>
                  </li>
                  <li class="nav-item me-2">
                    <a
                      class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                      href="#"
                    >
                      <i class="ci-profile mt-n1 me-2 fs-base align-middle"></i>
                      By Diane Mccoy
                    </a>
                  </li>
                </ul>
                <h3 class="h5 mb-3">
                  <NuxtLink class="nav-link text-white" to="/blogsingle">
                    How to Maximize Your ROI Through Scientific SEM?
                  </NuxtLink>
                </h3>
              </div>
              <div class="card-footer p-0 border-0">
                <div class="h6 mb-0">
                  <NuxtLink class="nav-link py-3 text-white" to="/blogsingle">Read more</NuxtLink>
                  <i
                    class="ci-arrow-right text-purple align-middle h5 mb-0 ms-2"
                  ></i>
                </div>
              </div>
            </article>
          </div>
          <div class="col-md-6 mb-sm-5 mb-4">
            <!-- Basic post with badge -->
            <article class="image-scale card border-0">
              <a
                class="image-inner card-header mb-3 p-0 border-0 rounded position-relative"
                href="#"
              >
                <span
                  class="badge bg-success badge-floating badge-floating-end p-2 fs-base fw-bold"
                >
                  Latest Post
                </span>
                <img src="assets/images/latest02.jpg" alt="Blog card image" />
              </a>
              <div class="card-body p-0">
                <ul class="nav nav-muted mb-2">
                  <li class="nav-item me-2">
                    <a
                      class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                      href="#"
                    >
                      Marketing
                    </a>
                    <span class="text-border px-1">|</span>
                  </li>
                  <li class="nav-item me-2">
                    <a
                      class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                      href="#"
                    >
                      <i class="ci-clock mt-n1 me-2 fs-base align-middle"></i>
                      July 2, 2020
                    </a>
                    <span class="text-border px-1">|</span>
                  </li>
                  <li class="nav-item me-2">
                    <a
                      class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                      href="#"
                    >
                      <i class="ci-profile mt-n1 me-2 fs-base align-middle"></i>
                      By Diane Mccoy
                    </a>
                  </li>
                </ul>
                <h3 class="h5 mb-3">
                  <a class="nav-link text-white" href="#">
                    The Basics of Blogging Search Engine Optimization.
                  </a>
                </h3>
              </div>
              <div class="card-footer p-0 border-0">
                <div class="h6 mb-0">
                  <a class="nav-link py-3 text-white" href="#">Read more</a>
                  <i
                    class="ci-arrow-right text-purple align-middle h5 mb-0 ms-2"
                  ></i>
                </div>
              </div>
            </article>
          </div>
        </div>

        <hr class="mt-0 mb-sm-5 mb-4" />

        <div class="row">
          <!-- All posts -->
          <div class="col-lg-8">
            <div class="row">
              <div class="col-sm-6 mb-sm-5 mb-4 pb-md-3">
                <article class="image-scale card h-100 border-0">
                  <a
                    class="image-inner card-header mb-3 p-0 border-0 rounded"
                    href="#"
                  >
                    <img src="assets/images/blog01.jpg" alt="Blog card image" />
                  </a>
                  <div class="card-body p-0">
                    <ul class="nav nav-muted mb-2">
                      <li class="nav-item me-2">
                        <a
                          class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          Marketing
                        </a>
                        <span class="text-border">|</span>
                      </li>
                      <li class="nav-item me-2">
                        <a
                          class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i
                            class="ci-clock mt-n1 me-2 fs-base align-middle"
                          ></i>
                          June 12, 2020
                        </a>
                        <span class="text-border">|</span>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-inline-block p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i
                            class="ci-profile mt-n1 me-2 fs-base align-middle"
                          ></i>
                          By Soham Alexander
                        </a>
                      </li>
                    </ul>
                    <h3 class="h5 mb-2">
                      <a class="nav-link text-white" href="#">
                        Digital Marketing Game: What You Need to Know to Stay
                        Ahead?
                      </a>
                    </h3>
                    <p class="mb-3">
                      Nunc nulla vestibulum nunc quam arcu tristique convallis.
                      Posuere augue pellentesque mauris gravida...
                    </p>
                  </div>
                  <div class="card-footer p-0 border-0">
                    <div class="h6 mb-0">
                      <a class="nav-link py-3 text-white" href="#">Read more</a>
                      <i
                        class="ci-arrow-right text-purple align-middle h5 mb-0 ms-2"
                      ></i>
                    </div>
                  </div>
                </article>
              </div>
              <div class="col-sm-6 mb-sm-5 mb-4 pb-md-3">
                <article class="image-scale card h-100 border-0">
                  <a
                    class="image-inner card-header mb-3 p-0 border-0 rounded"
                    href="#"
                  >
                    <img src="assets/images/blog02.jpg" alt="Blog card image" />
                  </a>
                  <div class="card-body p-0">
                    <ul class="nav nav-muted mb-2">
                      <li class="nav-item me-2">
                        <a
                          class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          Ad Tips
                        </a>
                        <span class="text-border">|</span>
                      </li>
                      <li class="nav-item me-2">
                        <a
                          class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i
                            class="ci-clock mt-n1 me-2 fs-base align-middle"
                          ></i>
                          June 6, 2020
                        </a>
                        <span class="text-border">|</span>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-inline-block p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i
                            class="ci-profile mt-n1 me-2 fs-base align-middle"
                          ></i>
                          By Shawn Edwards
                        </a>
                      </li>
                    </ul>
                    <h3 class="h5 mb-2">
                      <a class="nav-link text-white" href="#">
                        How to Evaluate and Compare Social Media Tools Today.
                      </a>
                    </h3>
                    <p class="mb-3">
                      Eu donec pellentesque et aliquet. Fringilla morbi etiam
                      turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae...
                    </p>
                  </div>
                  <div class="card-footer p-0 border-0">
                    <div class="h6 mb-0">
                      <a class="nav-link py-3 text-white" href="#">Read more</a>
                      <i
                        class="ci-arrow-right text-purple align-middle h5 mb-0 ms-2"
                      ></i>
                    </div>
                  </div>
                </article>
              </div>
              <div class="col-sm-6 mb-sm-5 mb-4 pb-md-3">
                <article class="image-scale card h-100 border-0">
                  <a
                    class="image-inner card-header mb-3 p-0 border-0 rounded"
                    href="#"
                  >
                    <img src="assets/images/blog03.jpg" alt="Blog card image" />
                  </a>
                  <div class="card-body p-0">
                    <ul class="nav nav-muted mb-2">
                      <li class="nav-item me-2">
                        <a
                          class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          SEO
                        </a>
                        <span class="text-border">|</span>
                      </li>
                      <li class="nav-item me-2">
                        <a
                          class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i
                            class="ci-clock mt-n1 me-2 fs-base align-middle"
                          ></i>
                          May 1, 2020
                        </a>
                        <span class="text-border">|</span>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-inline-block p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i
                            class="ci-profile mt-n1 me-2 fs-base align-middle"
                          ></i>
                          By Shawn Edwards
                        </a>
                      </li>
                    </ul>
                    <h3 class="h5 mb-2">
                      <a class="nav-link text-white" href="#">
                        The Best Practices to Optimize Your Website for Mobile.
                      </a>
                    </h3>
                    <p class="mb-3">
                      Pharetra, ullamcorper iaculis viverra parturient sed id
                      sed. Convallis proin dignissim lacus, purus gravida...
                    </p>
                  </div>
                  <div class="card-footer p-0 border-0">
                    <div class="h6 mb-0">
                      <a class="nav-link py-3 text-white" href="#">Read more</a>
                      <i
                        class="ci-arrow-right text-purple align-middle h5 mb-0 ms-2"
                      ></i>
                    </div>
                  </div>
                </article>
              </div>
              <div class="col-sm-6 mb-sm-5 mb-4 pb-md-3">
                <article class="image-scale card h-100 border-0">
                  <a
                    class="image-inner card-header mb-3 p-0 border-0 rounded"
                    href="#"
                  >
                    <img src="assets/images/blog04.jpg" alt="Blog card image" />
                  </a>
                  <div class="card-body p-0">
                    <ul class="nav nav-muted mb-2">
                      <li class="nav-item me-2">
                        <a
                          class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          Paid Search
                        </a>
                        <span class="text-border">|</span>
                      </li>
                      <li class="nav-item me-2">
                        <a
                          class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i
                            class="ci-clock mt-n1 me-2 fs-base align-middle"
                          ></i>
                          April 25, 2020
                        </a>
                        <span class="text-border">|</span>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-inline-block p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i
                            class="ci-profile mt-n1 me-2 fs-base align-middle"
                          ></i>
                          By Diane Mccoy
                        </a>
                      </li>
                    </ul>
                    <h3 class="h5 mb-2">
                      <a class="nav-link text-white" href="#">
                        10 Seriously Underused Paid Search Strategies.
                      </a>
                    </h3>
                    <p class="mb-3">
                      Euismod congue faucibus diam etiam diam netus vitae ornare
                      vitae. Cursus sollicitudin posuere venenatis...
                    </p>
                  </div>
                  <div class="card-footer p-0 border-0">
                    <div class="h6 mb-0">
                      <a class="nav-link py-3 text-white" href="#">Read more</a>
                      <i
                        class="ci-arrow-right text-purple align-middle h5 mb-0 ms-2"
                      ></i>
                    </div>
                  </div>
                </article>
              </div>
              <div class="col-sm-6 mb-sm-5 mb-4 pb-md-3">
                <article class="image-scale card h-100 border-0">
                  <a
                    class="image-inner card-header mb-3 p-0 border-0 rounded"
                    href="#"
                  >
                    <img src="assets/images/blog05.jpg" alt="Blog card image" />
                  </a>
                  <div class="card-body p-0">
                    <ul class="nav nav-muted mb-2">
                      <li class="nav-item me-2">
                        <a
                          class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          Media &amp; Press
                        </a>
                        <span class="text-border">|</span>
                      </li>
                      <li class="nav-item me-2">
                        <a
                          class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i
                            class="ci-clock mt-n1 me-2 fs-base align-middle"
                          ></i>
                          June 3, 2020
                        </a>
                        <span class="text-border">|</span>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-inline-block p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i
                            class="ci-profile mt-n1 me-2 fs-base align-middle"
                          ></i>
                          By Shawn Edwards
                        </a>
                      </li>
                    </ul>
                    <h3 class="h5 mb-2">
                      <a class="nav-link text-white" href="#">
                        How to Create Content That Gets Linked and Shared.
                      </a>
                    </h3>
                    <p class="mb-3">
                      Eu donec pellentesque et aliquet. Fringilla morbi etiam
                      turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae...
                    </p>
                  </div>
                  <div class="card-footer p-0 border-0">
                    <div class="h6 mb-0">
                      <a class="nav-link py-3 text-white" href="#">Read more</a>
                      <i
                        class="ci-arrow-right text-purple align-middle h5 mb-0 ms-2"
                      ></i>
                    </div>
                  </div>
                </article>
              </div>
              <div class="col-sm-6 mb-sm-5 mb-4 pb-md-3">
                <article class="image-scale card h-100 border-0">
                  <a
                    class="image-inner card-header mb-3 p-0 border-0 rounded"
                    href="#"
                  >
                    <img src="assets/images/blog06.jpg" alt="Blog card image" />
                  </a>
                  <div class="card-body p-0">
                    <ul class="nav nav-muted mb-2">
                      <li class="nav-item me-2">
                        <a
                          class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          Ad Tips
                        </a>
                        <span class="text-border">|</span>
                      </li>
                      <li class="nav-item me-2">
                        <a
                          class="nav-link d-inline-block me-2 p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i
                            class="ci-clock mt-n1 me-2 fs-base align-middle"
                          ></i>
                          March 18, 2020
                        </a>
                        <span class="text-border">|</span>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link d-inline-block p-0 fs-sm fw-normal"
                          href="#"
                        >
                          <i
                            class="ci-profile mt-n1 me-2 fs-base align-middle"
                          ></i>
                          By Jane Cooper
                        </a>
                      </li>
                    </ul>
                    <h3 class="h5 mb-2">
                      <a class="nav-link text-white" href="#">
                        12 Simple Tips to Creating an Effective Ad.
                      </a>
                    </h3>
                    <p class="mb-3">
                      Imperdiet risus consectetur dignissim lorem sollicitudin
                      eget bibendum pellentesque nec. Adipiscing viverra in non
                      euismod. Amet nulla aliquam nulla magna...
                    </p>
                  </div>
                  <div class="card-footer p-0 border-0">
                    <div class="h6 mb-0">
                      <a class="nav-link py-3 text-white" href="#">Read more</a>
                      <i
                        class="ci-arrow-right text-purple align-middle h5 mb-0 ms-2"
                      ></i>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <hr class="mt-0 mb-sm-5 mb-4" />

            <!-- Pagination -->
            <nav aria-label="Page navigation">
              <ul class="pagination mb-0">
                <li class="page-item d-sm-none">
                  <span class="page-link page-link-static">1 / 4</span>
                </li>
                <li class="page-item active d-none d-sm-block">
                  <span class="page-link"
                    >1
                    <span class="visually-hidden">(current)</span>
                  </span>
                </li>
                <li class="page-item d-none d-sm-block" aria-current="page">
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
                    Next
                    <i class="ci-arrow-right ms-2"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <!-- Sidebar -->
          <aside class="col-lg-4">
            <div
              class="offcanvas-lg offcanvas-center ps-lg-4 ps-xl-5"
              id="blog-sidebar"
            >
              <div class="offcanvas-header align-items-center mb-3">
                <h5 class="h4 mb-0 text-purple">Sidebar</h5>
                <button
                  class="btn-close me-n1"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#blog-sidebar"
                  aria-label="Close"
                ></button>
              </div>
              <div
                class="offcanvas-body py-4 py-lg-0"
                data-simplebar
                data-simplebar-auto-hide="true"
              >
                <!-- Widget: Categories -->
                <div class="widget widget-categories mb-lg-5 mb-4 pb-1">
                  <h3 class="h4 text-white">Blog Categories</h3>
                  <hr />
                  <ul class="nav nav-dark">
                    <li>
                      <a href="#" class="nav-link">
                        <span>All</span>
                        <span class="ps-2 fw-normal text-white">25</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="nav-link">
                        <span>Media &amp; Press</span>
                        <span class="ps-2 fw-normal text-white">3</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="nav-link">
                        <span>Ad Tips</span>
                        <span class="ps-2 fw-normal text-white">7</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="nav-link">
                        <span>SEO</span>
                        <span class="ps-2 fw-normal text-white">9</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="nav-link">
                        <span>Paid Search</span>
                        <span class="ps-2 fw-normal text-white">2</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <!--  / Sidebar -->
        </div>
      </div>
    </section>

    <!-- Offcanvas toggle btn -->
    <button
      class="btn btn-primary btn sidebar-toggle justify-content-center"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#blog-sidebar"
      data-fixed-element
    >
      <i class="ci-sidebar-right fs-base me-1"></i>
      Sidebar
    </button>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
}
</script>

<style scoped>
@media (max-width: 991.98px) {
  .sidebar-toggle {
    display: inline-flex;
  }

  .offcanvas-lg.showing,
  .offcanvas-lg.show:not(.hiding) {
    transform: none;
  }

  .offcanvas-lg.showing,
  .offcanvas-lg.hiding,
  .offcanvas-lg.show {
    visibility: visible;
  }

  .offcanvas-lg.offcanvas-center {
    top: 0;
    right: 0;
    width: 22.5rem;
    transform: translateX(100%);
  }

  span {
    color: #6366f1 !important;
  }

  span.badge {
    color: white!important;
  }

  #blog-sidebar {
    background-color: #000000;
  }

  .btn-close {
    background-color: #6366f1 !important;
  }
}

@media (min-width: 991.98px) {
  span {
    color: white!important;
  }
}

.bg-success {
  background-color: #6366f1 !important;
}

.card {
  background-color: #232323;
}

a:hover {
  color: #6366f1 !important;
}

.nav-link span:hover {
  color: #6366f1 !important;
}

p {
  color: rgba(255, 255, 255, 0.75) !important;
}

hr {
  color: #6366f1 !important;
}

.btn-tag:hover {
  border-color: #6366f1 !important;
  color: #6366f1 !important;
  text-decoration: none;
}

.page-link:focus {
  color: #6366f1 !important;
}

.page-item.active .page-link {
  color: #6366f1 !important;
}

.widget .nav-link:hover {
  color: #6366f1 !important;
}
</style>
