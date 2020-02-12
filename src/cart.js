import axios from 'axios'

export default {
  strict: true,
  namespaced: true,
  //變成全部都是區域變數
  actions: {
    getCart(context, payload) {
      axios.get(`${process.env.VUE_APP_API}/api/adam/cart`).then(res => {
        context.commit('GETCART', res.data.data.carts)
      })
    }
  },
  mutations: {
    GETCART(state, payload) {
      state.cart = payload.length
    }
  },
  //儲存資料
  state: {
    test: 1,
    cart: ''
  },
  //類似computed
  getters: {
    cart(state) {
      return state.cart
    }
  }
}
