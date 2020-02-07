<template>
  <section>
    <carouselProduct></carouselProduct>
    <div class="container mt-5">
      <cellphoneSidebar class="my-4"></cellphoneSidebar>
      <div class="container side">
        <desktopSidebar />
        <div class="row" ref="scroll-product">
          <!-- 主要商品內容 -->
          <div class="col-sm-6" v-for="item in filterSort" :key="item.id">
            <div class="card shadow-lg rounded mb-4">
              <!-- , `col-md-${col.col_md}` -->
              <figure class="primaryProduct">
                <img class="img-fluid mx-auto d-block primaryProduct-pic" :src="item.imageUrl" @click.prevent="toDetail(item.id)" alt />
              </figure>
              <article class="card-body p-2">
                <h5 class="card-title text-center">{{ item.title }}</h5>
                <div class="d-flex justify-content-center">
                  <p class="card-text">{{ item.content }}</p>
                </div>
                <div class="d-flex flex-column align-items-center">
                  <div class="d-flex flex-column align-items-center">
                    <div class="h5" v-if="!item.price">
                      {{ item.origin_price }}
                    </div>
                    <del class="h6 text-secondary" v-if="item.price">原價{{ item.origin_price | currency }}</del>
                    <div class="h5" v-if="item.price">特價{{ item.price | currency }}</div>
                  </div>
                </div>
                <div class="card-body-cart" @click.prevent="addtoCart(item.id)">
                  <i class="fas fa-shopping-cart"></i>
                  <button type="button" class="card-body-cart-word">
                    加入購物車
                  </button>
                </div>
              </article>
              <footer class="card-footer bg-white">
                <button type="button" class="card-footer-buy" @click="getProduct(item.id)">
                  <i class="fa fa-caret-right" style="padding-left:3px;"></i>
                  立即搶購
                </button>
              </footer>
            </div>
          </div>
        </div>

        <!-- 商品詳細 -->
        <section class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-my" role="document">
            <div class="modal-content border-0">
              <header class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {{ product.title }}
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </header>
              <article class="modal-body d-flex flex-column flex-lg-row justify-content-between">
                <img :src="product.imageUrl" class="mx-auto img-fluid" />
                <div class="d-flex flex-column p-3">
                  <blockquote class="blockquote">
                    <p class="mb-0">{{ product.content }}</p>
                    <footer class="blockquote-footer">
                      {{ product.description }}
                    </footer>
                  </blockquote>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5" v-if="!product.price">
                      {{ product.origin_price }}
                    </div>
                    <del class="h6" v-if="product.price">原價{{ product.origin_price | currency }}</del>
                    <div class="h5" v-if="product.price">現在只要{{ product.price | currency }}</div>
                  </div>
                  <select name class="form-control mt-3" v-model="product.num">
                    <option v-for="num in 10" :value="num" :key="num">選購{{ num }}{{ product.unit }}</option>
                  </select>
                </div>
              </article>
              <footer class="modal-footer">
                <div class="text-muted text-nowrap mr-3">
                  小計
                  <strong>{{ (product.price * product.num) | currency }}</strong>
                </div>
                <button type="button" class="modal-footer-cart" @click="addtoCart(product.id, product.num)">
                  <i class="fas fa-shopping-cart"></i>
                  加到購物車
                </button>
              </footer>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
import carouselProduct from '../components/carouselProduct'
import desktopSidebar from '../components/desktopSidebar'
import cellphoneSidebar from '../components/cellphoneSidebar'
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['getAllProducts']),
    //立即搶購的modal
    getProduct(id) {
      this.$store.commit('GETPRODUCT', {})
      this.$store.dispatch('getProduct', id)
      $('#productModal').modal('show')
    },
    //前台加入購物車
    addtoCart(id, qty = 1) {
      //this.$store.dispatch('updateLoading', true);
      const api = `${process.env.VUE_APP_API}/api/adam/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(api, { data: cart }).then(res => {
        console.log(res)
        if (res.data.success) {
          //this.$bus.$emit('push', '已加入購物車', 'danger');
          this.$bus.$emit('show')
          this.$bus.$emit('dark')
        }
        $('#productModal').modal('hide')
      })
      //this.$store.dispatch('updateLoading', false);
    },
    toDetail(orderId) {
      const vm = this
      vm.$router.push(`/detail/${orderId}`)
    }
  },
  computed: {
    ...mapGetters(['AllProducts', 'product', 'brand', 'price']),
    filterBrand() {
      if (this.brand === '全部') {
        return this.AllProducts
      } else {
        return this.AllProducts.filter(e => {
          return e.category === this.brand
        })
      }
    },
    filterSort() {
      if (this.price === '由高~低') {
        return [...this.filterBrand].sort((a, b) => {
          return parseInt(a.price) < parseInt(b.price) ? 1 : -1
        })
      } else if (this.price === '由低~高') {
        return [...this.filterBrand].sort((a, b) => {
          return parseInt(a.price) > parseInt(b.price) ? 1 : -1
        })
      } else {
        return this.filterBrand
      }
    }
  },
  mounted() {
    this.getAllProducts()
    if (this.$store.state.brand !== '全部') {
      window.scrollTo({
        top: this.$refs['scroll-product'].offsetTop - this.$store.state.navHeight,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      window.scrollTo(0, 0)
    }
  },
  components: {
    desktopSidebar,
    cellphoneSidebar,
    carouselProduct
  }
}
</script>

<style lang="scss">
@import '../assets/_grid.scss';
@import '../assets/_mixin.scss';
@import '../assets/_variable.scss';
/* .readMore {
  width: 120px;
  height: 40px;
} */
.modal-backdrop {
  z-index: -1;
}
.modal-backdrop.show {
  opacity: 0;
}
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
    background-color: $important;
    color: white;
    margin-left: 10px;
    transition: 0.5s all;
    cursor: pointer;
    padding: 5px 10px;
    width: 150px;
    margin: auto;
    &:hover {
      background-color: darken($important, 10%);
    }
    &:hover > &-word {
      background-color: darken($important, 10%);
    }
    &-word {
      transition: 0.5s all;
      background-color: $important;
      color: white;
      margin-left: 5px;
      border: none;
      &:focus {
        outline: none;
      }
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
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: darken($important, 10%);
    }
  }
}
.blockquote-footer {
  padding: 10px 15px;
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
    width: 100%;
    &:hover {
      background-color: darken($important, 10%);
    }
    &:focus {
      outline: none;
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
