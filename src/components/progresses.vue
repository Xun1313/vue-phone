<template>
  <div class="prog container">
    <div class="prog-item phase" ref="prog-item1">
      <div class="prog-item-num">1</div>
      <div class="prog-item-name">輸入訂單資料</div>
      <i class="fas fa-angle-right prog-item-arrow"></i>
    </div>

    <div class="prog-item" ref="prog-item2">
      <div class="prog-item-num">2</div>
      <div class="prog-item-name">確認付款</div>
      <i class="fas fa-angle-right prog-item-arrow"></i>
    </div>

    <div class="prog-item" ref="prog-item3">
      <div class="prog-item-num center">3</div>
      <div class="prog-item-name center2">完成</div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$bus.$on('progress', num => {
      const numArr = [1, 2, 3];
      numArr.forEach(e => {
        e === num ? this.$refs[`prog-item${num}`].classList.add('phase') : this.$refs[`prog-item${e}`].classList.remove('phase');
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/_variable.scss';
@import '../assets/_grid.scss';
.prog {
  display: flex;
  margin: 140px 0 50px;
  align-items: center;
  justify-content: center;
  &-item {
    display: flex;
    align-items: center;
    font-size: 20px;
    > * {
      margin-right: 30px;
    }
    &-num {
      color: white;
      border-radius: 50%;
      background-color: rgba(128, 128, 128, 0.6);
      text-align: center;
      padding: 5px 15px;
      @include padTOdeskTop {
        margin-right: 5px;
      }
    }
    &-name {
      display: none;
      @include padTOdeskTop {
        display: block;
      }
      color: rgba(128, 128, 128, 0.6);
    }
    &-arrow {
      color: rgba(128, 128, 128, 0.6);
    }
    .center1 {
      margin-right: 0;
      @include padTOdeskTop {
        margin-right: 30px;
      }
    }

    .center2 {
      margin-right: 30px;
      @include padTOdeskTop {
        margin-right: 0;
      }
      //為了進度條能夠置中
    }
  }
}
.phase {
  .prog-item-num {
    background-color: $important;
  }
  .prog-item-name {
    color: $important;
    border-bottom: 2px solid $important;
  }
  .prog-item-arrow {
    color: $important;
  }
}
</style>
