<template>
  <div class="animated fadeIn slow">
    <div class="container my-5">
      <div class="row">
        <div class="col-12 col-lg-6 mt-5">
          <img :src="product.imageUrl" class="mx-auto d-block img-fluid mt-5" style="width:230px">
          <div class="d-flex detail justify-content-between mt-3">
            <div class="detail-word-1">
              <i class="fas fa-box d-block text-center"></i>
              <p>免額外付費運送服務</p>
            </div>
            <div class="detail-word-2">
              <i class="fas fa-cog d-block text-center"></i>
              <p>免額外付費線上個人化設定</p>
            </div>
            <div class="detail-word-3">
              <i class="fas fa-box-open d-block text-center"></i>
              <p>免額外付費退貨服務</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 mt-5">
          <div class="d-flex flex-column p-3">
            <blockquote class="blockquote">
              <p class="mb-0">{{product.content}}</p>
              <footer class="blockquote-footer">{{product.description}}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!product.price">{{product.origin_price|currency}}</div>
              <del class="h6" v-if="product.price">原價{{product.origin_price|currency}}</del>
              <div class="h5" v-if="product.price">現在只要{{product.price|currency}}</div>
            </div>
            <select name class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">選購{{num}}{{product.unit}}</option>
            </select>
          </div>
          <div class="text-muted text-nowrap mr-3 text-right">
            小計
            <strong>{{product.price*product.num|currency}}</strong>
          </div>
          <button
            type="button"
            class="btn bg-dark text-white ml-auto d-block"
            @click="addtoCart(product.id,product.num)"
          >
            <i class="fas fa-shopping-cart"></i>
            加到購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      orderId: ""
    };
  },
  methods: {
    //點產品名稱進去用的
    getProduct() {
      this.$store.dispatch("getProduct", this.orderId);
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch("updateLoading", true);
      const api = `${process.env.VUE_APP_API}/api/adam/cart`;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(api, { data: cart }).then(res => {
        console.log(res);
        if (res.data.success) {
          this.$bus.$emit("push", "已加入購物車", "danger");
          this.$bus.$emit("show");
        }
        this.$store.dispatch("updateLoading", false);
      });
    }
  },
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getProduct();
  },
};
</script>

<style lang="scss">
.detail {
  &-word > i,
  p {
    font-size: 12px;
  }
}
</style>
