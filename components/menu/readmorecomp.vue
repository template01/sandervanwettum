<template>
  <transition name="slide-fade">
  <div v-if="getreadmore" class="readmorecomp is-peach">
    <headercomp :title="'Description'" :secondtitle="getviewing" :icon="'closereadmore'"></headercomp>
    <div class="xs-mb-20 xs-mt-40 xs-ml-40 xs-mr-40" v-html="description">
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


  data:function(){
    return{
      show:true
    }
  },

  props:['description'],


  components: {
    headercomp,
  },
  computed: {
    ...mapGetters({
      getviewing: "getviewing",
      getreadmore: "getreadmore",
    }),
  },
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


.readmorecomp{
  z-index: 2;
  width: 50%;
  position: fixed;
  display: block;
  height: 100%;
  left: 0;
  top:0;
}
a{
  display: block;
}
</style>
