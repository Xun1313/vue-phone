import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

import cartModule from './cart';

export default new Vuex.Store({
  //strict:true,
  
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    getProduct(context, payload) {
      context.commit('LOADING', true);
      axios.get(`${process.env.VUE_APP_API}/api/adam/product/${payload}`).then(res => {
        console.log(res);
        context.commit('GETPRODUCT', res.data.product);
        context.commit('LOADING', false);
      });
    },
    getAllProducts(context, payload) {
      context.commit('LOADING', true);
      axios.get(`${process.env.VUE_APP_API}/api/adam/products/all`).then(res => {
        console.log(res);
        context.commit('GETALLPRODUCTS', res.data.products);
        context.commit('CATEGORIES', res.data.products);
        context.commit('LOADING', false);
      });
    },
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    GETPRODUCT(state, payload) {
      payload.num ? '' : payload.num=1
      state.product = payload;
    },
    GETALLPRODUCTS(state, payload) {
      state.AllProducts = payload;
    },
    CATEGORIES(state, payload) {
      payload.forEach(e => {
        state.categories.push(e.category);
      });
      //state.categories[0] = '全部';
      state.categories = [...new Set(state.categories)];
    },
    BRAND(state, payload) {
      state.brand = payload;
    },
    PRICE(state, payload) {
      state.price = payload;
    },
  },
  //儲存資料
  state: {
    //isLoading: false,
    product: {},
    AllProducts: [],
    categories: [],
    brand: '全部',
    price: '請選擇',
  },
  //類似computed
  getters: {
    AllProducts(state) {
      return state.AllProducts;
    },
    product(state) {
      return state.product;
    },
    brand(state) {
      return state.brand;
    },
    price(state) {
      return state.price;
    },
    categories(state) {
      return ['全部',...state.categories];
    },
  },
  modules: {
    cartModule,
  },
});
