<template>
  <footer>
    <div class="container">
      <div class="footer">
        <!-- <div class="footer-item">
          <i class="fas fa-globe-africa"></i>
          台灣
        </div> -->
        <nav class="footer-all" @click="scrollHandler('about')">
          <!--  -->
          <h4 class="footer-all-title">關於我們</h4>
          <router-link class="footer-all-item" :to="scrollAbout">實體店面</router-link>
          <router-link class="footer-all-item" :to="scrollAbout">一般問題</router-link>
          <router-link class="footer-all-item" :to="scrollAbout">人才招募</router-link>
        </nav>
        <nav class="footer-all" @click="scrollHandler('shop')">
          <!--  -->
          <h4 class="footer-all-title">購物說明</h4>
          <router-link class="footer-all-item" :to="scrollShop">購物須知</router-link>
          <router-link class="footer-all-item" :to="scrollShop">付款方式</router-link>
          <router-link class="footer-all-item" :to="scrollShop">售後服務</router-link>
        </nav>
        <article class="footer-all">
          <h4 class="footer-all-title">聯絡我們</h4>
          <h5 class="footer-all-item">tel : 02-987654321</h5>
          <h5 class="footer-all-item">聯絡時間：AM 10:00~PM 17:00</h5>
        </article>
      </div>
      <h5 class="footer-copy">僅做為個人學習使用，非商業用途。</h5>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollHandler(val) {
      this.$route.name === 'about' ? this.$bus.$emit('scrollHandler', val) : ''
    }
  },
  computed: {
    scrollAbout() {
      return this.$store.state.scrollAbout
    },
    scrollShop() {
      return this.$store.state.scrollShop
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_variable.scss';
@import '../assets/_grid.scss';
footer {
  background-color: $important;
  color: white;
  margin-top: 40px;
  padding: 30px 0;
}
.footer {
  @include padTOdeskTop {
    display: flex;
    justify-content: space-between;
  }
  &-all {
    margin-bottom: 20px;
    @include padTOdeskTop {
      text-align: center;
      margin-bottom: 0px;
    }
    /* @include padTOdeskTop {
      display: flex;
      justify-content: center;
    } */
    &-title {
      padding: 0 0 5px 0;
      font-size: 22px;
    }
    &-item {
      text-decoration: none;
      font-weight: normal;
      color: white;
      opacity: 0.7;
      padding: 5px 0;
      display: block;
      font-size: 18px;
    }
    a {
      transition: 0.5s all;
      &:hover {
        opacity: 1;
      }
    }
  }
  &-copy {
    text-align: center;
    font-size: 16px;
    margin: 20px 0;
  }
}
</style>
