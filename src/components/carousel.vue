<template>
  <div class="container-fluid p-0">
    <div class="bd-example">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="3000">
            <div class="img img1"></div>
            <!-- <img src="../assets/carousel/carousel-1.jpg" class="rounded d-block w-100" alt="..." /> -->
            <div class="carousel-caption d-md-flex carousel-title-1">
              <p class="font-weight-bolder p-1">
                讓未來
                現 在 就 來
              </p>
            </div>
          </div>
          <div class="carousel-item" data-interval="3000">
            <div class="img img2"></div>
            <!-- <img src="../assets/carousel/carousel-2.jpg" class="rounded d-block w-100" alt="..." /> -->
            <div class="carousel-caption d-md-flex carousel-title-2">
              <p class="font-weight-bolder">
                唯一的「不同」
                是處處都「不同」
              </p>
            </div>
          </div>
          <div class="carousel-item" data-interval="3000">
            <div class="img img3"></div>
            <!-- <img src="../assets/carousel/carousel-3.jpg" class="rounded d-block w-100" alt="..." /> -->
            <div
              class="carousel-caption d-md-flex carousel-title-3 justify-content-end align-items-end"
            >
              <p class="font-weight-bolder pb-2">
  高性能與長續航
  再一次突破
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon bg" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon bg" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/_grid.scss";
@import "../assets/_mixin.scss";
.img {
  @include bg();
  width: 100%;
  height: 100vh;
  @include cellPhone() {
    height: 45vh;
  }
}
.img1{
  background-image: url('../assets/carousel/carousel-1.jpg');
}
.img2{
  background-image: url('../assets/carousel/carousel-2.jpg');
}
.img3{
  background-image: url('../assets/carousel/carousel-3.jpg');
}
.carousel-title-1 {
  color: white;
  p {
    white-space: pre;
  }
}
.carousel-title-2 {
  color: white;
}
.carousel-title-3 {
  p {
    color: white;
    white-space: pre;
    background-color: black;
    opacity: 0.5;
  }
}
.carousel-caption {
  position: relative;
  p {
    position: absolute;
    bottom: 150%;
    right: 20%;
    font-size: 25px;
    padding: 10px;
    @include cellPhone() {
      bottom: 20%;
      font-size: 20px;
    }
  }
}
/* .carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 100px;
  width: 100px;
  outline: black;
  background-size: 100%, 100%;
  border-radius: 50%;
  border: 1px solid black;
  background-image: none;
} */

/* .carousel-control-next-icon:after
{
  content: '>';
  font-size: 55px;
  color: red;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 55px;
  color: red;
} */
</style>
