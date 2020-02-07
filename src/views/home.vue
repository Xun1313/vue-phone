<template>
  <div class="home">
    <carousel></carousel>
    <deal></deal>
    <shop></shop>
    <hot></hot>
    <count></count>
    <!-- <div class="container">
      <div class="headset-title">
        <span>支援專業音樂技術</span>
        <div class="line"></div>
      </div>
      <div class="headset">
        <div class="headset-item">
          <img src="../assets/headset/hi-res.jpg" alt="" class="headset-item-pic" />
          <div class="headset-item-sentence">
            <div class="title">
              Hi-Res 高解析音樂
            </div>
            <div class="word">
              Hi-Res高解析音樂，是對於聲音品質的新標準，音質細緻度是一般CD的四倍，媲美直接在錄音室聽現場演奏的感覺
            </div>
          </div>
        </div>
        <div class="headset-item">
          <img src="../assets/headset/DSSEX.jpg" alt="" class="headset-item-pic" />
          <div class="headset-item-sentence">
            <div class="title">DSEE HX™ 數位音質還原技術</div>
            <div class="word">
              一般聽的MP3音樂都被壓縮過了，透過”數位音質還原技術”可以將MP3還原成CD音質。
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <section class="container discount">
      <h2 class="discount-title">優惠方案</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="discount-all">
            <div class="discount-all-content">
              <article class="discount-all-content-word">
                <h4>保證原廠公司貨，保固一年，3C、手機一律全新未拆封</h4>
                <router-link :to="scrollDiscount">了解更多</router-link>
              </article>
            </div>
            <img src="../assets/discount/discount1.jpg" alt="" class="discount-all-pic discount-all-pic1" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="discount-all">
            <div class="discount-all-content">
              <article class="discount-all-content-word">
                <h4>如遇產品之故障，代送原廠協助新品換貨</h4>
                <router-link :to="scrollDiscount">了解更多</router-link>
              </article>
            </div>
            <!-- <div class="discount-pic"></div> -->
            <img src="../assets/discount/discount2.jpg" alt="" class="discount-all-pic discount-all-pic2" />
          </div>
        </div>
      </div>
    </section>

    <section class="title4">
      <div class="title4-mask">
        <div class="container">
          <div class="row">
            <div class="col-md-6 d-md-flex my-4">
              <i class="fas fa-camera-retro fa-3x my-auto title4-icon"></i>
              <div class="p-3">
                <h4>三鏡頭相機</h4>
                <p>
                  讓你在任何場景與光線條件下，都能拍出擁有專業品質的相片。
                </p>
              </div>
            </div>
            <div class="col-md-6 d-md-flex my-4">
              <i class="fas fa-images fa-3x my-auto title4-icon"></i>
              <div class="p-3">
                <h4>Sony Alpha 系統技術</h4>
                <p>
                  低亮度中呈現清晰影像，以精準對焦拍攝出色肖像。
                </p>
              </div>
            </div>
            <div class="col-md-6 d-md-flex my-4">
              <i class="far fa-file-video fa-3x my-auto title4-icon"></i>
              <div class="p-3">
                <h4>專業級的色彩重製</h4>
                <p>
                  建立者模式由 CineAlta 技術支援，可讓影像栩栩如生。
                </p>
              </div>
            </div>
            <div class="col-md-6 d-md-flex my-4">
              <i class="fas fa-video fa-3x my-auto title4-icon"></i>
              <div class="p-3">
                <h4>低亮度影像也能完美拍攝</h4>
                <p>
                  新一代 Xperia 1 結合先進技術，改善低亮度照片品質。
                </p>
              </div>
            </div>
          </div>
          <router-link to="/new-product" class="title4-more">了解更多</router-link>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="video">
        <!-- width="560"
          height="315" -->
        <div class="video-container">
          <iframe class="video-container-iframe" src="https://www.youtube.com/embed/gEw_C4H7WTc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="video-word">
          <h3 class="video-word-title">【Sony Xperia XZ3 正式發售！】</h3>
          <h4 class="video-word-other">
            FEEL the VIBE! - 隨處享樂，隨心捕捉，隨您品味
          </h4>
        </div>
      </div>
    </section>
    <info></info>
  </div>
