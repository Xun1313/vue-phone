<template>
  <div mt-5>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal('新增')">
        建立新產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>分類</th>
          <th>產品名稱</th>
          <th>原價</th>
          <th>售價</th>
          <th>是否啟用</th>
          <th>編輯</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price | currency }}</td>
          <td>{{ item.price | currency }}</td>
          <td>
            <span class="success" v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal('編輯', item)"
            >
              編輯
            </button>
          </td>
          <td>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openModal('刪除', item)"
            >
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <pagination
      :paginations="pagination"
      @getProducts="getProducts"
    ></pagination>

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
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ temProduct.title }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="deleteModal">
              確認刪除
            </button>
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
              <span>新增產品</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    placeholder="請輸入圖片連結"
                    v-model="temProduct.imageUrl"
                  />
                </div>
                <div class="form-group">
                  <label for="customFile">
                    或 上傳圖片
                    <i
                      class="fas fa-spinner fa-spin"
                      v-if="status.fileUploading"
                    ></i>
                  </label>
                  <input
                    type="file"
                    id="customFile"
                    class="form-control"
                    ref="files"
                    @change="uploadFile()"
                  />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt
                  :src="temProduct.imageUrl"
                />
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="請輸入標題"
                    v-model="temProduct.title"
                  />
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      placeholder="請輸入分類"
                      v-model="temProduct.category"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input
                      type="unit"
                      class="form-control"
                      id="unit"
                      placeholder="請輸入單位"
                      v-model="temProduct.unit"
                    />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      placeholder="請輸入原價"
                      v-model="temProduct.origin_price"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      placeholder="請輸入售價"
                      v-model="temProduct.price"
                    />
                  </div>
                </div>
                <hr />

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="description"
                    placeholder="請輸入產品描述"
                    v-model="temProduct.description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="請輸入產品說明內容"
                    v-model="temProduct.content"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="is_enabled"
                      v-model="temProduct.is_enabled"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled"
                      >是否啟用</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import pagination from '../../components/pagination'
export default {
  data() {
    return {
      products: [],
      temProduct: {},
      isNew: false,
      status: {
        fileUploading: false
      },
      pagination: {}
    }
  },
  methods: {
    getProducts(page = 1) {
      this.$store.dispatch('updateLoading', true)
      this.$http
        .get(`${process.env.VUE_APP_API}/api/adam/admin/products?page=${page}`)
        .then(res => {
          console.log(res)
          this.$store.dispatch('updateLoading', false)
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
      //console.log(process.env.VUE_APP_API);
    },
    openModal(isNew, item) {
      if (isNew === '新增') {
        this.temProduct = {}
        this.isNew = '新增'
        $('#productModal').modal('show')
      } else if (isNew === '編輯') {
        this.temProduct = { ...item } //Object.assign({}, item);
        this.isNew = '編輯'
        $('#productModal').modal('show')
      } else {
        this.temProduct = { ...item }
        this.isNew = '刪除'
        $('#deleteModal').modal('show')
      }
    },
    deleteModal() {
      const vm = this
      //console.log(`${process.env.VUE_APP_API}/api/adam/product/${vm.temProduct.id}`);

      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/adam/admin/product/${
            vm.temProduct.id
          }`
        )
        .then(res => {
          console.log(res)
          $('#deleteModal').modal('hide')
          vm.getProducts()
        })
    },
    uploadFile() {
      console.log(this)
      const uploadFile = this.$refs.files.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadFile)
      const url = `${process.env.VUE_APP_API}/api/adam/admin/upload`
      this.status.fileUploading = true
      this.$http
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res => {
          console.log(res)
          if (res.data.success) {
            this.$set(this.temProduct, 'imageUrl', res.data.imageUrl)
            console.log(this.temProduct)
          } else {
            this.$bus.$emit('push', res.data.message, 'danger')
          }
          this.status.fileUploading = false
        })
    },
    updateProduct() {
      const vm = this
      let api = `${process.env.VUE_APP_API}/api/adam/admin/product`
      let httpMethod = 'post'
      if (vm.isNew === '編輯') {
        api = `${process.env.VUE_APP_API}/api/adam/admin/product/${
          vm.temProduct.id
        }`
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, { data: vm.temProduct }).then(res => {
        console.log(res.data)
        if (res.data.success) {
          $('#productModal').modal('hide')
          vm.getProducts()
        } else {
          $('#productModal').modal('hide')
          vm.getProducts()
          console.log('新增失敗')
        }
        //vm.products = res.data.products;
      })
    }
  },
  created() {
    this.getProducts()
  },
  components: {
    pagination
  }
}
</script>
