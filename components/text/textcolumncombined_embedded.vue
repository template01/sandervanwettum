<template>
<div id="aboutcomp" class=" fadein-on-load androidFontBoostHack">
  <div class="is-hidden-tablet mb-10 mr-10 ml-10 ">
    <div class="mb-80" v-for="item in content" :key="item.id" :id="scrsize === 'is-screen-s' ? item.slug : ''">
      <p v-if="!item.acf.ignore_title"class="is-size-6 pb-20" v-html="item.title.rendered">
      </p>
      <div class="is-size-6" v-html="item.content.rendered"></div>
      <div v-if="item.slug==='cv'">
        <tableitem v-for="(table, index) in item.acf.cv_tables" :key="index" :content="table.tables"></tableitem>
      </div>
    </div>
  </div>
  <div class="is-hidden-mobile mb-40 mt-20 ml-40 mr-40">
    <div class="mb-80" v-for="item in content" :key="item.id" :id="scrsize != 'is-screen-s' ? item.slug : ''">
      <div class="">
        <p v-if="!item.acf.ignore_title"class="is-size-6 pb-20" v-html="item.title.rendered">
        </p>

        <div class="is-size-6" v-html="item.content.rendered">
        </div>
        <div v-if="item.slug==='cv'">
          <tableitem v-for="(table, index) in item.acf.cv_tables" :key="index" :content="table.tables"></tableitem>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import tableitem from '~/components/text/tableitem.vue'

export default {
  components: {
    tableitem
  },
  computed: {
    ...mapGetters({
      scrsize: "scrsize",
    }),
  },
  props: ['content','parentid'],
  methods: {
    offset: function(elem) {
      var rect = elem.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      }
    }
  },
  mounted() {
    var parentid = this.parentid
    if (this.$route.query.part === 'info') {
      document.querySelector(parentid).scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {

      document.querySelector(parentid).scroll({
        top: this.offset(this.$el.querySelector('#' + this.$route.query.part)).top - 30,
        left: 0,
        behavior: 'smooth'
      });
    }

  },
  watch: {
    '$route' (to, from) {
      var parentid = this.parentid
      if (this.$route.query.part === 'info') {
        document.querySelector(parentid).scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        document.querySelector(parentid).scroll({
          top: this.offset(this.$el.querySelector('#' + to.query.part)).top - 30,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
