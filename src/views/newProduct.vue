<template>
  <div class="animated fadeIn slow new">
    <video
      src="../assets/newProduct/sony-video-2.mp4"
      autoplay
      loop
      class="sony-video-2"
      @click="play('.sony-video-2')"
    >Your browser does not support the video tag.</video>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
        <div class="swiper-slide"></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="container mt-5 swiper-word">
      <p class="text-muted animated infinite shake slower">
        拖曳轉動看細節
        <i class="fas fa-mouse-pointer"></i>
      </p>
    </div>
    <header class="container d-flex flex-column align-items-center my-5" data-aos="fade-up">
      <div class="w-md-55">
        <h2 class="text-center my-3">Sony首款 三鏡頭手機</h2>
        <p
          class="my-5 text-muted"
        >自由切換拍照鏡頭、拍出最理想的照片！Xperia 1 搭載三鏡頭相機，包含 16mm 超廣角鏡頭、多功能 26mm 鏡頭和具有 2 倍光學變焦的 52mm 鏡頭，可以因應各種不同環境及拍照需求、自行切換運用，即使在嚴苛的低亮度環境、都能捕捉美麗影像。</p>
      </div>
      <video
        src="../assets/newProduct/sony-video-1.mp4"
        autoplay
        loop
        class="sony-video-1"
        @click="play('.sony-video-1')"
      >Your browser does not support the video tag.</video>
    </header>

    <section class="container d-flex flex-column align-items-center my-5" data-aos="fade-up">
      <div class="w-md-55">
        <h2 class="text-center my-3">導入α數位單眼相機的功能</h2>
        <p
          class="my-5 text-muted"
        >Xperia 1 採用全新BIONZ X™手機影像處理技術，導入α數位單眼相機技術，獨家內建多種α相機專業技術，Xperia 1輕鬆擁有大師級的拍照能力。</p>
      </div>
      <img src="../assets/newProduct/sony-1.jpg" class="img-fluid" alt>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 my-4" data-aos="fade-right">
          <img src="../assets/newProduct/sony-2.jpg" class="img-fluid" alt>
        </div>
        <div class="col-12 col-md-6 my-4 newProduct-word" data-aos="fade-up">
          <h3>低光源RAW降噪拍照</h3>
          <p
            class="text-muted"
          >夜拍更加清晰銳利！Xperia 1 支援最新「RAW檔降噪」功能，能在相片原始檔狀態即減少噪點，讓最終輸出影像更加清晰銳利。加上F1.6大光圈及大的像素面積，即使在低光環境下也能有好的畫質。</p>
        </div>

        <div class="col-12 col-md-6 my-4 newProduct-word" data-aos="fade-up">
          <h3>10連拍 自動對焦/ 自動曝光拍照</h3>
          <p
            class="text-muted"
          >拍攝動態主體，就是清晰標準！有了「10 fps高速連拍搭配自動對焦及自動曝光追蹤」，即使拍攝主體正在移動，依然能使用連拍模式拍攝畫質清晰、對焦精準與亮度平衡的完美相片。</p>
        </div>
        <div class="col-12 col-md-6 my-4" data-aos="fade-left">
          <img src="../assets/newProduct/sony-3.png" class="img-fluid" alt>
        </div>

        <div class="col-12 col-md-6 my-4" data-aos="fade-right">
          <img src="../assets/newProduct/sony-4.jpg" class="img-fluid" alt>
        </div>
        <div class="col-12 col-md-6 my-4 newProduct-word" data-aos="fade-up">
          <h3>手動模式 30秒快門</h3>
          <p
            class="text-muted"
          >快門延長，拍照樂趣更廣！透過手動控制可自行設定快門速度及ISO值，高達 30 秒的曝光時間、讓你就像使用專業相機般、輕鬆拍出車軌夜景或星空！</p>
        </div>

        <div class="col-12 my-4 newProduct-word d-flex flex-column align-items-center" data-aos="fade-up" >
          <div class="w-md-55">
            <h3 class="text-center my-3">Cinema Pro 電影級錄影功能</h3>
            <p
              class="my-5 text-muted"
            >用手機也能拍出專業感十足的電影作品！源自Sony專業電影攝影機CineAlta技術，Xperia 1獨家的Cinema Pro錄影應用程式、提供與專業人士相同的參數及色彩設定、共有八種不同電影風格，讓你在拍攝前先行設定影片的光感色調、輕鬆拍出大師級的電影氛圍！Cinema Pro 還提供多種參數，包括鏡頭、白平衡、對焦方式、ISO值、快門等可供調整，滿足使用者在影音創作上的更多需求。</p>
          </div>
          <img src="../assets/newProduct/sony-5.jpg" class="img-fluid" alt>
        </div>
      </div>
    </div>
    <div class="my-4 sony-6">
      <div class="sony-6-bgi" data-aos="fade-right" data-aos-duration="3000"></div>
      <p>沉浸饗宴 大師級娛樂體驗</p>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  methods: {
    play(video) {
      const videos = document.querySelector(video);
      if (videos.paused) {
        videos.play();
      } else {
        videos.pause();
      }
    }
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      //loop:true,
      effect: "flip",
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>

<style lang="scss">
@import "../assets/_grid.scss";
@import "../assets/_mixin.scss";
.new{
  overflow: hidden;
}
.swiper-container {
  width: 300px;
  height: 300px;
  padding: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}
.swiper-pagination {
  position: relative;
  margin-top: 100px;
}
video {
  width: 100%;
  display: block;
  margin-top: 60px;
  @include padTOdeskTop{
    margin-top: 150px;
    height: 70vh;
  }
}
.sony-video-1 {
  max-height: 400px;
}
.sony-video-2 {
  @include deskTop() {
    //height: 100vh;
  }
}
.w-md-55 {
  @include deskTop() {
    width: 55%;
  }
}
.newProduct-word {
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    margin-bottom: 25px;
    font-weight: 800;
  }
  p {
    font-weight: lighter;
  }
}
.sony-6 {
  width: 100%;
  height: 0;
  padding-bottom: 30%;
  position: relative;
  background-color: black;
  &-bgi {
    @include bg();
    background-image: url("../assets/newProduct/sony-7.jpg");
    position: absolute;
    width: 100%;
    height: 100%;
  }
  p {
    color: white;
    font-weight: bolder;
    font-size: 30px;
    @include deskTop() {
      font-size: 50px;
    }
    z-index: 10;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    white-space: nowrap;
  }
}
.swiper-word {
  p {
    position: relative;
    text-align: center;
    i {
      position: absolute;
      bottom: 0;
      left: 50%;
    }
  }
}
.swiper-slide:nth-child(1) {
  background-image: url("../assets/swiper_phone/swiper-1.png");
}
.swiper-slide:nth-child(2) {
  background-image: url("../assets/swiper_phone/swiper-2.png");
}
.swiper-slide:nth-child(3) {
  background-image: url("../assets/swiper_phone/swiper-3.png");
}
.swiper-slide:nth-child(4) {
  background-image: url("../assets/swiper_phone/swiper-4.png");
}
.swiper-slide:nth-child(5) {
  background-image: url("../assets/swiper_phone/swiper-5.png");
}
.swiper-slide:nth-child(6) {
  background-image: url("../assets/swiper_phone/swiper-6.png");
}
.swiper-slide:nth-child(7) {
  background-image: url("../assets/swiper_phone/swiper-7.png");
}
.swiper-slide:nth-child(8) {
  background-image: url("../assets/swiper_phone/swiper-8.png");
}
</style>
