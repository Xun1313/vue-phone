<template>
  <div class="all">
    <div class="cart container" v-if="cart.carts ? cart.carts.length !== 0 : false">
      <div class="cart-title" v-if="cart.carts">共{{ cart.carts.length }}項商品</div>
      <div class="cart-item" v-for="item in cart.carts" :key="item.id">
        <div class="cart-item-flex">
          <img :src="item.product.imageUrl" alt="" class="cart-item-flex-pic" />
          <div class="cart-item-flex-title">
            <div class="primary">{{ item.product.title }}</div>
            <div class="secondary">品牌:{{ item.product.category }}</div>
            <div class="qty">數量:{{item.qty}}{{item.product.unit}}</div>
          </div>
          <div class="cart-item-flex-cancel" @click="removeCartItem(item.id)">
            <i class="fas fa-times "></i>
          </div>
        </div>
        <div class="cart-item-flex">
          <!-- <div class="cart-item-flex-calc">
            <div class="mark mark1" @click="changeCart(item.id, false, item.qty)">
              <i class="fas fa-minus"></i>
            </div>
            <input type="text" class="mark-num" v-model="item.qty" readonly />
            <div class="mark mark2" @click="changeCart(item.id, true, item.qty)">
              <i class="fas fa-plus"></i>
            </div>
          </div> -->
          <div class="cart-item-flex-price" v-if="item.final_total === item.total">NT{{ item.final_total | currency }}</div>
          <div class="cart-item-flex-price" v-else>
            <div class="discount">折扣後</div>
            <div class="final">NT{{ item.final_total | currency }}</div>
            <div class="save">省NT{{ (item.total - item.final_total) | currency }}</div>
          </div>
        </div>
      </div>

      <div class="cart-block">
        <div class="cart-block-sum">
          <div class="cart-block-sum-name">商品金額小計</div>
          <div class="cart-block-sum-price">NT{{ cart.total | currency }}</div>
        </div>
        <div class="cart-block-sum line">
          <div class="cart-block-sum-name">活動折扣</div>
          <div class="cart-block-sum-price">-NT{{ (cart.total - cart.final_total) | currency }}</div>
        </div>
        <div class="cart-block-sum">
          <div class="cart-block-sum-name" v-if="cart.carts">共{{ cart.carts.length }}項商品</div>
          <div class="cart-block-sum-price final">NT{{ cart.final_total | currency }}</div>
        </div>
        <div class="cart-block-coupon">
          <div class="cart-block-coupon-title">優惠券</div>
          <div class="cart-block-coupon-flex">
            <input type="text" class="num" placeholder="請輸入123456" v-model="coupon_code" />
            <div class="use" @click="addCouponCode">使用</div>
          </div>
        </div>
        <div class="cart-block-sum" v-if="couponSwitch">
          <div class="cart-block-sum-coupon">(已套用優惠券)</div>
        </div>
        <router-link to="/check-out" class="cart-block-next">下一步</router-link>
      </div>
    </div>
    <div class="empty container" v-else>
      <div class="empty-word">你的購物車還未有商品</div>
      <router-link to="/" class="empty-home">繼續購物</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: {},
      coupon_code: '',
      couponSwitch: false,
    };
  },
  methods: {
    getCart() {
      this.$store.dispatch('updateLoading', true);
      this.$http.get(`${process.env.VUE_APP_API}/api/adam/cart`).then(res => {
        console.log(res.data);
        this.cart = res.data.data;
        this.$store.dispatch('updateLoading', false);
      });
    },
    removeCartItem(id) {
      this.$store.dispatch('updateLoading', true);
      this.$http.delete(`${process.env.VUE_APP_API}/api/adam/cart/${id}`).then(res => {
        console.log(res);
        this.getCart();
        this.$bus.$emit('show');
        this.$store.dispatch('updateLoading', false);
      });
    },
    addCouponCode() {
      this.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_API}/api/adam/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(api, { data: coupon }).then(res => {
        console.log(res);
        if (res.data.success) {
          this.getCart();
          this.couponSwitch = true;
        } else {
          alert('優惠碼有誤');
        }
        this.$store.dispatch('updateLoading', false);
      });
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_API}/api/adam/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart }).then(res => {
        console.log(res);
        if (res.data.success) {
          this.$bus.$emit('show');
        }
      });
      this.$store.dispatch('updateLoading', false);
    },
    changeCart(id, mark, qty) {
      console.log(id);
      //mark ? this.addtoCart(id, qty + 1) : this.addtoCart(id, qty - 1);
      this.cart.carts.forEach(e => {
        if (e.id === id) {
          mark ? e.qty++ : e.qty--;
          this.addtoCart(id, qty);
        }
      });
    },
    createOrder() {
      const api = `${process.env.VUE_APP_API}/api/adam/order`;
      this.$validator.validate().then(valid => {
        if (valid) {
          this.$http.post(api, { data: this.form }).then(res => {
            if (res.data.success) {
              console.log('訂單已建立', res);
              this.$router.push(`/customer-checkout/${res.data.orderId}`);
            }
          });
        } else {
          console.log('欄位不完整');
        }
      });
    },
  },
  mounted() {
    //this.addtoCart('-LwRy4YowuSsDsS8fmtZ',3);
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/_variable.scss';
@import '../assets/_grid.scss';
.all {
  margin-top: 140px;
}
.cart {
  &-title {
  }
  &-item {
    outline: 1px solid rgba(128, 128, 128, 0.3);
    padding: 20px;
    margin: 0 0 15px 0;
    &-flex {
      display: flex;
      align-items: flex-start;
      margin-bottom: 15px;
      &-pic {
        width: 120px;
        @include pad {
          width: 200px;
        }
        @include padTOdeskTop {
          width: 250px;
        }
        height: auto;
        margin-right: 15px;
      }
      &-title {
        .primary {
          background-color: $important;
          color: white;
          padding: 10px;
          margin-bottom: 20px;
        }
        .secondary {
          //opacity: 0.6;
          font-size: 16px;
        }
        .qty{
          //opacity: .6;
          font-size: 16px;

        }
      }
      &-cancel {
        margin-left: auto;
        cursor: pointer;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        justify-content: center;
        align-items: center;
        display: flex;
        color: $important;
        transition: 0.5s all;
        &:hover {
          background-color: $important;
          color: white;
        }
      }
      //以上是上半部的flex
      &-calc {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        > * {
          margin-right: 20px;
          transition: 0.5s all;
          width: 30px;
          height: 30px;
          @include padTOdeskTop {
            width: 50px;
            height: 50px;
          }
        }
        .mark {
          position: relative;
          padding: 0;
          background-color: white;
          cursor: pointer;
          &1 {
            outline: 1px solid rgba(128, 128, 128, 0.6);
            color: rgba(128, 128, 128, 0.6);
            &:hover {
              outline: 1px solid rgba(128, 128, 128, 1);
            }
          }
          &2 {
            outline: 1px solid lighten($important, 30%);
            color: $important;
            &:hover {
              outline: 1px solid darken($important, 30%);
            }
          }
          > * {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            //font-size: 30px;
            font-size: 20px;
          }
          &-num {
            border: none;
            outline: none;
            text-align: center;
            font-size: 22px;
          }
        }
      }
      &-price {
        text-align: right;
        margin-left: auto;
        color: $important;
        .discount {
          color: red;
        }
        .final {
          color: red;
        }
        .save {
          opacity: 0.6;
        }
      }
    }
  }
  &-block {
    width: 100%;
    @include padTOdeskTop {
      width: 500px;
    }
    padding: 20px;
    background-color: $important;
    margin: auto;
    color: white;
    &-sum {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      &-name {
        font-weight: bold;
      }
      .final {
        font-weight: bold;
      }
      &-coupon {
        margin-left: auto;
      }
    }
    .line {
      border-bottom: 1px solid white;
      padding-bottom: 5px;
    }
    &-coupon {
      margin-bottom: 20px;
      &-flex {
        @include padTOdeskTop {
          display: flex;
        }
        align-items: center;
        justify-content: space-between;
        .num {
          border: none;
          outline: none;
          width: 100%;
          margin: 0 0 10px 0;
          @include padTOdeskTop {
            width: auto;
          }
        }
        .use {
          color: $important;
          background-color: white;
          cursor: pointer;
          transition: 0.5s all;
          margin-left: auto;
          width: 100px;
          text-align: center;
          padding: 5px 0;
          &:hover {
            background-color: black;
            color: white;
          }
        }
      }
    }
    &-next {
      color: $important;
      background-color: white;
      width: 150px;
      padding: 10px;
      text-align: center;
      margin: auto;
      cursor: pointer;
      margin: 15px 0 0 auto;
      display: block;
      transition: 0.5s all;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
}
.empty {
  margin: auto;
  text-align: center;
  padding: 100px 0;
  &-word {
    opacity: 0.6;
    margin-bottom: 20px;
    font-size: 30px;
  }
  &-home {
    width: 200px;
    margin: auto;
    cursor: pointer;
    color: white;
    padding: 15px 20px;
    font-size: 20px;
    background-color: $important;
    transition: 0.5s all;
    &:hover {
      background-color: white;
      color: $important;
    }
  }
}
</style>
