<template>
  <div class="container all">
    <section class="goods">
      <h2 class="goods-title">商品資訊</h2>
      <table class="table goods-table">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}/{{ item.product.unit }}</td>
            <td>{{ item.final_total | currency }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="goods-table-sum">
              總計{{ order.total | currency }}
            </td>
          </tr>
        </tfoot>
      </table>
    </section>

    <section class="info">
      <h2 class="info-title">聯絡人資訊</h2>
      <table class="table info-table">
        <tbody>
          <tr>
            <th>Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <h5 v-if="!order.is_paid" class="not">尚未付款</h5>
              <h5 v-else class="pay">付款完成</h5>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="route" v-if="order.is_paid === false">
      <router-link class="route-home" to="/">繼續購物</router-link>
      <button type="button" class="route-pay" @click="payOrder">
        確認付款
      </button>
    </section>
  </div>
</template>

<script>
/* import progresses from '../components/progresses' */
export default {
  data() {
    return {
      isLoading: false,
      orderId: '',
      order: {
        user: {}
      }
    }
  },
  methods: {
    getOrder() {
      this.$store.dispatch('updateLoading', true)
      this.$http
        .get(`${process.env.VUE_APP_API}/api/adam/order/${this.orderId}`)
        .then(res => {
          console.log(res)
          this.order = res.data.order
          this.$store.dispatch('updateLoading', false)
        })
    },
    payOrder() {
      this.$http
        .post(`${process.env.VUE_APP_API}/api/adam/pay/${this.orderId}`)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.getOrder()
            this.$router.push('/check-out/check-ok')
          }
        })
    }
  },
  created() {
    this.orderId = this.$route.params.orderId
    this.getOrder()
    this.$bus.$emit('progress', 2)
    this.$bus.$emit('show')
  }
  /* components: {
    progresses
  } */
}
</script>

<style lang="scss" scoped>
@import '../assets/_variable.scss';
@import '../assets/_grid.scss';
.all {
  width: 100%;
  @include padTOdeskTop {
    width: 500px;
  }
  margin: auto;
}
.goods {
  &-table {
    margin-bottom: 20px;
    th {
      background-color: $important;
      color: white;
    }
    &-sum {
      text-align: right;
      font-weight: bold;
    }
  }
}

.info {
  th {
    width: 200px;
    background-color: $important;
    color: white;
  }
  .not {
    color: red;
    font-weight: bold;
  }
  .pay {
    color: green;
    font-weight: bold;
  }
}

.route {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > * {
    color: white;
    background-color: $important;
    padding: 10px;
    transition: 0.5s all;
    text-decoration: none;
    outline: none;
    display: block;
    width: 150px;
    text-align: center;
    &:hover {
      background-color: darken($important, 10%);
    }
  }
  &-home {
    margin-right: 10px;
  }
}
h2 {
  font-size: 18px;
}
h5 {
  font-size: 16px;
}
</style>
