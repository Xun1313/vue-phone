<template>
  <section class="hot container">
    <ul class="hot-nav">
      <li
        class="hot-nav-item"
        :class="{ focus: focus === '特色產品' }"
        @click="focusHandler('特色產品')"
      >
        特色產品
      </li>
      <li
        class="hot-nav-item"
        :class="{ focus: focus === '熱銷產品' }"
        @click="focusHandler('熱銷產品')"
      >
        熱銷產品
      </li>
      <li
        class="hot-nav-item"
        :class="{ focus: focus === '最新上市' }"
        @click="focusHandler('最新上市')"
      >
        最新上市
      </li>
    </ul>
    <!-- <h2 class="hot-title">熱銷產品</h2>
    <div class="line"></div> -->
    <section class="product">
      <loading
        :active.sync="isLoading"
        :opacity="1"
        :is-full-page="false"
        :z-index="1000"
      ></loading>
      <swiper :options="swiperOption" ref="hotSwiper">
        <swiper-slide v-for="item in AllProducts" :key="item.id">
          <div class="product-item">
            <div
              class="product-item-pic"
              @click="routeHandler(item.id)"
              :style="`background-image:url(${item.imageUrl})`"
            ></div>
            <div class="product-item-flex">
              <h4 class="product-item-flex-price">
                {{ item.price | currency }}
              </h4>
              <h4 class="product-item-flex-origin">
                {{ item.origin_price | currency }}
              </h4>
            </div>
            <router-link
              :to="`/detail/${item.id}`"
              class="product-item-title"
              >{{ item.title }}</router-link
            >
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div
          class="swiper-button-prev swiper-button-black"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button-next swiper-button-black"
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
.hot {
  margin-bottom: 50px;
  &-title {
    text-align: center;
  }
  &-nav {
    display: flex;
    align-items: center;
    list-style: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    padding: 0;
    &-item {
      opacity: 0.7;
      padding-bottom: 10px;
      margin-bottom: -2px;
      cursor: pointer;
      & + & {
        margin-left: 20px;
      }
    }
  }
}
.focus {
  color: black;
  border-bottom: 2px solid $important;
  padding-bottom: 8px;
  opacity: 1;
}
.product {
  position: relative;
  margin-top: 30px;
  &-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-pic {
      @include bg();
      width: 140px;
      height: 140px;
      cursor: pointer;
    }
    &-flex {
      display: flex;
      align-items: center;
      margin-top: 10px;
      &-price {
        font-size: 16px;
      }
      &-origin {
        font-size: 14px;
        margin-left: 20px;
        opacity: 0.7;
        text-decoration: line-through;
      }
    }
    &-title {
      width: 90%;
      text-align: center;
      color: $important;
      text-decoration: none;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 16px;
      padding: 5px;
      transition: 0.5s all;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }
    }
  }
}

.hot {
  html,
  body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
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
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 20px 0;
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
    transition: 0.5s all;
    /* &:nth-child(odd) {
      margin: 0 30px 0 0;
    }
    &:nth-child(even) {
      margin: 30px 30px 0 0;
    } */
  }
  /deep/.swiper-pagination-bullet-active {
    background: $important;
  }
  .swiper-pagination {
    position: static;
  }
}
.line {
  outline: 1px solid $important;
  width: 50px;
  margin: 5px auto;
}
</style>

<script>
//import Swiper from 'swiper'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data() {
    return {
      isLoading: false,
      focus: '特色產品',
      time: '',
      swiperOption: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        slidesPerColumn: 2,
        //spaceBetween: 30,
        //loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    routeHandler(id) {
      this.$router.push(`/detail/${id}`)
    },
    focusHandler(val) {
      this.isLoading = true
      this.time = setTimeout(() => {
        this.isLoading = false
      }, 1000)
      this.focus = val
    }
  },
  computed: {
    AllProducts() {
      if (this.focus === '熱銷產品') {
        return [...this.$store.getters.AllProducts].sort((a, b) => {
          var nameA = a.id.toUpperCase()
          var nameB = b.id.toUpperCase()
          if (nameA > nameB) {
            return -1
          } else if (nameA < nameB) {
            return 1
          }
          return 0
        })
      } else if (this.focus === '最新上市') {
        return [...this.$store.getters.AllProducts].sort((a, b) => {
          var nameA = a.id.toUpperCase()
          var nameB = b.id.toUpperCase()
          if (nameA < nameB) {
            return -1
          } else if (nameA > nameB) {
            return 1
          }
          return 0
        })
      } else {
        return this.$store.getters.AllProducts
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    Loading
  },
  beforeDestroy() {
    clearTimeout(this.time)
  }
}
</script>
