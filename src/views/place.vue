<template>
  <section>
    <section class="swiper-container place-container">
      <div class="parallax-bg" data-swiper-parallax="-23%"></div>
      <div class="swiper-wrapper">
        <article class="swiper-slide">
          <div class="title" data-swiper-parallax="-300">台北三創</div>
          <div class="subtitle" data-swiper-parallax="-200">大型專賣店</div>
          <div class="text" data-swiper-parallax="-100">
            <p>
              台北三創門市在2015年5月成立於台北市十大建設之一的三創生活園區內，門市經營團隊擁有專業3C商品銷售經驗，店內展示全系列產品，提供顧客完整的體驗。
            </p>
          </div>
        </article>
        <article class="swiper-slide">
          <div class="title" data-swiper-parallax="-300" data-swiper-parallax-opacity="0">
            台中公益
          </div>
          <div class="subtitle" data-swiper-parallax="-200">大型專賣店</div>
          <div class="text" data-swiper-parallax="-100">
            <p>
              台中公益大型專賣店在2018年9月份開幕。門市內有全系列實機展示、VIVE HOME情境體驗區、多元配件及精品周邊、維修站進駐及數位教室等服務。
            </p>
          </div>
        </article>
        <article class="swiper-slide">
          <div class="title" data-swiper-parallax="-300">高雄</div>
          <div class="subtitle" data-swiper-parallax="-200">大型專賣店</div>
          <div class="text" data-swiper-parallax="-100">
            <p>
              高雄大型專賣店坐落於南台灣3C指標商圈之建國商圈，秉持南台灣的熱情我們提供喜歡的朋友一起來交流分享使用經驗與體驗多元服務。
            </p>
          </div>
        </article>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination swiper-pagination-white"></div>
      <!-- Add Navigation -->
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
    </section>
    <section class="container mt-5">
      <em class="text-center mb-4 h2 d-block place-title">
        <i class="fas fa-location-arrow"></i>
        服務據點
      </em>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="accordion" id="accordionExample">
            <div class="card">
              <header class="card-header" id="headingOne">
                <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  台北
                </button>
              </header>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  <h3 class="mb-3">台北三創 大型專賣店</h3>
                  <p>
                    台北市中正區市民大道三段2號1樓R105-2櫃
                    <br />(02)23513290 分機2151 <br />週日~週四 11:00~21:30 <br />週五~週六及國定假日前夕 11:00~22:00
                  </p>
                  <p>
                    技術諮詢、維修進度專線 : 0809-090166
                    <br />手機請撥 : (02)21626788 <br />週一~週六 10:00~19:00
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <header class="card-header" id="headingOne">
                <button type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  台中
                </button>
              </header>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">
                  <h3 class="mb-3">台中公益 大型專賣店</h3>
                  <p>
                    台中市西區公益路154號 / (04)23293781
                    <br />週日~週四 11:00~21:30 <br />週五、週六及國定假日前夕 11:00~22:00
                    <br />
                  </p>
                  <p>
                    技術諮詢、維修進度專線 : 0809-090166
                    <br />手機請撥 : (02)21626788 <br />週一~週六 10:00~19:00
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <header class="card-header" id="headingOne">
                <button type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  高雄
                </button>
              </header>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body">
                  <h3 class="mb-3">高雄 大型專賣店</h3>
                  <p>
                    高雄市建國二路100號1樓 / (07)2388956
                    <br />週一~週日 11:00 ~22:00
                  </p>
                  <p>
                    技術諮詢、維修進度專線 : 0809-090166
                    <br />手機請撥 : (02)21626788 <br />週一~週六 10:00~19:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <!-- <gmap-map :center="center" :zoom="7" style="width: 100%; height: 500px">
            <gmap-info-window
              :options="infoOptions"
              :position="infoWindowPos"
              :opened="infoWinOpen"
              @closeclick="infoWinOpen=false"
            >{{infoContent}}</gmap-info-window>
            <gmap-marker
              :key="i"
              v-for="(m,i) in markers"
              :position="m.position"
              :clickable="true"
              @click="toggleInfoWindow(m,i)"
            ></gmap-marker>
          </gmap-map> -->
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data() {
    return {
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      infoCurrentKey: null,
      center: { lat: 23.79927226459908, lng: 121.18234536240907 },
      markers: [
        {
          position: { lat: 25.0470227, lng: 121.5125523 },
          infoText: '台北維修店'
        },
        {
          position: { lat: 24.1366623, lng: 120.6833504 },
          infoText: '台中維修店'
        },
        {
          position: { lat: 22.6418339, lng: 120.2984191 },
          infoText: '高雄維修店'
        }
      ]
    }
  },
  methods: {
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position
      this.infoContent = marker.infoText
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    }
  },
  mounted() {
    new Swiper('.place-container', {
      speed: 600,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_mixin.scss';
@import '../assets/_grid.scss';
@import '../assets/_variable.scss';
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
  height: 91vh;
  @include padTOdeskTop {
    height: 82vh;
  }
}

.swiper-slide {
  font-size: 18px;
  color: white;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
}
.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  background-image: url('../assets/swiper_phone/place_bgi.jpg');
  @include bg();
}
.swiper-slide .title {
  width: 200px;
  font-size: 41px;
  font-weight: 300;
  text-align: center;
  margin: auto;
  font-weight: bold;
}
.swiper-slide .subtitle {
  width: 200px;
  font-size: 35px;
  text-align: center;
  margin: auto;
  font-weight: bold;
}
.swiper-slide .text {
  padding-top: 20px;
  width: 75%;
  @include cellPhone() {
    width: 100%;
  }
  line-height: 1.3;
  margin: auto;
  text-align: center;
}
.swiper-slide p {
  font-size: 17px;
  @include deskTop() {
    font-size: 20px;
  }
  line-height: 1.3;
  line-height: 2;
}
.card {
  &-header {
    padding: 0;
    button {
      width: 100%;
      padding: 10px;
      font-size: 26px;
      background-color: $important;
      color: white;
      &:focus {
        outline: none;
      }
    }
  }
}
.text {
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    margin: 20px 0;
  }
}
</style>
