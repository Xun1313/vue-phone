<template>
  <section
    id="carouselExampleFade"
    class="carousel slide carousel-fade all"
    data-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active" data-interval="2000">
        <div class="carousel-product carousel-product-1">
          <h4>
            大 不 凡 你的掌上巨屏
          </h4>
        </div>
      </div>
      <div class="carousel-item" data-interval="2000">
        <div class="carousel-product carousel-product-2">
          <h4>輕易 不說完美</h4>
        </div>
      </div>
      <div class="carousel-item" data-interval="2000">
        <div class="carousel-product carousel-product-3">
          <!-- <h4>
  告 別 舊 機
  迎 接 新 機
          </h4> -->
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleFade"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleFade"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/_grid.scss';
@import '../assets/_mixin.scss';
.carousel-product {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @include bg();
  width: 100%;
  height: 45vh;
  @include padTOdeskTop() {
    height: 100vh;
  }
  &-1 {
    background-image: url('../assets/carousel/carousel-product-1.jpg');
  }
  &-2 {
    background-image: url('../assets/carousel/carousel-product-2.jpg');
  }
  &-3 {
    background-image: url('../assets/carousel/carousel-product-3.jpg');
    h4 {
      margin-bottom: 30px;
      color: wheat;
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
  h4 {
    margin-bottom: 30px;
    color: white;
    font-size: 45px;
    @include pad() {
      font-size: 40px;
    }
    @include cellPhone() {
      font-size: 30px;
    }
  }
}
</style>
