import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import './bus';
import currency from './components/filter/currency';
/* import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css'; */
import VeeValidate from 'vee-validate';
import VueI18n from 'vue-i18n';
import validationMessages from 'vee-validate/dist/locale/zh_TW';

import AOS from 'aos';
import 'aos/dist/aos.css';

import moment from 'moment';
Vue.prototype.moment = moment;
Vue.use(require('vue-moment'));

import store from './store';
import 'swiper/dist/css/swiper.css';
import animated from 'animate.css';
Vue.use(animated);

import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDSuJDwvqkysC6XVsrqgcc50pitCIoHAL4',
  },
});
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
//Vue.component('Loading', Loading);
axios.defaults.withCredentials = true;
Vue.filter('currency', currency);

Vue.directive('focus', {
  inserted: function(el) {
    el.focus();
  },
});
Vue.use(VueI18n);

const i18n = new VueI18n();
i18n.locale='zhTW'
Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    zhTW: validationMessages,
  },
});

new Vue({
  created() {
    AOS.init();
  },
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  //console.log('to', to, 'from', from, 'next', next);
  if (to.meta.requiresAuth) {
    axios.post(`${process.env.VUE_APP_API}/api/user/check`).then(res => {
      //console.log(res.data);
      if (res.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
