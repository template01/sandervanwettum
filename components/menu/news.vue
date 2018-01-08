<template>

<transition name="slide-fade">

  <div v-if="getnews" class="news is-gray">
    <headercomp :title="'News'" :secondtitle="getnewscontent.title.rendered" :icon="'news'"></headercomp>
    <div class="mb-40 mt-40 ml-40 mr-40" v-html="getnewscontent.content.rendered">
    </div>
  </div>
</transition>

</template>

<script>
import {
  mapGetters
} from 'vuex'
import headercomp from '~/components/header/headercomp.vue'

export default {
  computed: {
    ...mapGetters({
      getnews: "getnews",
      getnewscontent: "getnewscontent",
    }),
  },
  components: {
    headercomp,
  }
}
</script>



<style scoped>
/* Enter and leave animations can use different */

/* durations and timing functions.              */

.slide-fade-enter-active {
  transition: all .4s ease;
  transition-delay: 0.4s;
}

.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */

  {
  transform: translateY(10px);
  opacity: 0;
  /* filter:blur(100); */
}

a {
  display: block;
}

.news {
  -webkit-backface-visibility: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 50%;
}

</style>
