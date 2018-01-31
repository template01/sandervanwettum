<template>
<div>
  <!--  DESKTOP/TABLET LAYOUT-->

  <div class="columns is-gapless fadein-on-load is-hidden-mobile">
    <div class="first column flex-column">

      <nuxt-link v-for="item in colI" v-if="!item.disable" :to="'projects/'+item.linkto.post_name" class="" :class="[imgposition(item.index_image_position),imgsize(item.index_image_size),imgpadding(item.index_image_padding)]">
        <div class="imginner">
          <img class="slidein-on-load" v-lazy="pickrandomimage(item).sizes.large"  :data-srcset="pickrandomimage(item).sizes.large+' 1000w, '+pickrandomimage(item).x_large + ' 2000w'" />
          <span class="is-size-6 imgcaption p-40 is-peach-opacity">{{item.linkto.post_title}}</span>
        </div>
      </nuxt-link>

    </div>
    <div class="second column flex-column">
      <nuxt-link v-for="item in colII" v-if="!item.disable" :to="'projects/'+item.linkto.post_name" class="" :class="[imgposition(item.index_image_position),imgsize(item.index_image_size),imgpadding(item.index_image_padding)]">
        <div class="imginner">
          <img class="slidein-on-load" v-lazy="pickrandomimage(item).sizes.large"  :data-srcset="pickrandomimage(item).sizes.large+' 1000w, '+pickrandomimage(item).x_large + ' 2000w'" />
          <span class="is-size-6 imgcaption p-40 is-peach-opacity">{{item.linkto.post_title}}</span>
        </div>
      </nuxt-link>

    </div>
  </div>

<!--  MOBILE LAYOUT-->
  <div class="fadein-on-load is-hidden-tablet">
    <div v-for="item in imagecontent">
      <!-- {{imagecontent[0]}} -->
      <nuxt-link v-for="itemsingle in item" v-if="!itemsingle.disable" :to="'projects/'+itemsingle.linkto.post_name" class="pb-20" :class="">
        <div class="mobilelayout">
          <img class="slidein-on-load is-horizontal-center" v-lazy="pickrandomimage(itemsingle).sizes.medium">
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
a{
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.columns.is-gapless:not(:last-child) {
    margin-bottom: 0;
}


@keyframes slidein {
  0% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0px);
  }
}


img[lazy=loaded] {
  &.slidein-on-load{
    animation: 1s ease-in-out slidein;
    animation-fill-mode: forwards;
  }
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
