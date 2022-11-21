<template>
  <header class="header navbar navbar-expand-lg navbar-sticky navbar-floating">
    <div class="container-fluid px-0 px-xl-3">
      <NuxtLink class="navbar-brand order-lg-1 me-lg-5 ms-lg-5 pe-lg-2" to="/">
        <img
          style="filter: saturate(200%)"
          src="/assets/images/last.png"
          alt="AIoD Logo"
          width="55"
        />
      </NuxtLink>
      <div class="d-flex align-items-center order-lg-3 me-lg-4">
        <NuxtLink
          class="d-flex navbar-tool topbar-link text-decoration-none text-nowrap"
          :to="loggedInUser ? '/user/me' : '/user/login'"
        >
          <img
            class="icon navbar-tool-icon"
            width="55"
            src="/assets/images/login.png"
            alt=""
          />
          <div class="ms-2 ps-1">
            <h6 class="navbar-tool-title text-white">
              {{ loggedInUser ? loggedInUser.username : 'Sign in / up' }}
            </h6>
          </div>
        </NuxtLink>
        <button
          class="navbar-toggler ms-2 me-n3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse1"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <nav id="navbarCollapse1" class="collapse navbar-collapse order-lg-2">
        <ul class="navbar-nav ms-0 text-nowrap">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle active"
              href="#"
              data-bs-toggle="dropdown"
              >About us</a
            >
            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/">AIOD Mission</NuxtLink>
              </li>
              <li>
                <a class="dropdown-item" href="#">AIOD Vision</a>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="#"
                  >Member Services</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="#"
                  >Board of Directors</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="#">Executive team</NuxtLink>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  >Main Documents</a
                >
                <ul class="dropdown-menu">
                  <li>
                    <NuxtLink class="dropdown-item" to="/">Charter</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="/">Membership guidelines</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="#"
                      >-:-:-:- Guidelines</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="#">Etc.</NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              >Membership</a
            >
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">Member benefits</a>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="#"
                  >Membership types</NuxtLink
                >
              </li>
              <li>
                <a class="dropdown-item" href="services-single-v2.html"
                  >Membership criteria</a
                >
              </li>
              <li><a class="dropdown-item" href="">Payment page</a></li>
              <li>
                <NuxtLink class="dropdown-item" to="/"
                  >Continuous Professional Education Credits</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/"
                  >Membership fees</NuxtLink
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  >Apply for Membership</a
                >
                <ul class="dropdown-menu">
                  <ul class="dropdown-submenu">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      >Corporate Member</a
                    >
                    <ul class="dropdown-submenu">
                      <li>
                        <NuxtLink class="dropdown-item" to="/"
                          >Common Member</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="#"
                          >Sponsoring Member</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="dropdown-submenu">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      >Natural Person Members</a
                    >
                    <ul class="dropdown-submenu">
                      <li>
                        <NuxtLink class="dropdown-item" to="/"
                          >Full Members</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="#"
                          >Member Candidate</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
                </ul>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              >News & Events</a
            >
            <ul class="dropdown-menu">
              <ul class="dropdown-submenu">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      >News</a
                    >
                    <ul class="dropdown-submenu">
                      <li>
                        <NuxtLink class="dropdown-item" to="/"
                          >International news</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="#"
                          >Member news</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/newspage"
                          >AIOD news</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="dropdown-submenu">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      >Events</a
                    >
                    <ul class="dropdown-submenu">
                      <li>
                        <NuxtLink class="dropdown-item" to="/"
                          >Outside events</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="#"
                          >Member events</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink class="dropdown-item" to="/eventspage"
                          >AIOD events</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              >Publications</a
            >
            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/newspage"
                  >Periodic publications</NuxtLink
                >
              </li>
              <li>
                <a class="dropdown-item" href="careers.html">Research papers</a>
              </li>
              <li><a class="dropdown-item" href="contacts.html">Blog</a></li>
              <li><a class="dropdown-item" href="">Articles by AIOD and/or Members</a></li>
              <li>
                <NuxtLink class="dropdown-item" to="#">Etc.</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              >Partners</a
            >
            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/"
                  >AIOD Partners & Partnership news</NuxtLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              >Resources</a
            >
            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/"
                  >Useful links</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/"
                  >Learning platforms</NuxtLink
                >
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['loggedInUser']),
  },
  mounted() {
    window.addEventListener('scroll', function () {
      const header = document.querySelector('header')
      header.classList.toggle('navbar-stuck', window.scrollY > 0)
    })
  },
}
</script>

<style scoped>
.navbar-nav .nav-item:hover > .nav-link {
  color: #6366f1 !important;
}
.nav-link.active {
  color: #6366f1 !important;
}

.navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: #6366f1 !important;
}

a {
  color: white !important;
  text-decoration: none;
}

a:hover {
  color: #6366f1 !important;
  text-decoration: none;
}

.navbar-stuck {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-animation: navbar-show 0.195s;
  animation: navbar-show 0.195s;
  animation-duration: 0.195s;
  animation-timing-function: ease-in;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: navbar-show;
  background-color: rgba(12, 11, 11, 0.95) !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.75) !important;
  z-index: 1030;
}

/* header {
  position: fixed!important;
  display: flex!important;
  transition: 0.6s;
} */

.navbar-expand-lg .dropdown-menu {
  background-color: rgba(12, 11, 11, 0.95) !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.75) !important;
  border: 0.5px solid #6366f1;
}
</style>
