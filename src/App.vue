<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <router-view/>
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
  computed: {
    isLoading(){
      return this.$store.state.isLoading
    }
  },
  created() {
    console.log(`${process.env.VUE_APP_API}`);
    
  },
};
</script>

<style lang="scss">
@import "./src/assets/all";

body{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}

.arrow {
  cursor: pointer;
  position: fixed;
  bottom: 5px;
  right: 5px;
}

</style>