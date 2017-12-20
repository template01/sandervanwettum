<template>
<div class="xs-m-20 outerwrap">

  <div class="columns is-gapless">
    <div class="column flex-column">
      <a href="" class="is-large is-horizontal-center is-vertical-center ">
        <img class="xs-p-20" src="/10.jpg"/>
      </a>
    </div>
    <div class="column flex-column">

      <a href="" class="is-small is-horizontal-left is-vertical-center ">
          <img class="xs-p-20" src="/07.jpg"/>
        </a>
    </div>
  </div>

  <div class="columns is-gapless">
    <div class="column flex-column">
      <a href="" class="is-medium is-horizontal-right is-vertical-center">
          <img class="xs-p-20" src="/08.jpg"/>
        </a>
      <a href="" class="is-medium is-horizontal-center is-vertical-center ">
          <img class="xs-p-20" src="/10.jpg"/>
        </a>
    </div>
    <div class="column flex-column">
      <a href="" class="is-medium is-horizontal-left is-vertical-bottom ">
          <img class="xs-p-20" src="/07.jpg"/>
        </a>
    </div>
  </div>


  <div class="columns is-gapless">
    <div class="column flex-column">
      <a href="" class="is-small is-horizontal-right is-vertical-bottom">
          <img class="xs-p-20" src="/02.jpg"/>
        </a>
      <a href="" class="is-small is-horizontal-left is-vertical-center ">
          <img class="xs-p-20" src="/05.jpg"/>
        </a>
    </div>
    <div class="column flex-column">
      <a href="" class="is-large is-horizontal-left is-vertical-center ">
          <img class="xs-p-20" src="/09.jpg"/>
        </a>
      <a href="" class="is-medium is-horizontal-center is-vertical-center ">
          <img class="xs-p-20" src="/10.jpg"/>
      </a>
    </div>
  </div>


  <div class="columns is-gapless">
    <div class="column flex-column">
      <a href="" class="is-small is-horizontal-right is-vertical-top">
            <img class="xs-p-20" src="/03.jpg"/>
          </a>
      <a href="" class="is-medium is-horizontal-left is-vertical-top ">
            <img class="xs-p-20" src="/06.jpg"/>
          </a>
    </div>
    <div class="column flex-column">
      <a href="" class="is-small is-horizontal-left is-vertical-center ">
            <img class="xs-p-20" src="/00.jpg"/>
          </a>
      <a href="" class="is-small is-horizontal-right is-vertical-bottom ">
            <img class="xs-p-20" src="/04.jpg"/>
        </a>
    </div>
  </div>


    <div class="columns is-gapless">
      <div class="column flex-column">
        <a href="" class="is-small is-horizontal-center is-vertical-center ">
          <img class="xs-p-20" src="/05.jpg"/>
        </a>
        <a href="" class="is-medium is-horizontal-center is-vertical-center ">
          <img class="xs-p-20" src="/10.jpg"/>
        </a>
      </div>
      <div class="column flex-column">

        <a href="" class="is-small is-horizontal-left is-vertical-center ">
            <img class="xs-p-20" src="/07.jpg"/>
          </a>
      </div>
    </div>


  <!-- margin-top: auto;
      margin-bottom: auto; -->
</div>
</template>

<script>
// import queryresults from '~/components/index/queryresults.vue'


export default {
  components: {
    // queryresults
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.columns.is-gapless:not(:last-child) {
  margin-bottom: 0;
}

.column,.outerwrap{
  border: 1px dashed red;
}
a {
  display: block;
}

img {
  display: block;
}

.is-small {
  width: 50%;
}

.is-medium {
  width: 75%;
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
