import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

import cartModule from './cart'

export default new Vuex.Store({
  //strict:true,

  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status)
    },
    getProduct(context, payload) {
      context.commit('LOADING', true)
      axios.get(`${process.env.VUE_APP_API}/api/adam/product/${payload}`).then(res => {
        context.commit('GETPRODUCT', res.data.product)
        context.commit('LOADING', false)
      })
    },
    getAllProducts(context, payload) {
      context.commit('LOADING', true)
      axios.get(`${process.env.VUE_APP_API}/api/adam/products/all`).then(res => {
        context.commit('GETALLPRODUCTS', res.data.products)
        context.commit('CATEGORIES', res.data.products)
        context.commit('LOADING', false)
      })
    }
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status
    },
    GETPRODUCT(state, payload) {
      payload.num = 1
      //payload.num ? '' : (payload.num = 1)
      state.product = payload
    },
    GETALLPRODUCTS(state, payload) {
      state.AllProducts = payload
    },
    CATEGORIES(state, payload) {
      payload.forEach(e => {
        state.categories.push(e.category)
      })
      //state.categories[0] = '全部';
      state.categories = [...new Set(state.categories)]
    },
    BRAND(state, payload) {
      state.brand = payload
    },
    PRICE(state, payload) {
      state.price = payload
    },
    NAVHEIGHT(state, payload) {
      state.navHeight = payload
    }
  },
  //儲存資料
  state: {
    isLoading: false,
    product: {},
    AllProducts: [],
    categories: [],
    brand: '全部',
    price: '',
    navHeight: '',
    scrollDiscount: {
      name: 'about',
      params: { scroll: 'discount' }
    },
    scrollShop: {
      name: 'about',
      params: { scroll: 'shop' }
    },
    scrollAbout: {
      name: 'about',
      params: { scroll: 'about' }
    },
  },
  //類似computed
  getters: {
    isLoading(state) {
      return state.isLoading
    },
    AllProducts(state) {
      return state.AllProducts
    },
    product(state) {
      return state.product
    },
    brand(state) {
      return state.brand
    },
    price(state) {
      return state.price
    },
    categories(state) {
      return ['全部', ...state.categories]
    }
  },
  modules: {
    cartModule
  }
})
