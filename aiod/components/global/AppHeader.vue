<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <header
    class="header navbar navbar-expand-lg navbar-sticky navbar-floating"
  >
    <div class="container-fluid px-0 px-xl-3">
      <NuxtLink class="navbar-brand order-lg-1 me-lg-5 ms-lg-5 pe-lg-2" to="/">
        <img
          style="filter: saturate(200%);"
          src="/assets/images/last.png"
          alt="AIoD Logo"
          width="55"
        />
      </NuxtLink>
      <div class="d-flex align-items-center order-lg-3 me-lg-4">
        <NuxtLink class="d-flex navbar-tool topbar-link text-decoration-none text-nowrap" :to="loggedInUser ? '/user/me' : '/user/login'">
          <img class="icon navbar-tool-icon" width="55" src="/assets/images/login.png" alt="">
          <div class="ms-2 ps-1">
            <h6 class="navbar-tool-title text-white">{{ loggedInUser ? loggedInUser.username : 'Sign in / up' }}</h6>
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
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              >About</a
            >
            <ul class="dropdown-menu">
              <li><NuxtLink class="dropdown-item" to="/#history">History</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/#about-us">About us</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="#">Charter and Documents</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/#faq">FAQ</NuxtLink></li>
              <li><NuxtLink class="dropdown-item" to="/#contacts">Contacts</NuxtLink></li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  data-bs-toggle="dropdown"
                  >Structure and Leadership</a
                >
                <ul class="dropdown-menu">
                  <li>
                    <NuxtLink class="dropdown-item" to="/">Structure</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="/">Managment</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" to="/">Committees</NuxtLink>
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
              >What We Do</a
            >
            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="#"
                  >Educational Programs</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/eventspage"
                  >Events</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="#"
                  >Publications</NuxtLink
                >
              </li>
              <li><NuxtLink class="dropdown-item" to="#">AIoD TV</NuxtLink></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              >Our Members</a
            >
            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/memberspage" >Members</NuxtLink>
              </li>
              <li>
                <a class="dropdown-item" href="/memberspage#benefits"
                  >Membership Benefits</a
                >
              </li>
              <li><NuxtLink class="dropdown-item" to="/memberspage#join-us">Join AIoD</NuxtLink></li>
              <li><a class="dropdown-item" href="">Opportunities</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              >News</a
            >
            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/newspage">AIoD News</NuxtLink>
              </li>
              <li><a class="dropdown-item" href="#">Industry News</a></li>
              <li><a class="dropdown-item" href="">Blog</a></li>
              <li><a class="dropdown-item" href="">Gallery</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <NuxtLink
              class="nav-link dropdown-toggle"
              to="/memberarea"
              data-bs-toggle="dropdown"
              >Member Area</NuxtLink
            >
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#"
                  >Private Documents</a
                >
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/memberpage">Membership Payment Tool</NuxtLink>
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
  mounted(){
    window.addEventListener("scroll", function(){
      const header = document.querySelector("header");
      header.classList.toggle("navbar-stuck", window.scrollY > 0);
    })
  }
}

</script>

<style scoped>

.navbar-nav .nav-item:hover>.nav-link {
  color: #6366f1!important;
}
.nav-link.active {
  color: #6366f1!important;
}

.navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
  color: #6366f1!important;
}

a {
  color:  white!important;
  text-decoration: none;
}

a:hover {
  color:  #6366f1!important;
  text-decoration: none;
}

.navbar-stuck {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-animation: navbar-show .195s;
  animation: navbar-show .195s;
  animation-duration: 0.195s;
  animation-timing-function: ease-in;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: navbar-show;
  background-color: rgba(12, 11, 11, 0.95)!important;
  box-shadow: 0 0 10px
  rgba(0, 0, 0, .75)!important;
  z-index: 1030;
}

/* header {
  position: fixed!important;
  display: flex!important;
  transition: 0.6s;
} */


.navbar-expand-lg .dropdown-menu {
  background-color: rgba(12, 11, 11, 0.95) !important;
  box-shadow: 0 0 10px
  rgba(0, 0, 0, .75) !important;
  border: .5px solid #6366f1;
}
</style>
