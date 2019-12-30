<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade all" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-interval="2000">
        <div class="carousel-product carousel-product-1">
          <!-- <p>
  告 別 舊 機
  迎 接 新 機
          </p> -->
        </div>
      </div>
      <div class="carousel-item" data-interval="2000">
        <div class="carousel-product carousel-product-2">
          <p>輕易 不說完美</p>
        </div>
      </div>
      <div class="carousel-item" data-interval="2000">
        <div class="carousel-product carousel-product-3">
          <p>
            大 不 凡 你的掌上巨屏
          </p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/_grid.scss';
@import '../assets/_mixin.scss';
.all {
  margin-top: 60px;
  @include padTOdeskTop() {
    margin-top: 114px;
  }
}
.carousel-product {
  @include bg();
  width: 100%;
  height: 45vh;
  @include padTOdeskTop() {
    height: 100vh;
  }
  p {
    padding: 0 10px;
  }
  //position: absolute;
}

.carousel-product-1 {
  background-image: url('../assets/carousel/carousel-product-1.jpg');
  p {
    position: absolute;
    bottom: 0%;
    right: 10%;
    white-space: pre;
    color: wheat;
    font-weight: 900;
    font-size: 30px;
    @include cellPhone() {
      font-size: 22px;
    }
    @include pad() {
      font-size: 22px;
    }
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
}
.carousel-product-2 {
  background-image: url('../assets/carousel/carousel-product-2.jpg');
  p {
    position: absolute;
    bottom: 0%;
    left: 10%;
    color: white;
    font-size: 45px;
    white-space: pre;
    @include pad() {
      font-size: 40px;
    }
    @include cellPhone() {
      font-size: 30px;
    }
  }
}
.carousel-product-3 {
  background-image: url('../assets/carousel/carousel-product-3.jpg');
  p {
    position: absolute;
    bottom: 0%;
    right: 10%;
    color: rgb(255, 255, 255);
    font-size: 45px;
    white-space: pre;
    font-weight: bolder;
    @include pad() {
      font-size: 40px;
    }
    @include cellPhone() {
      font-size: 30px;
    }
  }
}
</style>
