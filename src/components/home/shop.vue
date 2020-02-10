<template>
  <section class="shop container">
    <div class="swiper-container shop-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <figure class="shop-item">
            <div class="shop-item-shadow" @click="shopHandler('iPhone')"></div>
            <figcaption>Shop For iPhone</figcaption>
            <img
              src="../../assets/shop/photo-1541560052-3744e48ab80b.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="swiper-slide">
          <figure class="shop-item">
            <div class="shop-item-shadow" @click="shopHandler('Sony')"></div>
            <figcaption>Shop For Sony</figcaption>
            <img
              src="../../assets/shop/photo-1545081576-5b7e640c083a.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="swiper-slide">
          <figure class="shop-item">
            <div class="shop-item-shadow" @click="shopHandler('Asus')"></div>
            <figcaption>Shop For Asus</figcaption>
            <img
              src="../../assets/shop/photo-1545557475-d4b104feaf66.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="swiper-slide">
          <figure class="shop-item">
            <div class="shop-item-shadow" @click="shopHandler('HTC')"></div>
            <figcaption>Shop For HTC</figcaption>
            <img
              src="../../assets/shop/photo-1545921406-e8a234c30d85.jpg"
              alt=""
            />
          </figure>
        </div>
        <div class="swiper-slide">
          <figure class="shop-item">
            <div class="shop-item-shadow" @click="shopHandler('Samsung')"></div>
            <figcaption>Shop For Samsung</figcaption>
            <img
              src="../../assets/shop/photo-1553011435-eff1060044b9.jpg"
              alt=""
            />
          </figure>
        </div>
        <!-- <div class="swiper-pagination"></div> -->
      </div>
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  methods: {
    shopHandler(brand) {
      this.$store.commit('BRAND', brand)
      this.$router.push(`/primary-product`)
    }
  },
  mounted() {
    new Swiper('.shop-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        576: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/_grid.scss';
@import '../../assets/_mixin.scss';
@import '../../assets/_variable.scss';
.shop {
  margin-bottom: 50px;
  &-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    &-shadow {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 10;
      background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.6), transparent);
      top: 0;
      left: 0;
      &:hover ~ img {
        transform: scale(1.2);
      }
    }
    img {
      width: 100%;
      height: auto;
      transition: 0.5s all;
    }
    figcaption {
      color: white;
      position: absolute;
      bottom: 10px;
      left: 10px;
      padding: 5px;
      font-size: 20px;
      z-index: 10;
      &:hover ~ img {
        transform: scale(1.2);
      }
    }
  }
}
.shop {
  html,
  body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    color: #000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
    text-align: center;
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
