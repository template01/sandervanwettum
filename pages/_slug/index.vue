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

      // GET PROJECT LIST START
      if (store.state.projects.length == 0) {
        const projectsRes = await axios.get(store.state.apiRoot + 'wp/v2/projects')
        store.commit('SET_PROJECTS', projectsRes.data)
      }
      // GET PROJECT LIST END

      //show menu
      store.commit('SET_MENU', true)

      const contentLangRes = await axios.get(store.state.apiRoot+'wp/v2/pages&slug='+params.slug)
      console.log(contentLangRes.data.length)
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
