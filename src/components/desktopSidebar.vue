<template>
  <section class="flex-column align-items-center desk">
    <h4>品牌</h4>
    <ul class="brand">
      <li class="brand-item" :class="{ focus: item === brand }" v-for="(item, i) in categories" :key="item + i" @click="filterBrand($event, item)">
        {{ item }}
      </li>
    </ul>

    <h4>價格</h4>
    <ul class="price">
      <li class="price-item" :class="{ focus: item === price }" v-for="(item, index) in priceArr" :key="item + index" @click="priceSort($event, item)">
        {{ item }}
      </li>
    </ul>

    <div class="reset" @click="resetHandler()">
      <i class="fa fa-caret-right"></i>
      <button type="button" class="reset-word">重新篩選</button>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      priceArr: ['由高~低', '由低~高']
    }
  },
  methods: {
    filterBrand(e, brand) {
      e.preventDefault()
      this.$store.commit('BRAND', brand)
    },
    priceSort(e, level) {
      e.preventDefault()
      this.$store.commit('PRICE', level)
    },
    resetHandler() {
      this.$store.commit('BRAND', '全部')
      this.$store.commit('PRICE', '')
    }
  },
  computed: {
    ...mapGetters(['brand', 'categories']),
    price() {
      return this.$store.getters.price
    }
  }
}
</script>

<style lang="scss" scoped>
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
    transition: 0.5s all;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
.focus {
  //關注到的顏色
  background-color: $important !important;
  color: white !important;
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
    background-color: darken($important, 10%);
  }
  &:hover > &-word {
    background-color: darken($important, 10%);
  }
  &-word {
    transition: 0.5s all;
    color: white;
    background-color: $important;
    margin-left: 5px;
    border: none;
    outline: none;
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
h4 {
  font-size: 20px;
}
</style>
