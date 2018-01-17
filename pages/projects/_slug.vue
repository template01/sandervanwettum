<template>
<div class="">
  <!-- <textcolumn :content="content"></textcolumn> -->
  <readmorecomp :description="description"></readmorecomp>
  <!-- {{srcsize}} -->

  <readmoremobilebutton></readmoremobilebutton>
  <slideshow :slides="slides"></slideshow>
</div>
</template>

<script>
import textcolumn from '~/components/text/textcolumn.vue'
import readmorecomp from '~/components/menu/readmorecomp.vue'
import readmoremobilebutton from '~/components/menu/readmoremobilebutton.vue'
import slideshow from '~/components/project/slideshow.vue'
import axios from 'axios'
export default {
  components: {
    textcolumn,
    readmorecomp,
    readmoremobilebutton,
    slideshow
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

      //hide menu
      store.commit('SET_MENU', false)
      if(query.read ==="true"){
        store.commit('SET_READMORE', true)
      }

      const contentLangRes = await axios.get(store.state.apiRoot+'wp/v2/projects&slug='+params.slug)
      if(contentLangRes.data.length>0){

        store.commit('SET_VIEWING', '' + contentLangRes.data[0].title.rendered)
        // store.commit('SET_VIEWING', 'Project: ' + contentLangRes.data[0].title.rendered)

        return {
          content: contentLangRes.data[0],
          description: contentLangRes.data[0].acf.project_description,
          slides: contentLangRes.data[0].acf.project_slideshow,
        }
      }else{
        redirect('/')
      }
    },


}
</script>

<style>

</style>
