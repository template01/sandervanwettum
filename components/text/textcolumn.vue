<template>
<div class="xs-mb-20 xs-mt-20 xs-ml-20 xs-mr-20">
  <div class="columns is-gapless">
    <div class="column" v-html="content.content.rendered">
    </div>

    <div class="column">
    </div>
    <div class="column">
    </div>
  </div>


</div>
</template>

<script>
// import queryresults from '~/components/index/queryresults.vue'


export default {
  components: {
    // queryresults
  },
  props:['content']
}
</script>

<style>

</style>
