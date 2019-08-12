<template>
  <div >
    <carouselProduct></carouselProduct>
    <div class="d-flex container mt-5 animated fadeIn slow">
      <!-- 左側欄選擇品牌 -->
      <desktopSidebar/>
      <div class="d-flex flex-wrap justify-content-end container">
        <div class="d-flex align-items-center w-100">
          <!-- bread -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb p-0 my-auto bg-white">
              <li class="breadcrumb-item">
                <router-link to="/">首頁</router-link>
              </li>
              <li class="breadcrumb-item active">全部商品</li>
            </ol>
          </nav>
          <div class="d-flex align-items-center ml-auto">
            <!-- 產品上方選擇品牌 -->
            <cellphoneSidebar class="my-4"></cellphoneSidebar>
            <!-- 選擇排版 -->
            <!-- <div class="d-flex justify-content-end" v-if="screen<576">
              <div @click="col.col_xs='12'" class="mx-1">
                <i class="fas fa-stop"></i>
              </div>
              <div @click="col.col_xs='6'" class="mx-1">
                <i class="fas fa-th-large"></i>
              </div>
            </div>
            <div class="d-flex justify-content-end" v-if="screen>=576&&screen<768">
              <div @click="col.col_sm='6'" class="mx-1">
                <i class="fas fa-th-large"></i>
              </div>
              <div @click="col.col_sm='4'" class="mx-1">
                <i class="fas fa-th"></i>
              </div>
            </div>
            <div class="d-flex justify-content-end" v-if="screen>=768">
              <div @click="col.col_md='4'" class="mx-1">
                <i class="fas fa-th"></i>
              </div>
              <div @click="col.col_md='6'" class="mx-1">
                <i class="fas fa-th-large"></i>
              </div>
            </div> -->
            <div class="d-flex justify-content-end" v-if="screen<576">
              <div @click="screening('xs','12')" class="mx-1">
                <i class="fas fa-stop"></i>
              </div>
              <div @click="screening('xs','6')" class="mx-1">
                <i class="fas fa-th-large"></i>
              </div>
            </div>
            <div class="d-flex justify-content-end" v-if="screen>=576&&screen<768">
              <div @click="screening('sm','6')" class="mx-1">
                <i class="fas fa-th-large"></i>
              </div>
              <div @click="screening('sm','4')" class="mx-1">
                <i class="fas fa-th"></i>
              </div>
            </div>
            <div class="d-flex justify-content-end" v-if="screen>=768">
              <div @click="screening('md','4')" class="mx-1">
                <i class="fas fa-th"></i>
              </div>
              <div @click="screening('md','6')" class="mx-1">
                <i class="fas fa-th-large"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="card-group">
            <div class="row mt-4">
              <!-- 主要商品內容 -->
              <div
                class="card shadow-lg bg-light rounded mb-4"
                v-for="item in filterSort"
                :class="[`col-${col.col_xs}`,`col-sm-${col.col_sm}`,`col-md-${col.col_md}`]"
                :key="item.id"
              >
                <div>
                  <img class="img-fluid mx-auto d-block primaryProduct" :src="item.imageUrl" alt>
                </div>
                <div class="card-body p-2">
                  <span
                    class="badge"
                    :class="{
                'badge-dark':item.category==='Sony',
                'badge-primary':item.category==='Samsung',
                'badge-success':item.category==='HTC',
                'badge-danger':item.category==='iPhone',
                'badge-secondary':item.category==='Asus',
              }"
                  >{{item.category}}</span>
                  <a
                    href="#"
                    class="ml-2"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="點擊加入購物車"
                    @click.prevent="addtoCart(item.id)"
                  >
                    <i class="fas fa-shopping-cart"></i>
                  </a>
                  <h5 class="card-title text-center">
                    <a href="#" class="text-dark" @click.prevent="toDetail(item.id)">{{item.title}}</a>
                    <router-link to></router-link>
                  </h5>
                  <div class="d-flex justify-content-center">
                    <p class="card-text">{{item.content}}</p>
                  </div>
                  <div class="d-flex flex-column align-items-center">
                    <div class="d-flex flex-column align-items-center">
                      <div class="h5" v-if="!item.price">{{item.origin_price}}</div>
                      <del class="h6 text-secondary" v-if="item.price">原價{{item.origin_price}}</del>
                      <div class="h5" v-if="item.price">特價{{item.price|currency}}</div>
                    </div>
                    <!-- <div class="d-flex readMore card-footer">
                        <button
                          type="button"
                          class="btn bg-light btn-sm p-1 m-0"
                          @click="getProduct(item.id)"
                        >
                          <i class="fa fa-caret-right" style="padding-left:3px;"></i>
                          立即搶購
                        </button>
                    </div>-->
                  </div>
                </div>
                <div class="readMore card-footer bg-white">
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm p-1 m-0 d-block mx-auto"
                    @click="getProduct(item.id)"
                  >
                    <i class="fa fa-caret-right" style="padding-left:3px;"></i>
                    立即搶購
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 商品詳細 -->
          <div
            class="modal fade"
            id="productModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg modal-my" role="document">
              <div class="modal-content border-0">
                <div class="modal-header bg-dark text-white">
                  <h5 class="modal-title" id="exampleModalLabel">{{product.title}}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body d-flex flex-column flex-lg-row justify-content-between">
                  <img :src="product.imageUrl" class="mx-auto img-fluid">
                  <div class="d-flex flex-column p-3">
                    <blockquote class="blockquote">
                      <p class="mb-0">{{product.content}}</p>
                      <footer class="blockquote-footer">{{product.description}}</footer>
                    </blockquote>
                    <div class="d-flex justify-content-between align-items-baseline">
                      <div class="h5" v-if="!product.price">{{product.origin_price}}</div>
                      <del class="h6" v-if="product.price">原價{{product.origin_price}}</del>
                      <div class="h5" v-if="product.price">現在只要{{product.price}}</div>
                    </div>
                    <select name class="form-control mt-3" v-model="product.num">
                      <option v-for="num in 10" :value="num" :key="num">選購{{num}}{{product.unit}}</option>
                    </select>
                  </div>
                </div>
                <div class="modal-footer">
                  <div class="text-muted text-nowrap mr-3">
                    小計
                    <strong>{{product.price*(product.num)}}</strong>
                  </div>
                  <button
                    type="button"
                    class="btn bg-dark text-white"
                    @click="addtoCart(product.id,product.num)"
                  >
                    <i class="fas fa-shopping-cart"></i>
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import $ from "jquery";
import carouselProduct from "../components/carouselProduct";
import desktopSidebar from "../components/desktopSidebar";
import cellphoneSidebar from "../components/cellphoneSidebar";
import { mapGetters, mapActions } from "vuex";
/* $(document).resize(function () {
  $(this).width()
}); */
export default {
  data() {
    return {
      col: {
        col_xs: "12",
        col_sm: "6",
        col_md: "4"
      },
      screen:''
    };
  },
  methods: {
    ...mapActions(["getAllProducts"]),
    //立即搶購的modal
    getProduct(id) {
      this.$store.commit('GETPRODUCT',{})
      this.$store.dispatch("getProduct", id);
      $("#productModal").modal("show");
    },
    //前台加入購物車
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
        $("#productModal").modal("hide");
      });
      this.$store.dispatch("updateLoading", false);
    },
    toDetail(orderId) {
      const vm = this;
        vm.$router.push(`/detail/${orderId}`);
      /* const api = `${process.env.VUE_APP_API}/api/adam/product/${orderId}`;
      vm.$http.get(api).then(res => {
        if (res.data.success) {
        }
      }); */
    },
    screening(size,num){
      this.screen=window.innerWidth
      size==='md'?this.col.col_md=num:''
      size==='sm'?this.col.col_sm=num:''
      size==='xs'?this.col.col_xs=num:''
    }
  },
  computed: {
    ...mapGetters(["AllProducts", "product", "brand", "price"]),
    filterBrand() {
      if (this.brand === "Sony") {
        return this.AllProducts.filter(e => {
          return e.category === "Sony";
        });
      } else if (this.brand === "iPhone") {
        return this.AllProducts.filter(e => {
          return e.category === "iPhone";
        });
      } else if (this.brand === "HTC") {
        return this.AllProducts.filter(e => {
          return e.category === "HTC";
        });
      } else if (this.brand === "Asus") {
        return this.AllProducts.filter(e => {
          return e.category === "Asus";
        });
      } else if (this.brand === "Samsung") {
        return this.AllProducts.filter(e => {
          return e.category === "Samsung";
        });
      } else {
        return this.AllProducts;
      }
    },
    filterSort() {
      if (this.price === "由高~低") {
        return this.filterBrand.sort((a, b) => {
          return parseInt(a.price) < parseInt(b.price) ? 1 : -1;
        });
      } else if (this.price === "由低~高") {
        return this.filterBrand.sort((a, b) => {
          return parseInt(a.price) > parseInt(b.price) ? 1 : -1;
        });
      } else {
        return this.filterBrand;
      }
    },
    /* screen() {
      return window.screen.width;
    } */
  },
  created() {
    this.getAllProducts();
  },
  mounted() {
    this.screen=window.innerWidth
  },
  components: {
    desktopSidebar,
    cellphoneSidebar,
    carouselProduct,
  }
};
</script>

<style lang="scss">
@import "../assets/_grid.scss";
@import "../assets/_mixin.scss";

/* .readMore {
  width: 120px;
  height: 40px;
} */
/* .modal-backdrop {
  z-index: -1;
} */
.modal-my{
  margin-top: 100px;
}
.card img {
  max-height: 230px;
}
.modal-body img {
  max-height: 230px;
}
.modal-content{
  z-index: 20;
}
.card-body .card-title a {
  /* white-space: pre-wrap; */
}
.cellphoneBrand {
  @include pad {
    display: none;
  }
  @include deskTop {
    display: none;
  }
}

.fas {
  cursor: pointer;
}

.primaryProduct:hover {
  transform: scale(1.2);
  transition: 0.5s;
}
</style>
