import Vue from 'vue';
import router from './router/index';
import store from './store';
import Vuelidate from 'vuelidate';
import '@/modules/core/components/base/globals'

Vue.use(Vuelidate);

import App from './App.vue';

new Vue({
  router,
  store,
  render: createElement => createElement(App),
  el: '#app'
});
