<template>
  <div mt-5>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal('新增')">建立新優惠券</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">名稱</th>
          <th>折扣百分比</th>
          <th width="120">到期日</th>
          <th width="80">是否啟用</th>
          <th width="120">編輯</th>
          <th width="100">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{item.title}}</td>
          <td>{{item.percent}}</td>
          <td>{{item.due_date|moment("YYYY-MM-DD")}}</td>
          <td>
            <span class="success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="openModal('編輯',item)">編輯</button>
          </td>
          <td>
            <button class="btn btn-outline-danger btn-sm" @click="openModal('刪除',item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <pagination :paginations="pagination" @getProducts="getCoupon"></pagination>

    <!-- 刪除 -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ temProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="deleteModal">確認刪除</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 新增、修改 -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="temProduct.title"
                  >
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">優惠碼</label>
                    <input
                      type="text"
                      class="form-control"
                      id="code"
                      placeholder="請輸入優惠碼"
                      v-model="temProduct.code"
                    >
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">到期日</label>
                    <input
                      type="date"
                      class="form-control"
                      id="due_date"
                      placeholder="請輸入到期日"
                      @change="toTimeStamp"
                      v-model="timeStamp"
                    >
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">折扣百分比</label>
                    <input
                      type="number"
                      class="form-control"
                      id="percent"
                      placeholder="請輸入折扣百分比"
                      v-model="temProduct.percent"
                    >
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="temProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    >
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import pagination from '../../components/pagination'
import moment from "moment";
export default {
  data() {
    return {
      isNew: false,
      temProduct: {},
      coupons: [],
      pagination: {},
      timeStamp: ""
    };
  },
  methods: {
    getCoupon(page = 1) {
      this.$store.dispatch('updateLoading',true)
      this.$http
        .get(`${process.env.VUE_APP_API}/api/adam/admin/coupons?page=${page}`)
        .then(res => {
          console.log(res);
          this.coupons = res.data.coupons;
          this.pagination=res.data.pagination
          this.$store.dispatch('updateLoading',false)
        });
    },
    openModal(isNew, item) {
      if (isNew === "新增") {
        this.temProduct = {};
        this.isNew = "新增";
        $("#productModal").modal("show");
      } else if (isNew === "編輯") {
        this.temProduct = { ...item }; //Object.assign({}, item);
        this.timeStamp = moment(this.temProduct.due_date).format("YYYY-MM-DD");
        this.isNew = "編輯";
        $("#productModal").modal("show");
      } else {
        this.temProduct = { ...item };
        this.isNew = "刪除";
        $("#deleteModal").modal("show");
      }
    },
    deleteModal() {
      const vm = this;
      //console.log(`${process.env.VUE_APP_API}/api/adam/product/${vm.temProduct.id}`);

      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/adam/admin/coupon/${vm.temProduct.id}`
        )
        .then(res => {
          console.log(res);
          $("#deleteModal").modal("hide");
          vm.getCoupon();
        });
    },
    updateProduct() {
      const vm = this;
      let api = `${process.env.VUE_APP_API}/api/adam/admin/coupon`;
      let httpMethod = "post";
      if (vm.isNew === "編輯") {
        api = `${process.env.VUE_APP_API}/api/adam/admin/coupon/${
          vm.temProduct.id
        }`;
        httpMethod = "put";
        const {code,id,num,...rest}=vm.temProduct
        vm.temProduct=rest
      }
      this.$http[httpMethod](api, { data: vm.temProduct }).then(res => {
        console.log(res.data);
        if (res.data.success) {
          $("#productModal").modal("hide");
          vm.getCoupon();
          this.timeStamp = "";
        } else {
          $("#productModal").modal("hide");
          vm.getCoupon();
          console.log("新增失敗");
          this.timeStamp = "";
        }
      });
    },
    toTimeStamp() {
      this.temProduct.due_date =moment(this.timeStamp).valueOf();
    }
  },
  computed: {},
  created() {
    this.getCoupon();
  },
  components: {
    pagination
  }
};
</script>