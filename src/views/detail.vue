<template>
  <section>
    <div class="container all">
      <div class="row">
        <div class="col-lg-6">
          <img :src="product.imageUrl" class="mx-auto d-block img-fluid" style="width:230px" />
          <div class="detail">
            <h5 class="detail-title">商品特色</h5>
            <ul class="detail-group">
              <li class="detail-group-item">
                <i class="fas fa-box"></i>
                <p class="detail-group-item-word">免額外付費運送服務</p>
              </li>
              <li class="detail-group-item">
                <i class="fas fa-cog"></i>
                <p class="detail-group-item-word">免額外付費線上個人化設定</p>
              </li>
              <li class="detail-group-item">
                <i class="fas fa-box-open"></i>
                <p class="detail-group-item-word">免額外付費退貨服務</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="d-flex flex-column">
            <blockquote class="blockquote">
              <p class="blockquote-title">{{ product.title }}</p>
              <footer class="blockquote-footer">
                {{ product.description }}
              </footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!product.price">
                {{ product.origin_price | currency }}
              </div>
              <del class="h6" v-if="product.price">原價{{ product.origin_price | currency }}</del>
              <div class="h5" v-if="product.price">現在只要{{ product.price | currency }}</div>
            </div>
            <select class="form-control my-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">選購{{ num }}{{ product.unit }}</option>
            </select>
          </div>
          <div class="text-muted text-nowrap mb-3 text-right">
            小計
            <strong>{{ (product.price * product.num) | currency }}</strong>
          </div>
          <!-- <button type="button" class="btn bg-dark text-white ml-auto d-block"></button> -->
          <button type="button" class="cart" @click="addtoCart(product.id, product.num)">
            <i class="fas fa-shopping-cart"></i>
            <h5>加到購物車</h5>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      orderId: ''
    }
  },
  methods: {
    //點產品名稱進去用的
    getProduct() {
      this.$store.dispatch('getProduct', this.orderId)
    },
    addtoCart(id, qty = 1) {
      const api = `${process.env.VUE_APP_API}/api/adam/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(api, { data: cart }).then(res => {
        console.log(res)
        if (res.data.success) {
          this.$bus.$emit('show')
          this.$bus.$emit('dark')
        }
      })
    }
  },
  computed: {
    product() {
      return this.$store.state.product
    }
  },
  created() {
    this.orderId = this.$route.params.orderId
    this.getProduct()
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/_variable.scss';
.all {
  margin-top: 50px;
}
.blockquote {
  &-title {
    background-color: $important;
    color: white;
    padding: 5px 15px;
    text-align: center;
    display: inline;
    margin: 0;
  }
  &-footer {
    padding: 20px;
    text-indent: 10%;
  }
}
.detail {
  margin-top: 20px;
  &-title {
    margin-bottom: 10px;
    font-size: 20px;
  }
  &-group {
    padding: 0;
    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      i {
        color: $important;
      }
      &-word {
        margin: 0 0 0 5px;
        opacity: 0.7;
      }
    }
  }
}
.cart {
  background-color: $important;
  padding: 10px;
  margin: 0 0 0 auto;
  color: white;
  text-align: center;
  transition: 0.5s all;
  display: block;
  width: 200px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: darken($important, 10%);
  }
  h5 {
    margin: 0 0 0 5px;
    font-size: 20px;
  }
}
</style>
