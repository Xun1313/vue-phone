<template>
  <div class="animated fadeIn slow">
    <table class="table container mt-5">
      <thead>
        <th></th>
        <th>品名</th>
        <th>數量</th>
        <th>單價</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="item in cart.carts" :key="item.id">
          <td class="align-middle">
            <img :src="item.product.imageUrl" class="img-fluid cart-img" alt>
          </td>
          <td class="align-middle">
            {{ item.product.title }}
            <div class="text-success" v-if="item.coupon">已套用優惠券</div>
          </td>
          <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
          <td class="align-middle">{{ item.final_total }}</td>
          <td class="align-middle">
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="removeCartItem(item.id)"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-right">總計</td>
          <td class="h6 text-right">{{ cart.total|currency }}</td>
        </tr>
        <tr v-if="cart.final_total!==cart.total">
          <td colspan="3" class="text-right text-success">折扣價</td>
          <td class="h5 text-right text-success">{{ cart.final_total|currency }}</td>
        </tr>
        <tr v-if="cart.final_total!==cart.total">
          <td colspan="3" class="text-right text-success">應付款</td>
          <td
            colspan="3"
            class="h5 text-center text-success"
          >{{ cart.total-cart.final_total|currency }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="input-group mb-3 input-group-sm container">
      <input type="text" class="form-control" placeholder="請輸入123456" v-model="coupon_code">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">套用優惠碼</button>
      </div>
    </div>
    <div class="container">
      <router-link to="/check-out" class="btn btn-outline-danger d-block ml-auto" style="width:100px">去買單</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      coupon_code: ""
    };
  },
  methods: {
    getCart() {
      this.$store.dispatch("updateLoading", true);
      this.$http.get(`${process.env.VUE_APP_API}/api/adam/cart`).then(res => {
        console.log(res);
        this.cart = res.data.data;
        this.$store.dispatch("updateLoading", false);
      });
    },
    removeCartItem(id) {
      this.$store.dispatch("updateLoading", true);
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/adam/cart/${id}`)
        .then(res => {
          console.log(res);
          this.getCart();
          this.$store.dispatch("updateLoading", false);
        });
    },
    addCouponCode() {
      this.$store.dispatch("updateLoading", true);
      const api = `${process.env.VUE_APP_API}/api/adam/coupon`;
      const coupon = {
        code: this.coupon_code
      };
      this.$http.post(api, { data: coupon }).then(res => {
        console.log(res);
        this.$store.dispatch("updateLoading", false);
        if (res.data.success) {
          this.getCart();
        } else {
          alert("優惠碼有誤");
        }
      });
    },
    createOrder() {
      const api = `${process.env.VUE_APP_API}/api/adam/order`;
      this.$validator.validate().then(valid => {
        if (valid) {
          this.$http.post(api, { data: this.form }).then(res => {
            if (res.data.success) {
              console.log("訂單已建立", res);
              this.$router.push(`/customer-checkout/${res.data.orderId}`);
            }
          });
        } else {
          console.log("欄位不完整");
        }
      });
    }
  },
  created() {
    this.getCart();
  }
};
</script>

<style lang="scss">
.cart-img {
  max-width: 230px;
}

/* th:nth-child(1){
  width: 50%
}
tbody td:nth-child(1){
  width: 50%
} */
</style>
