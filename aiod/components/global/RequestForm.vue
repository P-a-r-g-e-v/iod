<template>
  <div>
     <!-- Details -->
      <section class="py-5 jarallax" data-jarallax="" data-speed="0.8">

        <!-- Parallax bg -->
        <div class="jarallax-img" style="background-image: url(/assets/images/request-form.png);"></div>

        <!-- Content -->
        <div class="container py-4">
          <div class="ms-md-auto me-md-0 mx-auto position-relative" style="max-width: 495px;">

            <!-- Details form -->
            <div class="circle"></div>
            <div class="circle"></div>
            <form class="py-5 px-sm-5 px-4 bg-glass rounded-4 shadow-lg">
              <h2 class="h3 text-center">A quick way to discuss details</h2>
              <div class="mb-4">
                <label for="detail-name" class="form-label">Name*</label>
                <input id="detail-name" class="form-control" type="text" placeholder="Your name" required="">
              </div>
              <div class="mb-4">
                <label for="detail-tel" class="form-label">Phone*</label>
                <input id="detail-tel" class="form-control" type="tel" placeholder="Your phone number" required="">
              </div>
              <div class="mb-4">
                <label for="detail-email" class="form-label">Email</label>
                <input id="detail-email" class="form-control" type="email" placeholder="Your working email">
              </div>
              <div class="mb-4">
                <label for="detail-message" class="form-label">Message*</label>
                <textarea id="detail-message" class="form-control" rows="2" placeholder="Your message" required=""></textarea>
              </div>
              <div class="mb-4 form-check">
                <input id="detail-subscribe" class="form-check-input" type="checkbox" checked="">
                <label for="detail-subscribe" class="form-check-label fs-sm">I agree to receive communications from AIoD.</label>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary text-uppercase">Send request</button>
              </div>
            </form>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'RequestForm'
}
</script>

<style scoped>
@media only screen and (min-width: 1340px) {
  .circle {
  width: 11.25rem;
  height: 11.25rem;
  background: radial-gradient(#6366f1, #4044ee);
  border-radius: 50%;
  position: absolute;
  animation: move-up 2.5s ease-in-out infinite alternate-reverse;
  z-index: -1;
}

.circle:nth-child(1) {
  top: -25px;
  left: -25px;
}
.circle:nth-child(2) {
  bottom: -25px;
  right: -25px;
  animation-name: move-down;
}

@keyframes move-up {
  to{
    transform: translateY(-25px) translateX(-25px);
  }
}
@keyframes move-down {
  to{
    transform: translateY(25px) translateX(25px);
  }
}
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

.form-check-input:checked {
  background-color: #6366f1 !important;
  border-color: #6366f1 !important;
}

.bg-glass {
  background-color: rgba(255, 255, 255, .05);
  box-shadow: 0 0 10px
  rgba(0, 0, 0, 0.25);
  backdrop-filter:saturate(115%) blur(10px);
}

.form-label {
  color: black!important;
}
</style>