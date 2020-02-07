import axios from 'axios'

export default {
  //變成全部都是區域變數
  strict: true,
  namespaced: true,
  actions: {
    getCart(context, payload) {
      //context.commit('LOADING', true, { root: true })
      axios.get(`${process.env.VUE_APP_API}/api/adam/cart`).then(res => {
        context.commit('GETCART', res.data.data.carts)
        //context.commit('LOADING', false, { root: true })
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
