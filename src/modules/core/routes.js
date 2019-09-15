import NotFound from './views/NotFound.vue';

export default [
  {
    path: '/',
    redirect: { name: 'company-page' }
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      title: 'Not Found'
    }
  }
];
