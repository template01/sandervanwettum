<template>
<div>
  <!--  DESKTOP/TABLET LAYOUT-->

  <div class="columns is-gapless fadein-on-load is-hidden-mobile">
    <div class="first column flex-column">

      <nuxt-link v-for="item in colI" :to="'projects/'+item.linkto.post_name" class="" :class="[imgposition(item.index_image_position),imgsize(item.index_image_size),imgpadding(item.index_image_padding)]">
        <div class="imginner">
          <img class="" v-lazy="pickrandomimage(item).sizes.large"  :data-srcset="pickrandomimage(item).sizes.large+' 1000w, '+pickrandomimage(item).x_large + ' 2000w'" />
          <span class="is-size-6 imgcaption p-20 is-peach-opacity">{{item.linkto.post_title}}</span>
        </div>
      </nuxt-link>

    </div>
    <div class="second column flex-column">
      <nuxt-link v-for="item in colII" :to="'projects/'+item.linkto.post_name" class="" :class="[imgposition(item.index_image_position),imgsize(item.index_image_size),imgpadding(item.index_image_padding)]">
        <div class="imginner">
          <img class="" v-lazy="pickrandomimage(item).sizes.large"  :data-srcset="pickrandomimage(item).sizes.large+' 1000w, '+pickrandomimage(item).x_large + ' 2000w'" />
          <span class="is-size-6 imgcaption p-20 is-peach-opacity">{{item.linkto.post_title}}</span>
        </div>
      </nuxt-link>

    </div>
  </div>

<!--  MOBILE LAYOUT-->
  <div class="fadein-on-load is-hidden-tablet">
    <div v-for="item in imagecontent">
      <!-- {{imagecontent[0]}} -->
      <nuxt-link v-for="itemsingle in item" :to="'projects/'+itemsingle.linkto.post_name" class="pb-20" :class="">
        <div class="mobilelayout">
          <img class="is-horizontal-center" v-lazy="pickrandomimage(itemsingle).sizes.medium">
          <!-- <span class="imgcaption p-20 is-peach-opacity">{{itemsingle.linkto.post_title}}</span> -->
        </div>
      </nuxt-link>

    </div>

  </div>

</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

import _ from 'lodash'

export default {

  data: function() {
    return {
      imagecontent: this.content.acf.index_images
    }
  },
  computed: {
    ...mapGetters({
      getnews: "getnews",
      getnewscontent: "getnewscontent",
    }),

    colI() {
      return _.map(this.imagecontent, 'col_i');
    },
    colII() {
      return _.map(this.imagecontent, 'col_ii');
    }
  },
  methods: {
    pickrandomimage:function(input){
      var rand = input.single_image_random[Math.floor(Math.random() * input.single_image_random.length)];
      console.log(rand)
      return rand
    },
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
        return 'p-60'
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
    display: table;
    .imgcaption {
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
.mobilelayout{
  img {
    // width: 100%;
    max-width: 100%;
  }
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
