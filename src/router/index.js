import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import core from '@/modules/core/routes';
import company from '@/modules/company/routes';

const routes = [
  ...core,
  ...company
];

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.length) {
    document.title = to.matched[0].meta.title;
  }
  next();
});

export default router;
