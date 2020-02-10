<template>
  <section class="new" ref="new">
    <video
      src="../assets/newProduct/sony-video-2.mp4"
      autoplay
      loop
      class="sony-video-2"
      @click="play('.sony-video-2')"
    >
      Your browser does not support the video tag.
    </video>
    <section class="phone container">
      <div class="phone-swiper">
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
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <article class="phone-content">
        <h2 class="phone-content-title">SONY Xperia 1</h2>
        <h4 class="phone-content-title">為多工處理而打造的螢幕</h4>
        <p class="phone-content-word text-muted">
          6.5 吋 21:9 CinemaWide
          螢幕讓你的智慧型手機有更多運用空間。寬顯示幕改善了多工處理的體驗，讓你開啟兩個視窗時能夠看到更多東西。
        </p>
      </article>
    </section>
    <section class="film mt-5" data-aos="fade-up" ref="film">
      <div class="film-bg">
        <div class="container">
          <video
            src="../assets/newProduct/sony-video-1.mp4"
            autoplay
            class="film-bg-video"
            ref="film-bg-video"
            @click="play('.film-bg-video')"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div class="container film-container">
        <article class="film-container-content">
          <h3 class="my-3">Sony首款 三鏡頭手機</h3>
          <p>
            自由切換拍照鏡頭、拍出最理想的照片！Xperia 1 搭載三鏡頭相機，包含
            16mm 超廣角鏡頭、多功能 26mm 鏡頭和具有 2 倍光學變焦的 52mm
            鏡頭，可以因應各種不同環境及拍照需求、自行切換運用，即使在嚴苛的低亮度環境、都能捕捉美麗影像。
          </p>
        </article>
      </div>
    </section>

    <section class="group" data-aos="fade-up">
      <div class="group-pic1 pic-height"></div>
      <div class="container">
        <article class="group-content">
          <h3 class="my-3">導入α數位單眼相機的功能</h3>
          <p>
            Xperia 1 採用全新BIONZ
            X™手機影像處理技術，導入α數位單眼相機技術，獨家內建多種α相機專業技術，Xperia
            1輕鬆擁有大師級的拍照能力。
          </p>
        </article>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-md-6 my-4" data-aos="fade-right">
          <img src="../assets/newProduct/sony-2.jpg" class="img-fluid" alt />
        </div>
        <div class="col-md-6 my-4 newProduct-word" data-aos="fade-up">
          <h3>低光源RAW降噪拍照</h3>
          <p class="text-muted">
            夜拍更加清晰銳利！Xperia 1
            支援最新「RAW檔降噪」功能，能在相片原始檔狀態即減少噪點，讓最終輸出影像更加清晰銳利。加上F1.6大光圈及大的像素面積，即使在低光環境下也能有好的畫質。
          </p>
        </div>

        <div class="col-md-6 my-4 newProduct-word" data-aos="fade-up">
          <h3>10連拍 自動對焦/ 自動曝光拍照</h3>
          <p class="text-muted">
            拍攝動態主體，就是清晰標準！有了「10
            fps高速連拍搭配自動對焦及自動曝光追蹤」，即使拍攝主體正在移動，依然能使用連拍模式拍攝畫質清晰、對焦精準與亮度平衡的完美相片。
          </p>
        </div>
        <div class="col-md-6 my-4" data-aos="fade-left">
          <img src="../assets/newProduct/sony-3.png" class="img-fluid" alt />
        </div>

        <div class="col-md-6 my-4" data-aos="fade-right">
          <img src="../assets/newProduct/sony-4.jpg" class="img-fluid" alt />
        </div>
        <div class="col-md-6 my-4 newProduct-word" data-aos="fade-up">
          <h3>手動模式 30秒快門</h3>
          <p class="text-muted">
            快門延長，拍照樂趣更廣！透過手動控制可自行設定快門速度及ISO值，高達
            30 秒的曝光時間、讓你就像使用專業相機般、輕鬆拍出車軌夜景或星空！
          </p>
        </div>
      </div>
    </section>
    <section class="group" data-aos="fade-up">
      <div class="group-pic2 pic-height"></div>
      <div class="container">
        <article class="group-content">
          <h3 class="my-3">SteadyShot™ 光學防手震</h3>
          <p>
            Xperia
            1擁有獨特的混合穩定系統，同時融合光學影像穩定功能與電子影像穩定功能。即使在移動時，都能錄製無震動、流暢的影片。
          </p>
        </article>
      </div>
    </section>

    <section class="container standard">
      <h2 class="standard-title">規格</h2>
      <div class="standard-all">
        <div class="standard-group1">
          <div class="standard-group1-item">
            <div class="standard-group1-item-pic">
              <i class="fas fa-tablet-alt"></i>
            </div>
            <p class="standard-group1-item-content">
              21:9 CinemaWide™ 4K HDR OLED 顯示幕
            </p>
          </div>
          <div class="standard-group1-item">
            <div class="standard-group1-item-pic">
              <i class="fas fa-camera-retro"></i>
            </div>
            <p class="standard-group1-item-content">
              搭載 2 倍光學變焦與廣角鏡頭的三鏡頭相機系統
            </p>
          </div>
          <div class="standard-group1-item">
            <div class="standard-group1-item-pic">
              <i class="fas fa-video"></i>
            </div>
            <p class="standard-group1-item-content">4K HDR 影片錄製</p>
          </div>
          <div class="standard-group1-item">
            <div class="standard-group1-item-pic">
              <i class="fab fa-soundcloud"></i>
            </div>
            <p class="standard-group1-item-content">
              劇院級的 Dolby Atmos® 音效
            </p>
          </div>
          <div class="standard-group1-item">
            <div class="standard-group1-item-pic">
              <i class="fas fa-battery-three-quarters"></i>
            </div>
            <p class="standard-group1-item-content">3330mAh 高容量電池</p>
          </div>
        </div>
        <div class="standard-group2">
          <article class="standard-group2-item">
            <p class="standard-group2-item-title">SIM 卡功能</p>
            <p class="standard-group2-item-content">
              單卡, 雙 SIM 卡混合 (一張 Nano SIM 卡配一張 Nano SIM 卡，或一張
              microSD™ 卡)5, Nano SIM 卡
            </p>
          </article>
          <article class="standard-group2-item">
            <p class="standard-group2-item-title">記憶體與儲存空間</p>
            <p class="standard-group2-item-content">
              6GB RAM, 支援 microSDXC (最高 512GB), 128GB ROM (UFS 內建記憶體)8
            </p>
          </article>
          <article class="standard-group2-item">
            <p class="standard-group2-item-title">顯示幕</p>
            <p class="standard-group2-item-content">
              21:9 CinemaWideTM 顯示幕1, 6.5 吋 4K HDR OLED (1644x3840), 「由
              CineAlta 支援」的創作模式。本功能受 Master Monitor
              色彩重製技術啟發, 手機版 X1TM
            </p>
          </article>
          <article class="standard-group2-item">
            <p class="standard-group2-item-title">相機</p>
            <p class="standard-group2-item-content">
              三鏡頭相機系統, 12MP + 12MP + 12MP, 16mm 超廣角, 52mm 望遠鏡頭, 2x
              光學變焦, 8 MP 正面相機
            </p>
          </article>
          <article class="standard-group2-item">
            <p class="standard-group2-item-title">內部配備</p>
            <p class="standard-group2-item-content">
              Qualcomm® 驍龍™ 855 行動平台6
            </p>
          </article>
          <article class="standard-group2-item">
            <p class="standard-group2-item-title">重量</p>
            <p class="standard-group2-item-content">178 公克</p>
          </article>
        </div>
      </div>
    </section>

    <section class="sony-6">
      <div
        class="sony-6-bgi pic-height"
        data-aos="fade-right"
        data-aos-duration="3000"
      ></div>
      <h3>沉浸饗宴 大師級娛樂體驗</h3>
    </section>
  </section>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  methods: {
    play(video) {
      const videos = document.querySelector(video)
      if (videos.paused) {
        videos.play()
      } else {
        videos.pause()
      }
    }
  },
  mounted() {
    new Swiper('.swiper-container', {
      //loop:true,
      effect: 'flip',
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    //window.addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy() {
    //window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_grid.scss';
@import '../assets/_mixin.scss';
@import '../assets/_variable.scss';
.standard {
  margin: 50px auto;
  &-all {
    @include padTOdeskTop {
      display: flex;
    }
  }
  &-title {
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    font-size: 30px;
  }
  &-group1 {
    margin-bottom: 40px;
    @include padTOdeskTop {
      margin-bottom: 0;
    }
    &-item {
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding: 15px 0;
      &-pic {
        font-size: 30px;
        width: 30px;
        height: 30px;
        i {
          display: block;
          width: 100%;
        }
      }
      &-content {
        opacity: 0.7;
        font-size: 16px;
        margin-left: 20px;
      }
    }
  }
  &-group2 {
    @include padTOdeskTop {
      margin-left: 30px;
    }
    &-item {
      margin-bottom: 20px;
      &-title {
        font-size: 16px;
      }
      &-content {
        opacity: 0.7;
        font-size: 16px;
      }
    }
  }
}
.phone {
  margin-top: 50px;
  @include padTOdeskTop {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0px;
  }
  &-swiper {
    margin-bottom: 50px;
    @include padTOdeskTop {
      width: 50%;
      margin-bottom: 0px;
    }
  }
  &-content {
    @include padTOdeskTop {
      width: 50%;
    }
    &-title {
      margin-bottom: 20px;
    }
  }
}
.group {
  @include deskTop {
    margin: 0;
  }
  margin: 50px 0;
  position: relative;
  .container {
    @include deskTop {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
    }
  }
  &-content {
    @include deskTop {
      width: 25%;
    }
  }
  &-pic1 {
    background-image: url('../assets/newProduct/sony-1.jpg');
    width: 100%;
  }
  &-pic2 {
    background-image: url('../assets/newProduct/sony-5.jpg');
    width: 100%;
  }
}
.film {
  @include deskTop {
    display: flex;
    align-items: center;
  }
  position: relative;
  &-bg {
    background-color: black;
    width: 100%;
    &-video {
      height: 100%;
      margin-left: auto;
      display: block;
      position: relative;
      z-index: 10;
      width: 100%;
      @include deskTop {
        width: 75%;
      }
    }
  }
  &-container {
    @include deskTop {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      order: -1;
    }
    &-content {
      @include deskTop {
        width: 25%;
        color: white;
      }
    }
  }
}
.pic-height {
  @include bg();
  height: 40vh;
  @include pad {
    height: 50vh;
  }
  @include padTOdeskTop {
    height: 60vh;
  }
  @include deskTop {
    height: 80vh;
  }
}
.new {
  overflow: hidden;
}
.swiper-container {
  width: 200px;
  height: 300px;
  //padding: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 200px;
  height: 300px;
}
.swiper-wrapper {
  width: 200px;
  height: 300px;
}

.swiper-pagination {
  position: relative;
  //margin-top: 100px;
}
/deep/.swiper-pagination-bullet-active {
  background: $important;
}
.swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,<svg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'><path%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23#{$important2}'%2F><%2Fsvg>");
  outline: none;
}
.swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23#{$important2}'%2F%3E%3C%2Fsvg%3E");
  outline: none;
}
/* video {
  width: 100%;
  display: block;
  @include padTOdeskTop {
    height: 70vh;
  }
} */
/* .sony-video-1 {
  max-height: 400px;
} */
.sony-video-2 {
  width: 100%;
}
.sony-6 {
  position: relative;
  background-color: black;
  &-bgi {
    @include bg();
    background-image: url('../assets/newProduct/sony-7.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-size: 30px;
    @include deskTop() {
      font-size: 50px;
    }
    color: white;
    font-weight: bolder;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
}
.newProduct-word {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  background-image: url('../assets/swiper_phone/swiper-1.png');
}
.swiper-slide:nth-child(2) {
  background-image: url('../assets/swiper_phone/swiper-2.png');
}
.swiper-slide:nth-child(3) {
  background-image: url('../assets/swiper_phone/swiper-3.png');
}
.swiper-slide:nth-child(4) {
  background-image: url('../assets/swiper_phone/swiper-4.png');
}
.swiper-slide:nth-child(5) {
  background-image: url('../assets/swiper_phone/swiper-5.png');
}
.swiper-slide:nth-child(6) {
  background-image: url('../assets/swiper_phone/swiper-6.png');
}
.swiper-slide:nth-child(7) {
  background-image: url('../assets/swiper_phone/swiper-7.png');
}
.swiper-slide:nth-child(8) {
  background-image: url('../assets/swiper_phone/swiper-8.png');
}
p {
  margin-bottom: 0;
}
</style>
