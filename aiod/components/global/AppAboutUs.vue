<!-- eslint-disable vue/attributes-order -->
<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <!-- Page content-->
  <!-- Video Background -->
  <section class="bg-responsive" id="about-us">
    <video-background
      src="assets/images/wrap-video.mp4"
      :sources="[
        { src: 'assets/images/wrap-video.mp4', res: 350, autoplay: true },
      ]"
      style="height: 100vh; max-height: 100vh"
    >
      <div class="wrap-content wrap-content-inner">
        <div class="container pb-sm-6 d-block">
          <div class="card bg-transparent pt-5 border-0">
            <div class="card-body wrap-card-bg scroll-body">
              <h2
                class="text-white fw-lighter text-center from-start"
                  data-aos="fade-up"
                  data-aos-offset="350"
                  data-aos-delay="250"
                  data-aos-duration="1050"
                  data-aos-once="true"
              >
                About us
              </h2>
              <h5
                class="text-white fw-lighter lh text-center from-start"
                  data-aos="fade-up"
                  data-aos-offset="350"
                  data-aos-delay="350"
                  data-aos-duration="1150"
                  data-aos-once="true"
              >
                The Armenian Institute of Directors (AIoD) was founded in the
                last quarter of 2014, with advisory assistance of the
                International Finance Corporation. <br />
                <h5
                  class="pt-4 text-white fw-lighter lh text-center from-start"
                    data-aos="fade-up"
                    data-aos-offset="350"
                    data-aos-delay="450"
                    data-aos-duration="1250"
                    data-aos-once="true"
                >
                  The AIoD is a non-governmental organization, with the mission
                  to promote the role of an effective director. The institute
                  undertakes the role of the “intellectual leader” in the field
                  of effective corporate governance that will serve for
                  Armenia’s economic development and welfare of Armenian
                  society. he members of the AIoD are professionals and experts
                  in the fields of finance and banking, law and accounting,
                  investment affairs and corporate governance, whose aims is to
                  contribute to the establishment of companies’ Board Members as
                  their governing bodies and improvement of their productivity.
                  Moreover, to contribute to the improvement of professionalism,
                  experience, and status of board members and directors in
                  Armenia, and to assist the directors in matters related to
                  their activities. Membership will equip you with a range of
                  resources - including access to business information,
                  training, professional expertise, networking opportunities.
                  All resources are designed to help you strengthen, increase
                  your knowledge, skills and build on your own success.
                </h5>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </video-background>
  </section>
</template>

<script>
export default {
  name: 'AppAboutUs',
}
</script>

<style scoped>
html,
body {
  scroll-behavior: smooth !important;
}

@media screen and (max-width: 700px) {
  .scroll-body {
    display: flexbox;
    overflow-y: scroll !important;
    scroll-behavior: smooth;
    height: 100vh;
  }

  .scroll-body::-webkit-scrollbar {
    width: 0.15rem !important;
  }

  .card-body {
    padding-bottom: 3rem;
  }
}

@media screen and (min-width: 700px) {
  .card {
    border: none;
    transform: translateY(+10%) !important;
  }
}
.wrap-content {
  width: 100vh;
  height: 100vh;
  position: center !important;
}

.wrap-content-inner {
  width: inherit;
  height: inherit;
  background-color: rgba(255, 255, 255, 0.03);
  scroll-behavior: smooth;
  backdrop-filter: blur(0.35rem);
}

.wrap-card-bg {
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 0.6rem;
}

.lh {
  line-height: 170%;
}
</style>
