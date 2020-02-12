<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import footers from '../components/footer'
export default {
  components: {
    navbar,
    footers
  }
}
</script>
