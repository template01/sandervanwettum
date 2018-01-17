<template>
<div class="">
  <textcolumn :content="content"></textcolumn>
</div>
</template>

<script>
import textcolumn from '~/components/text/textcolumn.vue'
import axios from 'axios'
export default {
  components: {
    textcolumn
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
        }
      }

      // GET PROJECT LIST START
      if (store.state.projects.length == 0) {
        const projectsRes = await axios.get(store.state.apiRoot + 'wp/v2/projects')
        store.commit('SET_PROJECTS', projectsRes.data)
      }
      // GET PROJECT LIST END

      //show menu
      if(store.state.screensizeformat != 'is-screen-s' ){
        store.commit('SET_MENU', true)
      }

      const contentLangRes = await axios.get(store.state.apiRoot+'wp/v2/pages&slug='+params.slug)
      if(contentLangRes.data.length>0){

        //commit store changes
        store.commit('SET_VIEWING', contentLangRes.data[0].title.rendered)
        //return data
        return {
          content: contentLangRes.data[0],
        }
      }else{
        redirect('/')
      }
    },


}
</script>

<style>

</style>
