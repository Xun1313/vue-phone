<template>
  <div class="flex-column align-items-center desk">
    <span>品牌</span>
    <ul class="brand">
      <li class="brand-item" :class="{ focus: item === brand }" v-for="(item, i) in categories" :key="item + i" @click="filterBrand($event,item)">
        <a href="#" :class="{ focus: item === brand }">{{ item }}</a>
      </li>
    </ul>

    <span>價格</span>
    <ul class="price">
      <li class="price-item" :class="{ focus: item === price }" v-for="(item, index) in priceArr" :key="item + index" @click="priceSort($event,item)">
        <a href="#" :class="{ focus: item === price }">{{ item }}</a>
      </li>
    </ul>

    <div class="reset" @click="resetHandler()">
      <i class="fa fa-caret-right"></i>
      <button type="button" class="reset-word">重新篩選</button>
    </div>
    <!-- <ul class="list-group list-group-flush rounded">
      <li class="list-group-item btn btn-outline-secondary rounded p-0">
        <div class="btn-group dropright">
          <a class="dropdown-toggle p-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ brand }}</a>
          <div class="dropdown-menu">
            <a class="dropdown-item btn btn-outline-secondary" href="#" v-for="(item, i) in categories" :key="i" @click.prevent="filterBrand(item)">{{ item }}</a>
          </div>
        </div>
      </li>
      <li class="list-group-item btn btn-outline-secondary rounded p-0">
        <div class="btn-group dropright">
          <a class="dropdown-toggle p-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ price }}</a>
          <div class="dropdown-menu">
            <a class="dropdown-item btn btn-outline-secondary" href="#" v-for="(item, index) in priceArr" :key="item + index" @click.prevent="priceSort(item)">{{ item }}</a>
          </div>
        </div>
      </li>
    </ul> -->
  </div>
  <!-- style="height:0" -->
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      priceArr: ['由高~低', '由低~高'],
    };
  },
  methods: {
    filterBrand(e,brand) {
      e.preventDefault();
      this.$store.commit('BRAND', brand);
    },
    priceSort(e,level) {
      e.preventDefault();
      this.$store.commit('PRICE', level);
    },
    resetHandler() {
      this.$store.commit('BRAND', '全部');
      this.$store.commit('PRICE', '');
    },
  },
  computed: {
    ...mapGetters(['brand', 'categories']),
    price() {
      return this.$store.getters.price;
    },
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
  &-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding: 5px 15px;
    text-align: center;
    width: 100%;
    cursor: pointer;
    a{
      text-decoration: none;
      color: black;
    }
  }
}
.focus {
  //關注到的顏色
  background-color: $important;
  color: white!important;
}
.reset {
  display: flex;
  align-items: center;
  transition: 0.5s all;
  color: white;
  //background-color: $important;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: $important;
    background-color: white;
  }
  &:hover > &-word {
    color: $important;
    background-color: white;
  }
  &-word {
    transition: .5s all;
    color: white;
    background-color: $important;
    margin-left: 5px;
    border: none;
    &:focus {
      outline: none;
    }
  }
}
.desk {
  display: none;
  //overflow: hidden;
  @include padTOdeskTop {
    display: flex;
  }
}
.list-group-item {
  cursor: pointer;
}
</style>
