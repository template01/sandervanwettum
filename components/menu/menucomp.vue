<template>
<transition name="slide-fade">
  <div v-if="getmenu" class="menucomp is-green" :class="scrsize">
    <!-- {{scrsize.length>0}} -->
    <headercomp :title="'Menu'" :icon="'close'"></headercomp>
    <div class="mb-20 mt-40 ml-40 mr-40">
      <nuxt-link to="/">Index</nuxt-link>
      <span>
        Projects:
      </span>
      <div class="projects mb-20 mt-20 ml-20">
        <nuxt-link v-for="project in getprojects" :to="'/projects/'+project.slug" v-html='project.title.rendered'></nuxt-link>
      </div>
      <nuxt-link to="/info">Info</nuxt-link>
      <nuxt-link to="/cv">CV</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </div>
    <news></news>
    <newsreopen></newsreopen>
  </div>
</transition>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import headercomp from '~/components/header/headercomp.vue'
import news from '~/components/menu/news.vue'
import newsreopen from '~/components/menu/newsreopen.vue'

export default {
  computed: {
    ...mapGetters({
      getprojects: "getprojects",
      getmenu: "getmenu",
      getnews: "getnews",
    })
  },
  components: {
    headercomp,
    news,
    newsreopen,
  },

  mounted(){
    if(this.scrsize === 'is-screen-s'){
      this.$store.commit('SET_MENU', false)
    }
  },

}
</script>



<style scoped lang="scss">
/* Enter and leave animations can use different */

/* durations and timing functions.              */

.slide-fade-enter-active {
  transition: all .2s ease;
}

.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */

  {
  transform: translateY(-10px);
  opacity: 0;
  /* filter:blur(100); */
}

.menucomp {
  z-index: 2;
  width: 50%;
  position: fixed;
  display: block;
  height: 100%;
  right: 0;
  top: 0;
  &.is-screen-s{
    width: 100%;
  }
}

a {
  display: table;
}
</style>
