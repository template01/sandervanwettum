<template>
<div>
  <transition name="fade">

  <div id="appInner" :style="getappinitated ? {'opacity':'1'}:{'opacity':'0'}">

    <div class="columns is-gapless">
      <div class="column">
        <div class="is-hidden-touch" :class="scrsize">
          <headercomp v-if="$route.path === '/'" :class="nighttime ? 'is-white-text':''" :secondtitle="''" :passedSrcsize="scrsize" :title="'Sander van Wettum'" :icon="'openreadmore'"></headercomp>
          <headercomp v-else :class="nighttime ? 'is-white-text':''" :secondtitle="getviewing" :passedSrcsize="scrsize" :title="'Sander van Wettum'" :icon="'openreadmore'"></headercomp>
        </div>
        <div class="is-hidden-desktop" :class="scrsize">
          <headercomp v-if="$route.path === '/'" :class="nighttime ? 'is-white-text':''" :secondtitle="''" :passedSrcsize="scrsize" :title="'Sander van Wettum'" :icon="'menu'"></headercomp>
          <headercomp v-else :class="nighttime ? 'is-white-text':''" :secondtitle="getviewing" :passedSrcsize="scrsize" :title="'Sander van Wettum'" :icon="'menu'"></headercomp>
        </div>
      </div>
      <div class="column is-hidden-touch">
        <headercomp :class="nighttime ? 'is-white-text':''" :title="''" :icon="'menu'"></headercomp>
      </div>
    </div>

    <aboutcomp></aboutcomp>

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
import aboutcomp from '~/components/menu/aboutcomp.vue'

// import menufilter from '~/components/filter/menufilter.vue'

import {
  mapGetters
} from 'vuex'

export default {
  components: {
    headercomp,
    menucomp,
    aboutcomp
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

  watch: {
    '$route' (to, from) {
      if (!to.query.about) {

        this.$store.commit('SET_MENU', false);
        this.$store.commit('SET_ABOUT', false);
      }
      if (to.query.about) {
        this.$store.commit('SET_ABOUT', true);
        this.$store.commit('SET_VIEWING', 'About')

      }
    }
  }

}
</script>


<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#appInner{
  overflow: hidden;
  .columns{
    margin-bottom: 0;
  }
}
.appinitLoading{
  position: absolute;
  top:0;
}
</style>
