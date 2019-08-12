<template>
  <div class="jumbotron jumbotron-fluid mt-5">
    <div class="container d-flex flex-column align-items-center">
      <h1 class="display-4">恭喜你</h1>
      <p
        class="lead"
      >付款完成</p>
      <router-link to="/" class="btn btn-danger">繼續購物</router-link>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.$bus.$emit('progress', true,true,true,'100%')
  }
}
</script>