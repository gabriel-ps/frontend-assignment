import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';

export default [
  {
    path: '/',
    component: Home,
    name: 'home',
    meta: {
      title: 'Home'
    }
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      title: 'Not Found'
    }
  }
];
