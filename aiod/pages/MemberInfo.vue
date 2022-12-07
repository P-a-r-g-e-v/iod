<template>
  <section style="background-image: url(assets/images/wrap-bg.svg)">
    <div class="container py-lg-6 py-xl-6 pb-4">
      <h2 class="h1 text-center text-white pt-6">Member Information</h2>
      <div
        class="row g-0 bg-dark bg-repeat-0 bg-position-center border rounded-3 overflow-hidden"
        style="background-image: url(assets/images/member-info.svg)"
      >
        <div
          class="col-md-5 bg-repeat-0 bg-position-top-center bg-size-cover"
          style="background-image: url(assets/images/01.jpg); min-height: 350px"
        ></div>
        <div class="col-md-7 py-xl-5 px-4">
          <div class="py-5 mx-auto" style="max-width: 530px">
            <div class="fs-xl text-light text-purple mb-2">
              Federation of Euro-Asian Stock Exchanges(FEAS)
            </div>
            <h2 class="h1 text-light mb-4">Courtney Alexander</h2>
            <p class="text-light opacity-90 pb-4 text-white">
              Dolor ipsum amet cursus quisque porta adipiscing. Lorem convallis
              malesuada sed maecenas. Ac dui at vitae mauris cursus in nullam
              porta sem. Quis pellentesque elementum ac bibendum. Nunc aliquam
              in tortor facilisis. Vulputate eget risus, metus phasellus.
              Pellentesque faucibus amet, eleifend diam quam condimentum
              convallis ultricies placerat. Duis habitasse placerat amet, odio
              pellentesque rhoncus, feugiat at. Eget pellentesque tristique
              felis magna fringilla.
            </p>
            <div class="d-flex flex-column flex-sm-row">
              <a href="#" class="btn-social me-1">
                <i class="ci-facebook"></i>
              </a>
              <a href="#" class="btn-social me-1">
                <i class="ci-twitter"></i>
              </a>
              <a href="#" class="btn-social">
                <i class="ci-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MemberInfo',
}
</script>

<style scopde>
.border {
  border: 1px solid rgba(99, 102, 241, 0.3) !important;
}

.btn-social:hover {
  color: grey;
}
</style>
