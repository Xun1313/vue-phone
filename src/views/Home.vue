<template>
  <div class="animated fadeIn delay-2s home">
    <carousel></carousel>
    <!-- 第一個標語 -->
    <div class="p-5 container">
      <div class="row">
        <div
          class="col-12 col-md-6 title d-flex flex-column justify-content-center mb-3"
          data-aos="fade-right"
        >
          <h3 class="font-weight-bolder text-center">以你的智慧型手機換購，獲享折抵優惠。</h3>
          <p class="text-center">以你符合條件的智慧型手機換購全新手機，獲享最高達 NT$14,080 的折抵優惠。你受益，地球也受益。</p>
          <router-link class="text-center" to>
            進一步了解
            <i class="fas fa-chevron-right"></i>
          </router-link>
        </div>
        <div class="col-12 col-md-6 title-pic" data-aos="fade-left">
          <div class="title-img"></div>
        </div>
      </div>
    </div>
    <section>
      <div class="home-bg-iphone">
        <p class="h4 home-bg-iphone-sentence font-weight-bolder" data-aos="fade-up-right">最持久的電池續航力。</p>
      </div>
    </section>
    <!-- 第二個標語 -->
    <div class="container">
      <div class="row">
        <div
          class="p-5 w-50 mx-auto title2 d-flex col-12 col-md-6 flex-column bg-light"
          data-aos="zoom-in"
        >
          <p class="title2-content text-center font-weight-bold">
            <i class="fas fa-dollar-sign text-center"></i>
            零利率分期
            提供零利率分期優惠。
          </p>
        </div>
        <div
          class="p-5 w-50 mx-auto title2 d-flex col-12 col-md-6 flex-column bg-light"
          data-aos="zoom-in"
        >
          <p class="title2-content text-center font-weight-bold">
            <i class="fas fa-box text-center"></i>
            免額外付費的隔日送達服務
            下午 3 點前訂購現貨商品，即可享有兩個工作日內送達服務。
          </p>
        </div>
      </div>
    </div>
    <!-- 第三個標語 -->
    <div class="title3">
      <div class="title3-bgi d-flex justify-content-center align-items-center">
        <p class="title3-sentence text-center mt-3">將你的 iPhone 發揮得淋漓盡致</p>
      </div>
    </div>
    <section>
      <div class="container my-3">
        <div class="row">
          <div
            class="col-12 col-md-6 title4 d-md-flex my-2 bg-light title4"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <i class="fas fa-music fa-3x my-auto title4-icon"></i>
            <div class="p-3">
              <h4 class="font-weight-bolder">音樂備忘錄</h4>
              <p>輕點一下，就能捕捉你所有的音樂靈感，再將這些靈感轉化成出色作品。</p>
              <router-link to>
                進一步了解
                <i class="fas fa-chevron-right"></i>
              </router-link>
            </div>
          </div>
          <div
            class="col-12 col-md-6 title4 d-md-flex my-2 bg-light title4"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <i class="fas fa-guitar fa-3x my-auto title4-icon"></i>
            <div class="p-3">
              <h4>GarageBand</h4>
              <p>在你的 Mac、iPad、iPhone 或 iPod touch 上，以各式各樣的樂器製作音樂。</p>
              <router-link to>
                進一步了解
                <i class="fas fa-chevron-right"></i>
              </router-link>
            </div>
          </div>
          <div
            class="col-12 col-md-6 title4 d-md-flex my-2 bg-light title5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <i class="fas fa-compact-disc fa-3x my-auto title4-icon"></i>
            <div class="p-3">
              <h4>Logic Pro X</h4>
              <p>功能完善的專業級錄音室就在你的 Mac 裡，足以大大提升你的作品水準。</p>
              <router-link to>
                進一步了解
                <i class="fas fa-chevron-right"></i>
              </router-link>
            </div>
          </div>
          <div
            class="col-12 col-md-6 title4 d-md-flex my-2 bg-light title5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <i class="fas fa-sliders-h fa-3x my-auto title4-icon"></i>
            <div class="p-3">
              <h4>MainStage 3</h4>
              <p>將你的 Mac 變身成現場演出設備，為觀眾帶來難以忘懷的精彩演出。</p>
              <router-link to>
                進一步了解
                <i class="fas fa-chevron-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="home-bg-asus">
        <p class="h4 home-bg-asus-sentence font-weight-bolder" data-aos="fade-down-right">雙鏡頭+超廣角鏡頭</p>
      </div>
    </section>
    <div class="container">
      <div class="row my-5 no-gutters">
        <div class="col-4 home-bgi" data-aos="zoom-in">
          <img src="../assets/home_bgi/home_bgi1.jpg" alt />
        </div>
        <div class="col-4 home-bgi" data-aos="zoom-in">
          <img src="../assets/home_bgi/home_bgi2.jpg" alt />
        </div>
        <div class="col-4 home-bgi" data-aos="zoom-in">
          <img src="../assets/home_bgi/home_bgi3.jpg" alt />
        </div>
      </div>
    </div>
    <!-- <section>
      <div class="home-bg-samsung">
        <p class="h4 home-bg-samsung-sentence font-weight-bolder">啟動你的心生活</p>
      </div>
    </section>-->
  </div>
