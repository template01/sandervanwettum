<template>
<!-- You can find this swiper instance object in current component by the "mySwiper"  -->
<div v-swiper:mySwiper="swiperOption" class="swiper-outer">

<!-- {{mobileSlides}} -->
  <div class="swiper-wrapper">
    <!-- {{slides}} -->
    <!-- {{mobileSlides}} -->
    <div class="swiper-slide " v-for="slide in test">
      <!-- {{slide.caption}} -->
      <!-- <div class="columns"> -->
        <!-- <div class="column Aligner"> -->
          {{slide}}
          <!-- <img :src="slide.sizes.large"> -->
        <!-- </div> -->
      <!-- </div> -->
    </div>
  </div>
  <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
</div>
</template>

<script>
export default {
  data: function() {
    return {
      test:[1,2,3,4],

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
      for (var i = 0, len = slides.length; i < len; i++) {
        // someFn();
        // console.log(slides[i].single_slide.length)
        for (var iSingle = 0, len = slides[i].single_slide.length; iSingle < len; iSingle++) {
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
    this.mySwiper.slideNext()
    
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
        // max-width: calc(100% - 30px);
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

        > .swiper-pagination-bullet {}
    }
}
</style>
