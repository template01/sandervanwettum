<template>
<!-- You can find this swiper instance object in current component by the "mySwiper"  -->
<span>

  <div v-swiper:mySwiper="swiperOption" class="swiper-outer fadein-on-load">
    <div class="swiper-nav swiper-nav-prev" @click="prevSlide()">
    </div>
    <div class="swiper-nav swiper-nav-next" @click="nextSlide()">
    </div>
    <div class="swiper-wrapper">
      <!-- {{slides}} -->
      <div class="swiper-slide " v-for="slide in slides">
        <!-- {{slide.caption}} -->
        <div class="columns is-gapless">
          <div class="column Aligner" v-for="(singleslide,index) in slide.single_slide">
            <template v-if="slide.single_slide.length > 1">
              <span class="mr-20" v-if="index === 0">
                <img :src="singleslide.sizes.large">
              </span>
              <span class="ml-20" v-else-if="index === slide.single_slide.length - 1">
                <img :src="singleslide.sizes.large">
              </span>
              <span class="mr-20 ml-20" v-else>
                <img :src="singleslide.sizes.large">
              </span>
            </template>
            <template v-else>
              <span >
                <img :src="singleslide.sizes.large">
              </span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="m-40 slideshow-caption">
    <span class="pr-40">{{slideIndex + 1}} / {{slides.length}} </span>
    <span class=""> {{caption}} </span>
  </div>
</span>
</template>

<script>

export default {

  data: function() {
    var vm = this
    return {

      slideIndex:'',
      caption:'',

      swiperOption: {
        loop: true,
        // slidesPerView: 'auto',
        // centeredSlides: true,
        // spaceBetween: 30,
        effect: 'fade',
        preloadImages: false,
        lazyLoading: true,
        wrapperClass: 'swiper-wrapper',
        slideClass: 'swiper-slide',
        // setTranslate:
        // pagination: {
        //   el: '.swiper-pagination',
        //   dynamicBullets: true
        // },
        on: {

          init(){
            // vm.test='hey'
            // console.log(vm.test)
          },
          slideChange() {
            console.log('onSlideChangeEnd', this);
            vm.slideIndex = this.realIndex
            vm.caption = vm.slides[0].caption
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
  props: ['slides'],
  methods: {
    nextSlide: function() {
      this.mySwiper.slideNext()
      // console.log(this.mySwiper)
    },
    prevSlide: function() {
      this.mySwiper.slidePrev()
      console.log('prev')
    },

  },

  mounted() {
    // alert('hye')
    console.log(this.mySwiper)
    console.log(this.mySwiper)
    console.log(this.mySwiper)
    console.log(this.mySwiper)
    console.log(this.mySwiper)
    console.log(this.mySwiper)
    // this.mySwiper.slideNext()
  }
}
</script>

<style>

</style>

<style lang="scss" scoped>
.slideshow-caption{
  position: absolute;
  bottom: 0;
  left:0;
}
.swiper-outer {

    height: calc(100% - 80px);
    margin-top: 40px;

    .swiper-nav {
        height: 100%;
        width: 50%;
        position: absolute;
        z-index: 2;

        &.swiper-nav-next {
            // display: none;
            right: 0;
            cursor: e-resize;
        }
        &.swiper-nav-prev {
            // display: none;
            cursor: w-resize;
        }

    }
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
        max-height: calc(100vh - 160px);
        display: block;
    }

    .swiper-slide {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0 !important;
    }
    .swiper-slide-active {
        opacity: 1 !important;
    }
    .swiper-pagination {

        > .swiper-pagination-bullet {}
    }
}
</style>
