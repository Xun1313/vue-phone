<template>
  <section class="container info">
    <swiper :options="swiperOption" ref="infoSwiper">
      <!-- slides -->
      <swiper-slide
        ><div class="home-bgi-bg home-bgi-bg1"></div>
        <div class="home-bgi-item">
          <h5>大尺寸手機</h5>
          <router-link to="/detail/-Ldx3DwmYrihvaU62aZX"
            >了解更多 ></router-link
          >
        </div></swiper-slide
      >
      <swiper-slide
        ><div class="home-bgi-bg home-bgi-bg2"></div>
        <div class="home-bgi-item">
          <h5>超清晰音質</h5>
          <router-link to="/detail/-Ldx6ru9q78Q9YNiddV8"
            >了解更多 ></router-link
          >
        </div></swiper-slide
      >
      <swiper-slide
        ><div class="home-bgi-bg home-bgi-bg3"></div>
        <div class="home-bgi-item">
          <h5>高畫素相機</h5>
          <router-link to="/detail/-Ldx-rLYd13U4s2lxqCI"
            >了解更多 ></router-link
          >
        </div></swiper-slide
      >
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        allowTouchMove: false,
        breakpoints: {
          576: {
            slidesPerView: 1,
            allowTouchMove: true
          },
          768: {
            slidesPerView: 2,
            allowTouchMove: true
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/_grid.scss';
@import '../../assets/_mixin.scss';
@import '../../assets/_variable.scss';
.info {
  img {
    width: 100%;
    height: auto;
  }
}
.home-bgi {
  position: relative;
  &-bg {
    @include bg();
    width: 100%;
    height: 350px;
    &1 {
      background-image: url('../../assets/home_bgi/home_bgi1.jpg');
    }
    &2 {
      background-image: url('../../assets/home_bgi/home_bgi2.jpg');
    }
    &3 {
      background-image: url('../../assets/home_bgi/home_bgi3.jpg');
    }
  }
  &-item {
    text-align: left;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $important;
    padding: 15px 30px;
    color: white;
    h5 {
      margin-bottom: 20px;
      font-size: 20px;
      @include deskTop {
        font-size: 25px;
      }
    }
    a {
      text-decoration: none;
      font-size: 16px;
      color: white;
      border-radius: 10px;
      transition: 0.5s all;
      padding: 5px 0;
      &:hover {
        color: gray;
      }
    }
  }
}
.info {
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
    margin-left: auto;
    margin-right: auto;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
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
  .swiper-pagination,
  .swiper-button-next,
  .swiper-button-prev {
    @include padTOdeskTop {
      display: none;
    }
  }
  .swiper-pagination {
    position: static;
  }
  /deep/.swiper-pagination-bullet-active {
    background: $important;
  }
  .swiper-button-prev {
    background-image: url("data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'><path%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23#{$important2}'%2F><%2Fsvg>");
  }
  .swiper-button-next {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23#{$important2}'%2F%3E%3C%2Fsvg%3E");
  }
}
</style>
