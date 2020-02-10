<template>
  <section class="all">
    <section class="count">
      <div class="count-bg">
        <article class="count-content">
          <h3 class="count-content-title">雙11活動即將結束!</h3>
          <h5 class="count-content-title">把握最後機會</h5>
          <article class="count-content-group">
            <article class="count-content-group-item">
              <p class="num">{{ time.day }}</p>
              <p class="unit">天</p>
            </article>
            <article class="count-content-group-item">
              <p class="num">{{ time.hour }}</p>
              <p class="unit">小時</p>
            </article>
            <article class="count-content-group-item">
              <p class="num">{{ time.minute }}</p>
              <p class="unit">分鐘</p>
            </article>
            <article class="count-content-group-item">
              <p class="num">{{ time.second }}</p>
              <p class="unit">秒</p>
            </article>
          </article>
          <router-link class="count-content-search" to="/primary-product"
            >查看商品</router-link
          >
        </article>
      </div>
    </section>
    <section class="product">
      <swiper v-if="products.length > 0" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in products" :key="item.id">
          <div class="product-bg" :class="`product-bg${index + 1}`">
            <article class="product-bg-content">
              <h2 class="product-bg-content-title">{{ item.title }}</h2>
              <h5 class="product-bg-content-word">{{ word[index] }}</h5>
              <div class="product-bg-content-price">
                <p class="origin">{{ item.origin_price | currency }}</p>
                <p class="now">{{ item.price | currency }}</p>
              </div>
              <router-link
                class="product-bg-content-route"
                :to="`/detail/${item.id}`"
                >了解更多</router-link
              >
            </article>
          </div>
        </swiper-slide>

        <!-- Optional controls -->
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        <div
          class="swiper-button-prev swiper-button-white"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button-next swiper-button-white"
          slot="button-next"
        ></div>
      </swiper>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/_grid.scss';
@import '../../assets/_mixin.scss';
@import '../../assets/_variable.scss';
.all {
  @include padTOdeskTop {
    display: flex;
    align-items: center;
  }
}
.count {
  background-image: url('https://images.unsplash.com/photo-1578417618193-3726d6f2fef6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60');
  @include bg();
  width: 100%;
  @include padTOdeskTop {
    width: 50%;
  }
  height: 100vh;
  &-bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-content {
    width: 95%;
    @include pad {
      width: 80%;
    }
    @include padTOdeskTop {
      width: 90%;
    }
    @include deskTop {
      width: 400px;
    }
    &-title {
      color: white;
      text-align: center;
      & + & {
        margin-bottom: 50px;
      }
    }
    &-group {
      display: flex;
      align-items: center;
      justify-content: space-around;
      @include padTOdeskTop {
        justify-content: center;
      }
      background-color: white;
      border-radius: 10px;
      &-item {
        padding: 20px;
        @include padTOdeskTop {
          padding: 30px;
        }
        text-align: center;
        height: 100%;
        margin: 0;
        .num {
          font-size: 30px;
          width: 35px;
          margin: 0;
        }
        .unit {
          font-size: 16px;
          margin: 0;
        }
      }
    }
    &-search {
      text-decoration: none;
      color: white;
      transition: 0.5s all;
      background-color: $important;
      padding: 10px;
      border-radius: 10px;
      display: block;
      width: 100px;
      text-align: center;
      margin: 50px auto 0;
      &:hover {
        background-color: darken($important, 10%);
      }
    }
  }
}
.product {
  width: 100%;
  @include padTOdeskTop {
    width: 50%;
  }
  height: 100vh;
  &-bg {
    @include bg;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    &1 {
      background-image: url('https://images.unsplash.com/photo-1498064148550-18dbdafeb98a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60');
    }
    &2 {
      background-image: url('https://images.unsplash.com/photo-1519336305162-4b6ed6b6fc83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60');
    }
    &3 {
      background-image: url('https://images.unsplash.com/photo-1519336367661-eba9c1dfa5e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60');
    }
    &-content {
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      &-word {
        margin-bottom: 50px;
      }
      &-price {
        display: flex;
        align-items: center;
        justify-content: center;
        p + p {
          margin-left: 30px;
          text-decoration: line-through;
          opacity: 0.7;
          font-size: 20px;
        }
      }
      &-route {
        color: white;
        text-decoration: none;
        background-color: $important;
        transition: 0.5s all;
        padding: 10px;
        border-radius: 10px;
        display: block;
        width: 100px;
        text-align: center;
        margin: 100px auto 0;
        &:hover {
          background-color: darken($important, 10%);
        }
      }
    }
  }
}
.product {
  html,
  body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
}
</style>

<script>
/* import Swiper from 'swiper' */
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data() {
    return {
      time: {
        day: '',
        hour: '',
        minute: '',
        second: ''
      },
      count: '',
      word: [
        '精準呈現陰影和焦點',
        '集結相機、顯示器、效能於一身',
        '強大功能盡在手上'
      ],
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
        /* pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, */
      }
    }
  },
  computed: {
    products() {
      return this.$store.getters.AllProducts.filter(e => {
        return (
          e.id === '-Ldwz9oNMO_AHugLWWYt' ||
          e.id === '-Ldx0bhpVTmLcE3sJvgM' ||
          e.id === '-Ldx5GLb7skyDWpvibVy'
        )
      })
    }
  },
  mounted() {
    const date = new Date(2020, 0, 29, 24, 0, 0)
    this.count = setInterval(() => {
      date.setSeconds(date.getSeconds() - 1)
      this.time.day = date.getDate()
      this.time.hour = date.getHours()
      this.time.minute = date.getMinutes()
      this.time.second = date.getSeconds()
    }, 1000)
    /* window.onload = () => {
      new Swiper('.product-container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    } */
  },
  components: {
    swiper,
    swiperSlide
  },
  beforeDestroy() {
    clearInterval(this.count)
  }
}
</script>
