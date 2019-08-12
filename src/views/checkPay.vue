<template>
  <div class="my-5">
    <form class="col-md-6 mt-4 mx-auto" @submit.prevent="payOrder">
      <table class="table">
        <thead>
          <th>品名</th>
          <th>數量</th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td class="align-middle">{{ item.product.title }}</td>
            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
            <td class="align-middle text-right">{{ item.final_total|currency }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-right">總計</td>
            <td class="text-right">{{ order.total|currency }}</td>
          </tr>
        </tfoot>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th width="100">Email</th>
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
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-right" v-if="order.is_paid === false">
        <router-link to="/" class="btn btn-danger mx-1">繼續購物</router-link>
        <button class="btn btn-danger mx-1">確認付款去</button>
      </div>
    </form>
  </div>
</template>

<script>
import progresses from "../components/progresses";
export default {
  data() {
    return {
      isLoading: false,
      orderId: "",
      order: {
        user: {}
      }
    };
  },
  methods: {
    getOrder() {
      this.$store.dispatch('updateLoading',true)
      this.$http
        .get(`${process.env.VUE_APP_API}/api/adam/order/${this.orderId}`)
        .then(res => {
          console.log(res);
          this.order = res.data.order;
          this.$store.dispatch('updateLoading',false)
        });
    },
    payOrder() {
      this.$http
        .post(`${process.env.VUE_APP_API}/api/adam/pay/${this.orderId}`)
        .then(res => {
          console.log(res);
          if (res.data.success) {
            this.getOrder();
            this.$router.push('/check-out/check-ok')
          }
        });
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
    this.$bus.$emit("progress", true, true, false, "66%");
    this.$bus.$emit("show");
  },
  components: {
    progresses
  }
};
</script>