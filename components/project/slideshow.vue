<template>
<div class="projectSlideshow p-40 " :class="nighttime ? 'is-darkgray':''">
    <slideshowswiperdesktop class="is-hidden-touch" :slides="slides"></slideshowswiperdesktop>
  <slideshowswipermobile class="is-hidden-desktop"  :slides="slides"></slideshowswipermobile>
  <div class="nighttime mb-40 mr-40">
    <div v-if="nighttime" @click="$store.commit('SET_NIGHTTIME', false);" class="fullCircle is-white"></div>
    <div v-else @click="$store.commit('SET_NIGHTTIME', true);" class="halfCircle is-darkgray"></div>
  </div>
</div>
</template>
<script>
import slideshowswiperdesktop from '~/components/project/slideshow-swiper-desktop.vue'
import slideshowswipermobile from '~/components/project/slideshow-swiper-mobile.vue'
import {
  mapGetters
} from 'vuex'

export default {
  components: {
    slideshowswiperdesktop,
    slideshowswipermobile
  },
  computed: {
    ...mapGetters({
      nighttime: "nighttime"
    }),
  },
  props: ['slides']
}
</script>
<style lang="scss" scoped>
.projectSlideshow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: background 0.2s;
}
.nighttime {
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;

    .halfCircle {
        display: inline-block;
        height: 10px;
        width: 20px;
        cursor: pointer;
        transform: rotate(45deg);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .fullCircle {
        margin-bottom: -3px;
        // margin-right: -1px;
        display: inline-block;
        height: 20px;
        width: 20px;
        cursor: pointer;
        border-radius: 100%;
        -webkit-box-shadow: 0 0 1px 0px white;
        -moz-box-shadow: 0 0 1px 0px white;
        box-shadow: 0 0 1px 0px white;
    }

}
</style>
