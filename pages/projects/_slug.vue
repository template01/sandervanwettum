<template>
<div class="">
  <!-- <textcolumn :content="content"></textcolumn> -->
  <readmorecomp :description="description"></readmorecomp>
  <slideshow :slides="slides"></slideshow>
</div>
</template>

<script>
import textcolumn from '~/components/text/textcolumn.vue'
import readmorecomp from '~/components/menu/readmorecomp.vue'
import slideshow from '~/components/project/slideshow.vue'
import axios from 'axios'
export default {
  components: {
    textcolumn,
    readmorecomp,
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

      // GET PROJECT LIST START
      if (store.state.projects.length == 0) {
        const projectsRes = await axios.get(store.state.apiRoot + 'wp/v2/projects')
        store.commit('SET_PROJECTS', projectsRes.data)
      }
      // GET PROJECT LIST END

      //hide menu
      store.commit('SET_MENU', false)
      // console.log(store)
      console.log(route)
      if(query.read ==="true"){
        store.commit('SET_READMORE', true)
      }

      const contentLangRes = await axios.get(store.state.apiRoot+'wp/v2/projects&slug='+params.slug)
      console.log(store.state.apiRoot+'wp/v2/projects&slug='+params.slug)
      console.log(contentLangRes.data.length)
      if(contentLangRes.data.length>0){

        store.commit('SET_VIEWING', 'Project: ' + contentLangRes.data[0].title.rendered)

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
