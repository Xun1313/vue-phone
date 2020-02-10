<template>
  <section class="deal">
    <div class="deal-bg">
      <div class="deal-bg-fade" data-aos="fade-up" data-aos-duration="2000">
        <h2 class="deal-title">只給予優質服務</h2>
        <div class="container">
          <div class="row">
            <div class="col-6 col-md-3">
              <article class="deal-item">
                <i class="fas fa-truck"></i>
                <p class="deal-item-title">免運費</p>
                <p class="deal-item-word">全館免運費</p>
              </article>
            </div>
            <div class="col-6 col-md-3">
              <article class="deal-item">
                <i class="fas fa-recycle"></i>
                <p class="deal-item-title">退貨條款</p>
                <p class="deal-item-word">完整的售後服務</p>
              </article>
            </div>
            <div class="col-6 col-md-3">
              <article class="deal-item">
                <i class="fas fa-user-alt"></i>
                <p class="deal-item-title">24小時客服</p>
                <p class="deal-item-word">解答所有問題</p>
              </article>
            </div>
            <div class="col-6 col-md-3">
              <article class="deal-item">
                <i class="fas fa-hand-holding-usd"></i>
                <p class="deal-item-title">安全付款</p>
                <p class="deal-item-word">買家安心</p>
              </article>
            </div>
          </div>
        </div>
        <router-link to="/about" class="deal-more">了解更多</router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/_grid.scss';
@import '../../assets/_mixin.scss';
@import '../../assets/_variable.scss';
.deal {
  @include bg();
  background-image: url('https://images.unsplash.com/photo-1501619090-18cfdb466558?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60');
  background-attachment: fixed;
  background-position: top;
  height: 100vh;
  margin-bottom: 50px;
  @include padTOdeskTop {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    margin: 20px auto;
    @include padTOdeskTop {
      margin: 30px auto;
    }
    .row {
      @include padTOdeskTop {
        width: 100%;
      }
      .col-6,
      .col-md-3 {
        padding: 15px;
      }
    }
  }
  &-bg {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-fade {
      width: 100%;
    }
  }
  &-title {
    color: white;
    text-align: center;
  }
  &-item {
    text-align: center;
    padding: 20px;
    height: 100%;
    color: white;
    i {
      cursor: auto;
      font-size: 34px;
      transition: 0.5s all;
      &:hover {
        transform: rotate(360deg);
      }
    }
    h4 {
      font-size: 20px;
    }
    h5 {
      font-size: 16px;
      opacity: 0.7;
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
}
</style>
