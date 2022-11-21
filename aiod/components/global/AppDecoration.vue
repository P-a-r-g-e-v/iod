<template>
  <section class="bg-royal-grey">
    <div class="container">
        <div class="row">
            <div class="col py-6 d-flex justify-content-center">

                <div class="card bg-glass pb-6">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="z-index">
                        <img src="/assets/images/login-decoration.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.card {
    width: auto;
    height: 280px;
    align-content: center!important;
    background: white;
    background: linear-gradient(
        to left bottom,
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.1)
    );
    border-radius: 0.6rem;
    border: none;
}

@media only screen and (min-width: 1340px) {
  .circle {
  width: 11.25rem;
  height: 11.25rem;
  background: radial-gradient(#6366f1, #4044ee);
  border-radius: 50%;
  position: absolute;
  animation: move-up 2.5s ease-in-out infinite alternate-reverse;
  z-index: 1;
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

.z-index {
    z-index: 1020!important;
}

img {
    transform: translateY(-80px);
}
</style>