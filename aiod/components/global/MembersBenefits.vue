<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <!-- Benefits -->
  <section id="benefits" class="bg-royal-black">
    <div class="container pt-lg-6 pt-5 pb-4">
      <h2 class="h1 mb-md-5 pb-2 text-center text-white"
            data-aos="fade-down"
            data-aos-offset="300"
            data-aos-delay="330"
            data-aos-duration="1050"
            data-aos-once="true">Our benefits</h2>
      <div class="row justify-content-center">
        <div
          class="col-md-4 col-sm-6 col-11 d-flex flex-column order-md-1 order-2"
        >
          <div
            class="card card-hover h-100 mb-sm-4 mb-md-3 mb-grid-gutter py-3 text-center"
            data-aos="fade-up"
            data-aos-offset="330"
            data-aos-delay="350"
            data-aos-duration="1050"
            data-aos-once="true"
          >
            <div class="card-body px-lg-5 px-3">
              <h3 class="h5 mb-2 text-white">Training</h3>
              <p class="mb-0 fs-sm text-white">
                Advance your knowledge and skills with professional development
                training created by directors for directors. Courses range from
                one-day sessions to full qualifications. Reduced rates for
                members
              </p>
            </div>
          </div>
          <div
            class="card card-hover h-100 mb-sm-4 mb-md-3 mb-grid-gutter py-3 text-center"
            data-aos="fade-up"
            data-aos-offset="360"
            data-aos-delay="650"
            data-aos-duration="1100"
            data-aos-once="true"
          >
            <div class="card-body px-lg-5 px-3">
              <h3 class="h5 mb-2 text-white">Events</h3>
              <p class="mb-0 fs-sm text-white">
                Learn, share experience and connect with fellow directors and
                leaders virtually and in-person at events hosted at IoD hubs
                across the UK and beyond. Usually free to members.
              </p>
            </div>
          </div>
          <div
            class="card card-hover h-100 mb-sm-4 mb-md-3 mb-grid-gutter py-3 text-center"
            data-aos="fade-up"
            data-aos-offset="390"
            data-aos-delay="950"
            data-aos-duration="1150"
            data-aos-once="true"
          >
            <div class="card-body px-lg-5 px-3">
              <h3 class="h5 mb-2 text-white">Advice</h3>
              <p class="mb-0 fs-sm text-white">
                Get unbiased, confidential advice on strategic and operational
                challenges from our business, tax and legal experts as part of
                our Information and Advisory Service. Free to full IoD members.
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-md-4 col-sm-7 col-9 align-self-center order-md-2 order-1 mb-md-0 mb-grid-gutter pb-md-0 pb-2 px-md-0 px-sm-5"
        >
          <div class="parallax mx-auto text-center">
            <img
              src="assets/images/benefits.jpg"
              alt=""
              style="border-radius: 0.6rem"
            />
          </div>
        </div>
        <div
          class="col-md-4 col-sm-6 col-11 d-flex flex-column order-md-3 order-3"
        >
          <div
            class="card card-hover h-100 mb-sm-4 mb-md-3 mb-grid-gutter py-3 text-center"
            data-aos="fade-up"
            data-aos-offset="330"
            data-aos-delay="350"
            data-aos-duration="1050"
            data-aos-once="true"
          >
            <div class="card-body px-lg-5 px-3">
              <h3 class="h5 mb-2 text-white">Influence</h3>
              <p class="mb-0 fs-sm text-white">
                Be heard. The IoD is its members’ voice to UK government,
                influencing the debate, shaping the agenda and advocating change
                through surveys and commissions. Free to members.
              </p>
            </div>
          </div>
          <div
            class="card card-hover h-100 mb-sm-4 mb-md-3 mb-grid-gutter py-3 text-center"
            data-aos="fade-up"
            data-aos-offset="360"
            data-aos-delay="650"
            data-aos-duration="1100"
            data-aos-once="true"
          >
            <div class="card-body px-lg-5 px-3">
              <h3 class="h5 mb-2 text-white">Insight</h3>
              <p class="mb-0 fs-sm text-white">
                Get information to help you manage and grow your business, with
                resources, guides and factsheets written by the IoD’s research
                team, based on real business queries. Free to members.
              </p>
            </div>
          </div>
          <div
            class="card card-hover h-100 mb-sm-4 mb-md-3 mb-grid-gutter py-3 text-center"
            data-aos="fade-up"
            data-aos-offset="390"
            data-aos-delay="950"
            data-aos-duration="1150"
            data-aos-once="true"
          >
            <div class="card-body px-lg-5 px-3">
              <h3 class="h5 mb-2 text-white">Workspace</h3>
              <p class="mb-0 fs-sm text-white">
                Make one of our hubs your office. Book flexible workspaces and
                private rooms or take advantage of our free meeting areas. We
                also offer members a virtual office service. Reduced rates for
                members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MembersBenefits',
}
</script>

<style scoped>
.card-hover {
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  transition-duration: 0.2s, 0.2s;
  transition-timing-function: ease-in-out, ease-in-out;
  transition-delay: 0s, 0s;
  transition-property: border-color, box-shadow;
}

.card {
  background-color: #6366f1 !important;
  border-color: #6366f1 !important;
}

.card:hover {
  transition: transform 0.2s ease-in-out, border-color 0.2s ease-in-out,
    background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  transition-property: transform, border-color, background-color, box-shadow;
  transition-duration: 0.2s, 0.2s, 0.2s, 0.2s;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;
  transition-delay: 0s, 0s, 0s, 0s;
  transform: translateY(-0.25rem);
  box-shadow: 0 1.75rem 1.875rem rgba(99, 102, 241, 0.16),
    0 1.25rem 1rem rgba(99, 102, 241, 0.1),
    0 0.5rem 0.625rem rgba(99, 102, 241, text-white 0.08),
    0 0.25rem 0.25rem rgba(30, 33, 44, 0.06) !important;
}
</style>
