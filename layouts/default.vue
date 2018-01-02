<template>
<div>
  <div class="columns is-gapless">
    <div class="column">
      <headercomp :class="nighttime ? 'is-white-text':''" :secondtitle="getviewing" :title="'Sander van Wettum'" :icon="'openreadmore'"></headercomp>
    </div>
    <div class="column">
      <headercomp :class="nighttime ? 'is-white-text':''" :title="''" :icon="'menu'"></headercomp>
    </div>
  </div>

    <menucomp :projects="'ass'">
    </menucomp>

  <nuxt class="xs-mb-20 xs-ml-20 xs-mr-20" />
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
      nighttime:'nighttime',
      getviewing: "getviewing",
    }),
  },

}
</script>


<style>


</style>
