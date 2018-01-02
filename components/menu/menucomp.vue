<template>
  <transition name="slide-fade">


  <div v-if="getmenu" class="menucomp is-green">
    <headercomp :title="'Menu'" :icon="'close'"></headercomp>
    <div class="xs-mb-20 xs-mt-40 xs-ml-40 xs-mr-40">

      <nuxt-link to="/">Index</nuxt-link>
      <span>
        Projects:
      </span>
      <div class="projects xs-mb-20 xs-mt-20 xs-ml-20">
        <nuxt-link v-for="project in getprojects" :to="'/projects/'+project.slug" v-html='project.title.rendered'></nuxt-link>

      </div>
      <nuxt-link to="/info">Info</nuxt-link>
      <nuxt-link to="/cv">CV</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>


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
      getprojects: "getprojects",
      getmenu: "getmenu",
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
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
  filter:blur(100);
}

.menucomp{
  z-index: 2;
  width: 50%;
  position: fixed;
  display: block;
  height: 100%;
  right: 0;
  top:0;
}
a{
  display: block;
}
</style>