</template>
<script>
import carousel from "../components/carousel";
export default {
  components: {
    carousel
  }
};
</script>

<style lang="scss">
@import "../assets/_grid.scss";
@import "../assets/_mixin.scss";
.home{
  overflow: hidden;
}
.home-bg-iphone {
  @include bg();
  background-image: url("../assets/iphone/Home_iPhone.jpg");
  width: 100%;
  height: 100vh;
  position: relative;
  &-sentence {
    background-color: rgba(255, 208, 0, 0.5);
    position: absolute;
    bottom: 5%;
    left: 5%;
    padding: 20px;
  }
}

/* .home-bg-htc {
  @include bg();
  background-image: url("../assets/htc/Home_HTC_mobile.png");
  width: 100%;
  height: 100vh;
  position: relative;
  &-sentence {
    background-color: rgba(255, 255, 255, 0.37);
    color: black;
    position: absolute;
    bottom: 5%;
    right: 5%;
    padding: 20px;
  }
} */

.home-bg-asus {
  @include bg();
  @include deskTop() {
    background-position: top;
  }
  background-image: url("../assets/asus/Home_Asus.jpg");
  width: 100%;
  height: 100vh;
  position: relative;
  &-sentence {
    background-color: rgba(0, 255, 221, 0.5);
    color: black;
    position: absolute;
    bottom: 5%;
    left: 5%;
    padding: 20px;
  }
}

.home-bg-samsung {
  @include bg();
  background-image: url("../assets/samsung/Home_Samsung.jpg");
  width: 100%;
  height: 100vh;
  position: relative;
  &-sentence {
    background-color: rgba(204, 0, 255, 0.37);
    color: white;
    position: absolute;
    bottom: 5%;
    right: 5%;
    padding: 20px;
  }
}
.title {
  font-size: 50px;
  @include cellPhone() {
    font-size: 30px;
  }
  p,
  a {
    font-size: 17px;
  }
}

.title-pic {
  width: 100%;
  height: 0;
  padding-bottom: 60vh;
  position: relative;
  .title-img {
    @include bg();
    background-position: top;
    background-image: url("../assets/home_bgi/home_bgi_small3.jpg");
    position: absolute;
    width: 100%;
    height: 100%;
  }
}

.title2 {
  &-content {
    font-size: 16px;
    white-space: pre-line;
  }
}

.title3 {
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  position: relative;
  &-bgi {
    @include bg();
    background-image: url("../assets/home_bgi/home_bgi_small1.jpg");
    background-attachment: fixed;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &-sentence {
    font-weight: 900;
    font-size: 40px;
    @include cellPhone() {
      font-size: 30px;
    }
  }
}

.title4 {
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
  a {
    @include cellPhone() {
      text-align: center;
      display: block;
    }
    @include pad() {
      text-align: center;
      display: block;
    }
  }
}

.home-bgi-fluid {
  position: relative;
  &-word {
    background-color: gray;
    opacity: 0.8;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}

.home-bgi > img,
.home-bgi-fluid > img {
  width: 100%;
  height: auto;
  vertical-align: bottom;
}
</style>








