<template>
  <div class="cellphone">
    <div class="cellphone-flex">
      <div class="cellphone-flex-item">
        <span>品牌</span>
        <ul class="brand">
          <li class="brand-item" :class="{ focus: item === brand }" v-for="(item, i) in categories" :key="item + i" @click="filterBrand(item)">{{ item }}</li>
        </ul>
      </div>

      <div class="cellphone-flex-item">
        <span>價格</span>
        <ul class="price">
          <li class="price-item" :class="{ focus: item === price }" v-for="(item, index) in priceArr" :key="item + index" @click="priceSort(item)">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div class="reset">
      <i class="fa fa-caret-right"></i>
      <div class="reset-word" @click="resetHandler()">重新篩選</div>
    </div>
    <!-- <a
      data-toggle="modal"
      data-target="#brandModal"
      class="btn btn-outline-secondary rounded cellphone-btn mx-1"
    >{{brand}}</a>

    <div
      class="modal fade"
      id="brandModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div
              class="form-check border-bottom btn-outline-secondary"
              v-for="(item, index) in categories"
              :key="item"
            >
              <input
                class="form-check-input"
                type="radio"
                :name="'brandRadios'+index+1"
                :id="'brandRadios'+index+1"
                :value="item"
                v-model="brand"
                @click="filterBrand(item)"
              >
              <label
                class="form-check-label w-100"
                :for="'brandRadios'+index+1"
                @click="filterBrand(item)"
              >{{item}}</label>
            </div>
          </div>
        </div>
      </div>
    </div>


    <a
      data-toggle="modal"
      data-target="#priceModal"
      class="btn btn-outline-secondary rounded cellphone-btn mx-1"
    >{{price}}</a>

    <div
      class="modal fade"
      id="priceModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div
              class="form-check border-bottom btn-outline-secondary"
              v-for="(item, index) in priceArr"
              :key="item"
            >
              <input
                class="form-check-input"
                type="radio"
                :name="'priceRadios'+index+1"
                :id="'priceRadios'+index+1"
                :value="item"
                v-model="price"
                @click.prevent="priceSort(item)"
              >
              <label
                class="form-check-label w-100"
                :for="'priceRadios'+index+1"
                @click.prevent="priceSort(item)"
              >{{item}}</label>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
//import $ from "jquery";
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      priceArr: ['由高~低', '由低~高'],
    };
  },
  methods: {
    filterBrand(brand) {
      this.$store.commit('BRAND', brand);
      //$("#brandModal").modal("hide");
    },
    priceSort(level) {
      this.$store.commit('PRICE', level);
      //$("#priceModal").modal("hide");
    },
    resetHandler() {
      this.$store.commit('BRAND', '全部');
      this.$store.commit('PRICE', '');
    },
  },
  computed: {
    ...mapGetters(['brand', 'categories', 'price']),
  },
};
</script>

<style lang="scss">
@import '../assets/_grid.scss';
@import '../assets/_variable.scss';
.brand,
.price {
  list-style: none;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0;
  width: 100%;
  margin-top: 10px;
  &-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 5px 15px;
    text-align: center;
    width: 100%;
    cursor: pointer;
  }
}
.focus {
  //關注到的顏色
  background-color: $important;
  color: white;
}
.reset {
  display: flex;
  align-items: center;
  transition: 0.5s all;
  color: white;
  background-color: $important;
  width: 180px;
  justify-content: center;
  padding: 5px 0;
  cursor: pointer;
  margin: auto;
  &:hover {
    color: $important;
    background-color: white;
  }
  &-word {
    margin-left: 5px;
  }
}
.modal-backdrop {
  z-index: -1;
}
.cellphone {
  /* display: flex;
  align-items: center;
  justify-content: center; */
  @include padTOdeskTop {
    display: none;
  }
  &-flex {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    &-item {
      width: 100%;
      margin: 0 20px;
    }
  }
}
.cellphone-btn,
label {
  cursor: pointer;
}
</style>
