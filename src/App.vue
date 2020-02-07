<template>
  <div id="app">
    <router-view />
    <i class="fas fa-arrow-circle-up fa-2x arrow" @click="top"></i>
  </div>
</template>

<script>
import $ from 'jquery'
$(document).scroll(function() {
  if ($(this).scrollTop()) {
    $('.arrow').fadeIn()
  } else {
    $('.arrow').fadeOut()
  }
})

export default {
  methods: {
    top() {
      $('html,body').animate({ scrollTop: 0 }, 1000)
    }
  }
}
</script>

<style lang="scss">
@import './src/assets/all';
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
@import './assets/_variable.scss';
@import './assets/_grid.scss';

html,
body {
  font-family: 'Noto Sans TC', sans-serif;
}
body {
  padding-top: 60px !important;
  @include padTOdeskTop {
    padding-top: 114px !important;
  }
}

#app {
  font-family: 'Noto Sans TC', sans-serif;
}

.arrow {
  cursor: pointer;
  position: fixed;
  bottom: 5px;
  right: 5px;
  color: $important;
}
</style>
