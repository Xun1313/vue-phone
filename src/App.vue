<template>
  <div id="app">
    <!-- <loading :active.sync="isLoading"></loading> -->
    <router-view />
    <i class="fas fa-arrow-circle-up fa-2x arrow" @click="top"></i>
  </div>
</template>

<script>
import $ from "jquery";
$(document).scroll(function() {
  if ($(this).scrollTop()) {
    $(".arrow").fadeIn();
  } else {
    $(".arrow").fadeOut();
  }
});

export default {
  methods: {
    top() {
      $("html,body").animate({ scrollTop: 0 }, 1000);
    }
  },
  /* computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  }, */
};
</script>

<style lang="scss">
@import "./src/assets/all";
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
@import './assets/_variable.scss';
html, body {
  font-family: 'Noto Sans TC', sans-serif;
}

#app {
  font-family: 'Noto Sans TC', sans-serif;
}

.arrow {
  cursor: pointer;
  position: fixed;
  bottom: 5px;
  right: 5px;
  color: $important
}
</style>