<template>
  <transition name="slide-fade">
  <div v-if="getnewsopened" class="newsopened readmorecomp is-gray" :class="scrsize">
    <headercomp :title="'News'" :secondtitle="getnewscontent.title.rendered" :icon="'closereadmore'" :isNewsopened="true"></headercomp>
    <div class="m-40 is-size-6 androidFontBoostHack" v-html="getnewscontent.content.rendered">
    </div>
  </div>

</transition>
</template>

<script>
import {
  mapGetters
} from 'vuex'

import headercomp from '~/components/header/headercomp.vue'
import textcolumncombinedembedded from '~/components/text/textcolumncombined_embedded.vue'



export default {


  data:function(){
    return{
      show:true
    }
  },

  props:['description'],


  components: {
    headercomp,
    textcolumncombinedembedded,
  },
  computed: {
    ...mapGetters({
      getviewing: "getviewing",
      getnewscontent: "getnewscontent",
      getnewsopened: "getnewsopened",
    }),
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
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
  /* filter:blur(100); */
}


.readmorecomp{
  overflow-y: auto;
  z-index: 2;
  width: 50%;
  position: fixed;
  display: block;
  height: 100%;
  left: 0;
  top:0;
  &.is-screen-s{
    width: 100%;
  }
  a {
      border-bottom: 2px solid #091540;
  }
}
a{
  display: block;
}
</style>

<style lang="scss">
.newsopened{
  img{
    padding: 40px;
    max-width: 100%;
    width: 100%;
    @media screen and (max-width: 768px) {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 0px;
      padding-right: 0px;
    }

  }
}
</style>
