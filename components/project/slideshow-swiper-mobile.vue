<template>
<div v-swiper:mySwiper="swiperOption" class="swiper-outer">

  <div class="swiper-wrapper">
    <div class="swiper-slide " v-for="slide in mobileSlides">
      <div class="columns">
          <img :src="slide.sizes.large">
      </div>
    </div>
  </div>
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
    },
    mobileSlides() {

      var mobileSlides = []
      var slides = this.slides
      console.log(slides)
      console.log(slides.length)
      for (var i = 0, len = slides.length; i < len; i++) {
        // someFn();
        console.log('goooo')
        console.log(slides[i].single_slide.length)
        for (var iSingle = 0, lenSingle = slides[i].single_slide.length; iSingle < lenSingle; iSingle++) {
          // someFn();
          // console.log(slides[i].single_slide[iSingle])
          mobileSlides.push(slides[i].single_slide[iSingle])
        }
      }
      return mobileSlides;
    }
  },
  props: ['slides', ],
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
  mounted(){
    // this.mobileSlides()
  }

}
</script>

<style>

</style>

<style lang="scss" scoped>
.swiper-outer {
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

    img {
        margin: 0 auto;
        width: auto;
        max-width: calc(100% - 30px);
        max-height: calc(100vh - 100px);
        display: block;
    }

    .swiper-slide {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-pagination {

        > .swiper-pagination-bullet {}
    }
}
</style>
