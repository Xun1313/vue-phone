import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/pages/login.vue'),
    },
    {
      path: '/',
      name: 'frontDashboard',
      component: () => import(/* webpackChunkName: "frontDashboard"  */ './views/frontDashboard.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ './views/home.vue'),
        },
        {
          path: 'primary-product',
          name: 'primaryProduct',
          component: () => import(/* webpackChunkName: "primaryProduct" */ './views/primaryProduct.vue'),
        },
        {
          path: 'detail/:orderId',
          name: 'detail',
          component: () => import(/* webpackChunkName: "detail" */ './views/detail.vue'),
        },
        {
          path: 'new-product',
          name: 'newProduct',
          component: () => import(/* webpackChunkName: "newProduct" */ './views/newProduct.vue'),
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import(/* webpackChunkName: "cart" */ './views/cart.vue'),
        },
        {
          path: 'place',
          name: 'place',
          component: () => import(/* webpackChunkName: "place" */ './views/place.vue'),
        },
        {
          path: 'check-out',
          name: 'checkOut',
          component: () => import(/* webpackChunkName: "checkOut" */ './views/checkOut.vue'),
          children: [
            {
              path: '',
              name: 'checkOrder',
              component: () => import(/* webpackChunkName: "checkOrder" */ './views/checkOrder.vue'),
            },
            {
              path: 'check-pay/:orderId',
              name: 'checkPay',
              component: () => import(/* webpackChunkName: "checkPay" */ './views/checkPay.vue'),
            },
            {
              path: 'check-ok',
              name: 'checkOk',
              component: () => import(/* webpackChunkName: "checkOk" */ './views/checkOk.vue'),
            },
          ],
        },
      ],
    },

    {
      path: '/admin',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/back/dashboard.vue'),
      children: [
        {
          path: '',
          name: 'backProduct',
          component: () => import(/* webpackChunkName: "backProduct" */ './views/back/backProduct.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import(/* webpackChunkName: "orders" */ './views/back/orders.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: () => import(/* webpackChunkName: "coupon" */ './views/back/coupon.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
