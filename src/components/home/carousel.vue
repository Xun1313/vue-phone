<template>
  <section class="container-fluid p-0">
    <div class="bd-example">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="90000">
            <div class="img img1">
              <article class="d-md-flex carousel-title-1">
                <h5>唯一的「不同」 是處處都「不同」</h5>
              </article>
            </div>
          </div>
          <div class="carousel-item" data-interval="90000">
            <div class="img img2">
              <article class="d-md-flex carousel-title-2">
                <h5>讓未來 現 在 就 來</h5>
              </article>
            </div>
          </div>
          <div class="carousel-item" data-interval="90000">
            <div class="img img3">
              <article class="d-md-flex carousel-title-3 justify-content-end align-items-end">
                <h5>高性能與長續航</h5>
              </article>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon bg" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon bg" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/_grid.scss';
@import '../../assets/_mixin.scss';
.img {
  @include bg();
  width: 100%;
  height: 100vh;
  position: relative;
  article {
    position: absolute;
    bottom: 50px;
    color: white;
    left: 0;
    right: 0;
    text-align: center;
    @include padTOdeskTop {
      left: auto;
      right: 100px;
    }
    h5 {
      font-size: 25px;
      @include padTOdeskTop {
        font-size: 30px;
      }
      margin: 0;
    }
  }
}
.img1 {
  background-image: url('../../assets/carousel/carousel-1.jpg');
}
.img2 {
  background-image: url('../../assets/carousel/carousel-2.jpg');
}
.img3 {
  background-image: url('../../assets/carousel/carousel-3.jpg');
}
.carousel-title-3 {
  background-color: black;
  opacity: 0.5;
  border-radius: 10px;
  padding: 20px;
    width: 250px;
    margin: auto;
}
</style>
