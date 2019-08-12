<template>
  <div class="my-5 d-flex flex-column justify-content-center container">
    <progresses class="my-3"></progresses>
    <router-view class="my-3"></router-view>
  </div>
</template>

<script>
import progresses from "../components/progresses";
export default {
  components: {
    progresses,
  }
};
</script>