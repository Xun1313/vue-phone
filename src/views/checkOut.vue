<template>
  <div class="d-flex flex-column justify-content-center container">
    <progresses />
    <router-view></router-view>
  </div>
</template>

<script>
import progresses from '../components/progresses'
export default {
  components: {
    progresses
  }
}
</script>
