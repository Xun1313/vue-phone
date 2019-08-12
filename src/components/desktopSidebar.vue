<template>
  <div class="flex-column mt-5 align-items-center desk">
    <p>
      <i class="fas fa-tasks"></i>
      篩選
    </p>
    <ul class="list-group list-group-flush rounded">
      <li class="list-group-item btn btn-outline-secondary rounded p-0">
        <div class="btn-group dropright">
          <a
            class="dropdown-toggle p-3"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >{{brand}}</a>
          <div class="dropdown-menu">
            <a
              class="dropdown-item btn btn-outline-secondary"
              href="#"
              v-for="(item,i) in categories"
              :key="i"
              @click.prevent="filterBrand(item)"
            >{{item}}</a>
          </div>
        </div>
      </li>
      <li class="list-group-item btn btn-outline-secondary rounded p-0">
        <div class="btn-group dropright">
          <a
            class="dropdown-toggle p-3"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >{{price}}</a>
          <div class="dropdown-menu">
            <a
              class="dropdown-item btn btn-outline-secondary"
              href="#"
              v-for="(item, index) in priceArr"
              :key="item+index"
              @click.prevent="priceSort(item)"
            >{{item}}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- style="height:0" -->
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      priceArr: ["請選擇", "由高~低", "由低~高"]
    };
  },
  methods: {
    filterBrand(brand) {
      this.$store.commit("BRAND", brand);
    },
    priceSort(level) {
      this.$store.commit("PRICE", level);
    }
  },
  computed: {
    ...mapGetters(["brand", "categories"]),
    price() {
      return this.$store.getters.price;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/_grid.scss";
.desk {
  display: none;
  //overflow: hidden;
  @include deskTop {
    display: flex;
  }
}
.list-group-item {
  cursor: pointer;
}
</style>
