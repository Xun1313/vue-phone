<template>
  <div class="cellphone">
    <a
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
    </div>
  </div>
</template>

<script>
import $ from "jquery";
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
      $("#brandModal").modal("hide");
    },
    priceSort(level) {
      this.$store.commit("PRICE", level);
      $("#priceModal").modal("hide");
    }
  },
  computed: {
    ...mapGetters(["brand", "categories", "price"])
  }
};
</script>

<style lang="scss">
@import "../assets/_grid.scss";
.modal-backdrop {
  z-index: -1;
}
.cellphone {
  /* @include pad{
    display: none
  }
  @include padTOdeskTop{
    display: none
  } */
  @include deskTop {
    display: none;
  }
}
.cellphone-btn,
label {
  cursor: pointer;
}
</style>
