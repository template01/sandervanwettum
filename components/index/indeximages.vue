<template>
<div>
  <!-- <code>{{content.acf.index_images}}</code> -->
  <div class="columns is-gapless fadein-on-load">
    <div class="first column flex-column">

      <nuxt-link v-for="item in colI" :to="'projects/'+item.linkto.post_name" class="" :class="[imgposition(item.index_image_position),imgsize(item.index_image_size),imgpadding(item.index_image_padding)]">
        <div class="imginner">
          <img class="" :src="item.single_image_random[0].url" />
          <span class="imgcaption p-20 is-peach-opacity">{{item.linkto.post_title}}</span>
        </div>
      </nuxt-link>

    </div>
    <div class="second column flex-column">
      <nuxt-link v-for="item in colII" :to="'projects/'+item.linkto.post_name" class="" :class="[imgposition(item.index_image_position),imgsize(item.index_image_size),imgpadding(item.index_image_padding)]">
        <div class="imginner">
          <img class="" :src="item.single_image_random[0].url" />
          <span class="imgcaption p-20 is-peach-opacity">{{item.linkto.post_title}}</span>
        </div>
      </nuxt-link>

    </div>
  </div>

  <!-- <div class="columns is-gapless">
    <div class="first column flex-column">
      <a href="" class="p-20 is-small is-horizontal-left">
          <img class="" src="/05.jpg"/>
        </a>
      <a href="" class="p-20 is-medium is-horizontal-right">
          <img class="" src="/10.jpg"/>
        </a>
    </div>
    <div class="second column flex-column">
      <a href="" class="p-20 is-medium is-horizontal-right">
      <img class="" src="/10.jpg"/>
      </a>
      <a href="" class="p-20 is-large is-horizontal-left">
        <img class="" src="/07.jpg"/>
      </a>
      <a href="" class="p-20 is-small is-horizontal-left">
        <img class="" src="/07.jpg"/>
      </a>
    </div>
  </div> -->
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

import _ from 'lodash'

export default {
  computed: {
    ...mapGetters({
      getnews: "getnews",
      getnewscontent: "getnewscontent",
    }),
    colI() {
      return _.map(this.content.acf.index_images, 'col_i');
    },
    colII() {
      return _.map(this.content.acf.index_images, 'col_ii');
    }
  },
  methods: {
    imgsize: function(input) {
      if (input === 'large') {
        return 'is-large'
      }
      if (input === 'medium') {
        return 'is-medium'
      }
      if (input === 'small') {
        return 'is-small'
      }
    },
    imgposition: function(input) {
      if (input === 'left') {
        return 'is-horizontal-left'
      }
      if (input === 'right') {
        return 'is-horizontal-right'
      }
    },
    imgpadding: function(input) {
      if (input === 'no-padding') {
        return 'p-20'
      }
      if (input === 'padding') {
        return 'p-40 m-20'
      }
    }
  },
  props: ['content']

}
</script>



<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.columns.is-gapless:not(:last-child) {
  margin-bottom: 0;
}

.imginner {
  position: relative;
  .imgcaption{
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    transition: opacity 0.2s;
  }
  &:hover {
    .imgcaption {
      opacity: 1;
      transition-delay: 0.35s;
    }
  }
}



/*.column,.outerwrap{
  border: 1px dashed red;
}*/

a {
  display: block;
}

img {
  display: block;
}

.is-small {
  width: 60%;
}

.is-medium {
  width: 80%;
}

.is-large {
  width: 100%;
}

.flex-column {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.is-horizontal-center {
  margin-right: auto;
  margin-left: auto;
}

.is-horizontal-left {
  margin-right: auto;
}

.is-horizontal-right {
  margin-left: auto;
}

.is-vertical-center {
  margin-top: auto;
  margin-bottom: auto;
}

.is-vertical-bottom {
  margin-top: auto;
}

.is-vertical-top {
  margin-bottom: auto;
}
</style>
