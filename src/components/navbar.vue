<template>
  <nav class="nav fixed-top pl-3 phone align-items-center">
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

    <router-link class="nav-link mr-auto" to="/">
      <img
        src="../assets/logo.png"
        class="rounded mx-auto d-block"
        style="width:90px;height:50px"
        alt="brand"
      />
    </router-link>
    <div class="d-none d-md-flex">
      <router-link class="nav-link text-white" to="/new-product">
        最新產品
        <i class="fab fa-hotjar"></i>
      </router-link>
      <router-link class="nav-link text-white" to="/primary-product">
        全部商品
        <i class="fas fa-mobile-alt fa-lg"></i>
      </router-link>
      <router-link class="nav-link text-white" to="/place">
        服務據點
        <i class="fas fa-map-marker-alt"></i>
      </router-link>
      <!-- <router-link to="/login">後台</router-link> -->
    </div>
    <router-link to="/cart" class="nav-link cart text-white">
      購物車
      <span class="badge badge-danger">{{cart}}</span>
      <i class="fas fa-shopping-cart fa-lg"></i>
    </router-link>
  </nav>
</template>

<style lang="scss">
@import "../assets/_grid.scss";
label{
  cursor: pointer;
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

.cart {
  position: relative;
  span {
    position: absolute;
    top: 5px;
    right: 10px;
  }
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";
$(document).scroll(function() {
  if (!$(this).scrollTop()) {
    $(".phone").removeClass("bg-dark");
  } else {
    $(".phone").addClass("bg-dark");
  }
});
/* $(".phone-side a").click(function(e) {
  $(".phone-side").prev().prev()
}); */
export default {
  methods: {
    //...mapActions('cartModule',['getCart']),
    getCart() {
      this.$store.dispatch("cartModule/getCart");
    },
    newProduct() {
      this.$router.push("/new-product");
    },
    allProduct() {
      this.$router.push("/primary-product");
    },
    servePlace(){
      this.$router.push("/place");
    }
  },
  computed: {
    ...mapGetters("cartModule", ["cart"])
    /* cart(){
      return this.$store.getters.cartModule.cart;
    } */
  },
  created() {
    this.getCart();
    const vm = this;
    vm.$bus.$on("show", () => {
      vm.getCart();
    });
  }
};
</script>

