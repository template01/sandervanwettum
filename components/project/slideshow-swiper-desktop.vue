<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption" class="swiper-outer">
    <div class="swiper-wrapper">
      <!-- {{slides}} -->
      <div class="swiper-slide" v-for="slide in slides">
        <!-- {{slide.caption}} -->
        <div class="columns">
          <div class="column Aligner" v-for="singleslide in slide.single_slide">
            <img :src="singleslide.sizes.large">
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {

      swiperOption: {
        loop: true,
        // slidesPerView: 'auto',
        // centeredSlides: true,
        // spaceBetween: 30,
        wrapperClass: 'swiper-wrapper',
        slideClass: 'swiper-slide',
        // pagination: {
        //   el: '.swiper-pagination',
        //   dynamicBullets: true
        // },
        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this);
          },
          tap() {
            console.log('onTap', this);
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  props: ['slides',],
  methods: {
    nextSlide: function() {
      this.mySwiper.slideNext()
      console.log('next')
    },
    prevSlide: function() {
      this.mySwiper.slidePrev()
      console.log('prev')
    },

  },

}
</script>

<style>

</style>

<style lang="scss" scoped>

.swiper-outer{
   height: 100%;
}

  .swiper-wrapper {


    .Aligner {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .Aligner-item {
      max-width: 50%;
    }

    .Aligner-item--top {
      align-self: flex-start;
    }

    .Aligner-item--bottom {
      align-self: flex-end;
    }

    // height: calc(100vh - 100px);
    width: 100%;
    // z-index: -1;

    img{
      margin: 0 auto;
      width: auto;
      max-height: calc(100vh - 220px);
      display: block;
    }

    .swiper-slide {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-pagination {

      > .swiper-pagination-bullet {
      }
    }
  }
</style>
