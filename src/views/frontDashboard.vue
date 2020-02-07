<template>
  <div class="animated fadeIn delay-2s">
    <navbar></navbar>
    <Alert></Alert>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import Alert from '../components/AlertMessage'
import footers from '../components/footer'

export default {
  components: {
    navbar,
    Alert,
    footers
  }
}
</script>
