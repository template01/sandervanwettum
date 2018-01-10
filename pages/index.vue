<template>
<div class="">

  <indeximages :content="indexImagesContent"></indeximages>
  <!-- {{content}} -->
</div>
</template>

<script>
import indeximages from '~/components/index/indeximages.vue'
import axios from 'axios'
import {
  mapGetters
} from 'vuex'

export default {
  components: {
    indeximages,
  },
  computed: {
    ...mapGetters({
      getmenu: "getmenu",
      scrsize: "scrsize",
    })
  },

  async asyncData({
    params,
    query,
    error,
    store,
    route,
    redirect
  }) {

    // GET ANY NEW NEWS
    if (!store.state.news) {
      const newsRes = await axios.get(store.state.apiRoot + 'wp/v2/news')
      var shownews = newsRes.data[0].acf.showhide
      if (shownews === true) {
        if(!store.state.appinitated){
          store.commit('SET_NEWS', true)
        }
        store.commit('SET_NEWSCONTENT', newsRes.data[0])
        console.log(store.state.newscontent)
      }
    }

    // GET PROJECT LIST START
    if (store.state.projects.length == 0) {
      const projectsRes = await axios.get(store.state.apiRoot + 'wp/v2/projects')
      store.commit('SET_PROJECTS', projectsRes.data)
    }
    // GET PROJECT LIST END

    store.commit('SET_MENU', false)
    store.commit('SET_VIEWING', '')

    // GET PROJECT LIST START
      const indexImagesRes = await axios.get(store.state.apiRoot + 'wp/v2/pages&slug=index')
      return {
        // confetti : pop,
        indexImagesContent: indexImagesRes.data[0],
      }


  },
  // 
  // watch:{
  //   getmenu: function(){
  //     console.log(this.getmenu)
  //     if(this.getmenu){
  //       if(this.scrsize === 'is-screen-s' || window.innerHeight<768){
  //         document.getElementsByTagName('html')[0].style.overflowY = "hidden";
  //       }
  //     }else{
  //       if(this.scrsize === 'is-screen-s' || window.innerHeight<768){
  //         document.getElementsByTagName('html')[0].style.overflowY = "auto";
  //       }
  //     }
  //   }
  // }
}
</script>

<style>

</style>
