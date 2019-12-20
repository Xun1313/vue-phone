<template>
  <div>
    <carouselProduct></carouselProduct>
    <div class="container mt-5">
      <cellphoneSidebar class="my-4"></cellphoneSidebar>
      <!-- bread -->
      <!-- <nav aria-label="breadcrumb">
        <ol class="breadcrumb p-0 my-auto bg-white">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item active">全部商品</li>
        </ol>
      </nav> -->
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
      <!-- <div class="d-flex justify-content-end" v-if="screen < 576">
        <div @click="screening('xs', '12')" class="mx-1">
          <i class="fas fa-stop"></i>
        </div>
        <div @click="screening('xs', '6')" class="mx-1">
          <i class="fas fa-th-large"></i>
        </div>
      </div>
      <div class="d-flex justify-content-end" v-if="screen >= 576 && screen < 768">
        <div @click="screening('sm', '6')" class="mx-1">
          <i class="fas fa-th-large"></i>
        </div>
        <div @click="screening('sm', '4')" class="mx-1">
          <i class="fas fa-th"></i>
        </div>
      </div>
      <div class="d-flex justify-content-end" v-if="screen >= 768">
        <div @click="screening('md', '4')" class="mx-1">
          <i class="fas fa-th"></i>
        </div>
        <div @click="screening('md', '6')" class="mx-1">
          <i class="fas fa-th-large"></i>
        </div>
      </div> -->

      <div class="container side">
        <desktopSidebar />
        <div class="row">
          <!-- 主要商品內容 -->
          <div class="col-12 col-sm-6" v-for="item in filterSort" :key="item.id">
            <div class="card shadow-lg bg-light rounded mb-4">
              <!-- , `col-md-${col.col_md}` -->
              <div class="primaryProduct">
                <img class="img-fluid mx-auto d-block primaryProduct-pic" :src="item.imageUrl" @click.prevent="toDetail(item.id)" alt />
              </div>
              <div class="card-body p-2">
                <h5 class="card-title text-center">{{ item.title }}</h5>
                <div class="d-flex justify-content-center">
                  <p class="card-text">{{ item.content }}</p>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="d-flex flex-column align-items-center">
                    <div class="h5" v-if="!item.price">{{ item.origin_price }}</div>
                    <del class="h6 text-secondary" v-if="item.price">原價{{ item.origin_price }}</del>
                    <div class="h5" v-if="item.price">特價{{ item.price | currency }}</div>
                  </div>
                </div>
                <div class="card-body-cart" @click.prevent="addtoCart(item.id)">
                  <i class="fas fa-shopping-cart"></i>
                  <div class="card-body-cart-word">加入購物車</div>
                </div>
              </div>
              <div class="card-footer bg-white">
                <div class="card-footer-buy" @click="getProduct(item.id)">
                  <i class="fa fa-caret-right" style="padding-left:3px;"></i>
                  立即搶購
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 商品詳細 -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-my" role="document">
            <div class="modal-content border-0">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body d-flex flex-column flex-lg-row justify-content-between">
                <img :src="product.imageUrl" class="mx-auto img-fluid" />
                <div class="d-flex flex-column p-3">
                  <blockquote class="blockquote">
                    <p class="mb-0">{{ product.content }}</p>
                    <footer class="blockquote-footer">{{ product.description }}</footer>
                  </blockquote>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5" v-if="!product.price">{{ product.origin_price }}</div>
                    <del class="h6" v-if="product.price">原價{{ product.origin_price }}</del>
                    <div class="h5" v-if="product.price">現在只要{{ product.price }}</div>
                  </div>
                  <select name class="form-control mt-3" v-model="product.num">
                    <option v-for="num in 10" :value="num" :key="num">選購{{ num }}{{ product.unit }}</option>
                  </select>
                </div>
              </div>
              <div class="modal-footer">
                <div class="text-muted text-nowrap mr-3">
                  小計
                  <strong>{{ product.price * product.num }}</strong>
                </div>
                <div class="modal-footer-cart" @click="addtoCart(product.id, product.num)">
                  <i class="fas fa-shopping-cart"></i>
                  <div>加到購物車</div>
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
import $ from 'jquery';
import carouselProduct from '../components/carouselProduct';
import desktopSidebar from '../components/desktopSidebar';
import cellphoneSidebar from '../components/cellphoneSidebar';
import { mapGetters, mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['getAllProducts']),
    //立即搶購的modal
    getProduct(id) {
      this.$store.commit('GETPRODUCT', {});
      this.$store.dispatch('getProduct', id);
      $('#productModal').modal('show');
    },
    //前台加入購物車
    addtoCart(id, qty = 1) {
      //this.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_API}/api/adam/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(api, { data: cart }).then(res => {
        console.log(res);
        if (res.data.success) {
          //this.$bus.$emit('push', '已加入購物車', 'danger');
          this.$bus.$emit('show');
          this.$bus.$emit('dark');
        }
        $('#productModal').modal('hide');
      });
      //this.$store.dispatch('updateLoading', false);
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
    /* screening(size, num) {
      this.screen = window.innerWidth;
      size === 'md' ? (this.col.col_md = num) : '';
      size === 'sm' ? (this.col.col_sm = num) : '';
      size === 'xs' ? (this.col.col_xs = num) : '';
    }, */
  },
  computed: {
    ...mapGetters(['AllProducts', 'product', 'brand', 'price']),
    filterBrand() {
      if (this.brand === '全部') {
        return this.AllProducts;
      } else {
        return this.AllProducts.filter(e => {
          return e.category === this.brand;
        });
      }
    },
    filterSort() {
      if (this.price === '由高~低') {
        return this.filterBrand.sort((a, b) => {
          return parseInt(a.price) < parseInt(b.price) ? 1 : -1;
        });
      } else if (this.price === '由低~高') {
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
  /* mounted() {
    this.screen = window.innerWidth;
  }, */
  components: {
    desktopSidebar,
    cellphoneSidebar,
    carouselProduct,
  },
};
</script>

<style lang="scss">
@import '../assets/_grid.scss';
@import '../assets/_mixin.scss';
@import '../assets/_variable.scss';
/* .readMore {
  width: 120px;
  height: 40px;
} */
/* .modal-backdrop {
  z-index: -1;
} */
.side {
  display: flex;
  align-items: flex-start;
  .row {
    margin: 0;
    @include padTOdeskTop {
      margin: 0 0 0 20px;
    }
  }
}
.modal-my {
  margin-top: 100px;
}
.card img {
  max-height: 230px;
}
.card-body {
  &-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: $important;
    margin-left: 10px;
    transition: 0.5s all;
    cursor: pointer;
    padding: 5px 10px;
    width: 200px;
    margin: auto;
    &:hover {
      color: white;
      background-color: $important;
    }
    &-word {
      margin-left: 5px;
    }
  }
}
.modal-body {
  img {
    max-height: 230px;
  }
}
.modal-content {
  z-index: 20;
}
.modal-header {
  background-color: $important;
  color: white;
}
.modal-footer {
  &-cart {
    background-color: $important;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px 15px;
    transition: 0.5s all;
    &:hover {
      color: $important;
      background-color: white;
    }
  }
}
.blockquote-footer {
  padding: 10px 15px;
}
.card-body .card-title a {
  /* white-space: pre-wrap; */
}
.card-footer {
  &-buy {
    background-color: $important;
    padding: 5px;
    margin: 0 auto;
    color: white;
    cursor: pointer;
    text-align: center;
    transition: 0.5s all;
    &:hover {
      color: $important;
      background-color: white;
    }
  }
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

.primaryProduct {
  overflow: hidden;
  &-pic {
    cursor: pointer;
    transition: 0.5s all;
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
