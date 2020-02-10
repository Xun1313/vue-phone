<template>
  <div>
    <loading :active.sync="isLoading" :opacity="1" :loader="'bars'"></loading>
    <nav class="phone important">
      <div class="d-md-none">
        <input type="checkbox" id="bar" />
        <a href="#" class="phone-bar">
          <label for="bar">
            <i class="fas fa-bars fa-2x text-white"></i>
          </label>
        </a>
        <ul class="phone-side list-group">
          <li class="list-group-item p-0">
            <label for="bar" class="p-3 w-100" @click="newProduct">
              最新產品
              <i class="fab fa-hotjar"></i>
            </label>
          </li>
          <li class="list-group-item p-0">
            <label for="bar" class="p-3 w-100" @click="allProduct">
              全部商品
              <i class="fas fa-mobile-alt fa-lg"></i>
            </label>
          </li>
          <li class="list-group-item p-0">
            <label for="bar" class="p-3 w-100" @click="servePlace">
              服務據點
              <i class="fas fa-map-marker-alt"></i>
            </label>
          </li>
        </ul>
        <label for="bar" class="fullScreen"></label>
      </div>

      <div class="style" ref="style">
        <h1>
          <router-link class="style-logo" to="/">SOGI</router-link>
        </h1>
        <div class="style-group">
          <router-link class="style-group-route" to="/new-product">
            <p class="style-group-route-name">最新產品</p>
            <i class="fab fa-hotjar"></i>
          </router-link>
          <router-link class="style-group-route" to="/primary-product">
            <p class="style-group-route-name">全部商品</p>
            <i class="fas fa-mobile-alt fa-lg"></i>
          </router-link>
          <router-link class="style-group-route" to="/place">
            <p class="style-group-route-name">服務據點</p>
            <i class="fas fa-map-marker-alt"></i>
          </router-link>
          <!-- <router-link to="/login">後台</router-link> -->
          <router-link to="/cart" class="style-group-cart style-group-route">
            <p class="style-group-route-name">購物車</p>
            <span class="badge badge-danger">{{ cart }}</span>
            <i class="fas fa-shopping-cart fa-lg"></i>
          </router-link>
        </div>
      </div>
    </nav>

    <div class="dark" ref="dark">
      <div class="dark-bg none" ref="dark-bg">
        <i class="fas fa-cart-plus dark-bg-icon"></i>
        <p class="dark-bg-word">加入成功</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/_grid.scss';
@import '../assets/_variable.scss';
@import url('https://fonts.googleapis.com/css?family=Sriracha&display=swap');
label {
  cursor: pointer;
  margin: 0;
}
.phone {
  /* &-bar i {
    cursor: pointer;
  } */
  input {
    display: none;
  }
  input:checked ~ .phone-side {
    left: 0;
    z-index: 20;
  }
  input:checked ~ .fullScreen {
    position: absolute;
    top: 60px;
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: 0.5;
    z-index: 10;
  }
  /*   input:checked {
    background-color: rgb(0, 0, 0);
    opacity: 0.5;
    z-index: 5;
  } */
  &-side {
    position: fixed;
    top: 60px;
    left: -80%;
    width: 80%;
    min-height: 100vh;
    transition: 0.5s;
    background-color: gray;
    li {
      background-color: gray;
      color: white;
      text-align: center;
      font-size: 25px;
    }
  }
  .fullScreen {
    transition: 0.5s;
  }
}

.phone {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  padding-left: 20px;
  transition: 0.5s all;
}
.style {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @include padTOdeskTop {
    display: block;
    margin: auto;
  }
  &-logo {
    display: block;
    font-family: 'Sriracha', cursive;
    text-decoration: none;
    color: white;
    font-size: 40px;
    margin: 0 auto 0 5px;
    @include padTOdeskTop {
      margin: 0 auto;
    }
    text-align: center;
    padding: 6px 0;
    &:hover {
      color: white;
      text-decoration: none;
    }
  }
  &-group {
    display: flex;
    justify-content: center;
    &-route {
      color: white;
      font-size: 16px;
      display: flex;
      align-items: center;
      padding: 15px;
      &-name {
        margin: 0 5px 0 0;
        display: none;
        @include padTOdeskTop {
          display: block;
        }
      }
    }
    &-cart {
      position: relative;
      span {
        position: absolute;
        top: 5px;
        right: 5px;
      }
    }
  }
}
.important {
  background-color: $important;
}
.dark {
  background-color: rgba(255, 255, 255, 1);
  transition: 0.5s all;
  z-index: -10;
  &-bg {
    transition: 0.5s all;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    padding: 60px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    &-icon {
      font-size: 40px;
    }
    &-word {
      font-size: 20px;
    }
  }
}
.on {
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1060;
  position: fixed;
  top: 0;
  left: 0;
}
.none {
  background-color: rgba(255, 255, 255, 1);
  display: none;
  z-index: -10;
}
h1 {
  margin-bottom: 0;
}
</style>

<script>
import { mapGetters } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  data() {
    return {
      time: ''
    }
  },
  methods: {
    //...mapActions('cartModule',['getCart']),
    getCart() {
      this.$store.dispatch('cartModule/getCart')
    },
    newProduct() {
      this.$router.push('/new-product')
    },
    allProduct() {
      this.$router.push('/primary-product')
    },
    servePlace() {
      this.$router.push('/place')
    },
    cartHandler() {
      clearTimeout(this.time)
      this.$refs.dark.classList.add('on')
      this.$refs['dark-bg'].classList.remove('none')
      this.time = setTimeout(() => {
        this.$refs.dark.classList.remove('on')
        this.$refs['dark-bg'].classList.add('none')
      }, 2000)
    }
  },
  computed: {
    ...mapGetters('cartModule', ['cart']),
    isLoading() {
      return this.$store.getters.isLoading
    }
    /* cart(){
      return this.$store.getters.cartModule.cart;
    } */
  },
  mounted() {
    this.$store.commit('NAVHEIGHT', this.$refs.style.offsetHeight)
    window.addEventListener('resize', () => {
      this.$store.commit('NAVHEIGHT', this.$refs.style.offsetHeight)
    })
    this.getCart()
    this.$bus.$on('show', () => {
      this.getCart()
    })
    this.$bus.$on('dark', () => {
      this.cartHandler()
    })
  },
  components: {
    Loading
  }
}
</script>
