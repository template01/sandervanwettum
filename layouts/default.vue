<template>
<div>
  <transition name="fade">

  <div id="appInner" :style="getappinitated ? {'opacity':'1'}:{'opacity':'0'}">

    <div class="columns is-gapless">
      <div class="column">
        <!-- <template "v-if="scrsize === 'is-screen-l' || scrsize === 'is-screen-xl'""> -->
        <div class="is-hidden-touch" :class="scrsize">
          <headercomp :class="nighttime ? 'is-white-text':''" :secondtitle="getviewing" :passedSrcsize="scrsize" :title="'Sander van Wettum'" :icon="'openreadmore'"></headercomp>
        </div>
        <div class="is-hidden-desktop" :class="scrsize">
          <headercomp :class="nighttime ? 'is-white-text':''" :secondtitle="getviewing" :passedSrcsize="scrsize" :title="'Sander van Wettum'" :icon="'menu'"></headercomp>
        </div>
      </div>
      <!-- <div v-if="scrsize === 'is-screen-l' || scrsize === 'is-screen-xl'" class="column"> -->
      <div class="column is-hidden-touch">
        <headercomp :class="nighttime ? 'is-white-text':''" :title="''" :icon="'menu'"></headercomp>
      </div>
    </div>
    <menucomp :projects="''">
    </menucomp>

    <nuxt class="mb-20 ml-20 mr-20" />
  </div>
</transition>

  <transition name="fade">
  <div class="appinitLoading columns is-gapless" v-show="!getappinitated">
    <headercomp :icon="'loading'"></headercomp>
  </div>
</transition>
</div>
</template>

<script>
import headercomp from '~/components/header/headercomp.vue'
import menucomp from '~/components/menu/menucomp.vue'
// import menufilter from '~/components/filter/menufilter.vue'

import {
  mapGetters
} from 'vuex'

export default {
  components: {
    headercomp,
    menucomp,
    // menufilter
  },
  computed: {
    ...mapGetters({
      nighttime: 'nighttime',
      getviewing: "getviewing",
      scrsize: "scrsize",
      getappinitated: "getappinitated",
    }),
  },

}
</script>


<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.appInner{
  overflow: hidden;
}
.appinitLoading{
  position: absolute;
  top:0;
}
</style>
