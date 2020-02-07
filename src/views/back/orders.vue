<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">下訂時間</th>
          <th scope="col">Email</th>
          <th scope="col">購買款項</th>
          <th scope="col">應付金額</th>
          <th scope="col">是否付款</th>
          <th scope="col">付款時間</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ item.create_at | moment('YYYY-MM-DD') }}</td>
          <td>{{ item.user.email }}</td>
          <td></td>
          <td>{{ item.total | currency }}</td>
          <td class="text-success" v-if="item.is_paid">{{ '已付款' }}</td>
          <td class="text-danger" v-else>{{ '尚未付款' }}</td>
          <td>{{ item.paid_date | moment('YYYY-MM-DD') }}</td>
        </tr>
      </tbody>
    </table>
    <pagination :paginations="pagination" @getProducts="getOrder"></pagination>
  </div>
</template>

<script>
import pagination from '../../components/pagination'
export default {
  data() {
    return {
      orders: [],
      pagination: {}
    }
  },
  methods: {
    getOrder(page = 1) {
      this.$store.dispatch('updateLoading', true)
      this.$http
        .get(`${process.env.VUE_APP_API}/api/adam/admin/orders?page=${page}`)
        .then(res => {
          console.log(res)
          this.orders = res.data.orders
          this.pagination = res.data.pagination
        })
      this.$store.dispatch('updateLoading', false)
    }
  },
  computed: {
    /* items() {
      const vm = this;
      let allItems = "";
      Object.keys(vm.orders.products).forEach(e => {
        allItems += vm.orders.products[e].product.title;
      });
      return allItems;
    } */
  },
  created() {
    this.getOrder()
  },
  components: {
    pagination
  }
}
</script>
