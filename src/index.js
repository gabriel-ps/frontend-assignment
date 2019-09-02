import Vue from 'vue';
import router from './router/index';
import store from './store';
import '@/modules/core/components/base/globals'

import App from './App.vue';

new Vue({
  router,
  store,
  render: createElement => createElement(App),
  el: '#app'
});