</template>
<script>
import carousel from '../components/home/carousel'
import shop from '../components/home/shop'
import hot from '../components/home/hot'
import count from '../components/home/count'
import deal from '../components/home/deal'
import info from '../components/home/info'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  computed: {
    AllProducts() {
      return this.$store.getters.AllProducts
    },
    scrollDiscount() {
      return this.$store.state.scrollDiscount
    }
  },
  mounted() {
    this.$store.dispatch('getAllProducts')
  },
  components: {
    carousel,
    deal,
    shop,
    hot,
    count,
    info
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_grid.scss';
@import '../assets/_mixin.scss';
@import '../assets/_variable.scss';
.line {
  outline: 1px solid $important;
  width: 50px;
  margin: 5px auto;
}
.home {
  overflow: hidden;
}
/* .headset-title {
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 20px;
}
.headset {
  margin-bottom: 60px;
  @include padTOdeskTop {
    display: flex;
  }
  justify-content: center;
  &-item {
    @include padTOdeskTop {
      width: 500px;
    }
    width: 100%;
    margin: 0 0 30px 0;
    & + & {
      @include padTOdeskTop {
        margin: 0 0 30px 15px;
      }
    }
    &-pic {
      width: 100%;
      height: auto;
      margin-bottom: 20px;
    }
    &-sentence {
      padding: 0 15px;

      .title {
        font-weight: bold;
        margin-bottom: 15px;
      }
      .word {
        opacity: 0.6;
      }
    }
  }
} */
.discount-title {
  font-size: 18px;
  margin-bottom: 20px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}
.discount {
  margin: 50px auto;
  &-all {
    display: flex;
    flex-direction: column;
    > * {
      margin-bottom: 20px;
    }
    &-content {
      background-color: rgba(0, 0, 0, 0.1);
      padding: 125px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &-word {
        padding: 0 35px;
        border: 3px solid white;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 80%;
        height: 80%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h4 {
          font-size: 18px;
          line-height: 1.5;
        }
        a {
          text-decoration: none;
          padding: 5px 10px;
          background-color: $important;
          color: white;
          margin-top: 20px;
          transition: 0.5s all;
          &:hover {
            background-color: darken($important, 10%);
          }
        }
      }
    }
    &-pic {
      width: 100%;
      height: auto;
      &2 {
        @include padTOdeskTop {
          order: -1;
        }
      }
    }
  }
}

.video {
  @include padTOdeskTop {
    display: flex;
  }
  align-items: center;
  justify-content: space-between;
  margin: 50px 0;
  &-container {
    width: 100%;
    height: 0;
    padding-bottom: 77%;
    position: relative;
    @include padTOdeskTop {
      width: 53%;
      padding-bottom: 30%;
    }
    //margin: auto;
    /* width: 400px;
    height: 225px;
    @include padTOdeskTop {
      width: 500px;
      height: 281px;
    } */
    &-iframe {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  &-word {
    padding: 20px;
    text-align: center;
    &-title {
      margin-bottom: 10px;
      font-size: 20px;
    }
    &-other {
      font-size: 18px;
    }
  }
}

.title4 {
  color: white;
  background-image: url('https://images.unsplash.com/photo-1534484374439-6b8cd79be97c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60');
  @include bg;
  width: 100%;
  &-mask {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    min-height: 100vh;
    @include padTOdeskTop {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &-more {
    text-decoration: none;
    background-color: white;
    color: black;
    border-radius: 10px;
    display: block;
    width: 100px;
    text-align: center;
    padding: 10px;
    border: 1px solid white;
    margin: 0 auto;
    transition: 0.5s all;
    &:hover {
      background-color: darken(white, 10%);
    }
  }
  h4 {
    @include cellPhone() {
      text-align: center;
    }
    @include pad() {
      text-align: center;
    }
  }
  &-icon {
    display: block;
    text-align: center;
  }
}
</style>
