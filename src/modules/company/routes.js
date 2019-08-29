import CompanyData from './views/CompanyData.vue';
import CompanyTable from './views/CompanyTable.vue';
import CompanyPage from './views/CompanyPage.vue';

export default [
  {
    path: '/company-data',
    component: CompanyData,
    name: 'company-data',
    meta: {
      title: 'Company data'
    }
  },
  {
    path: '/company-table',
    component: CompanyTable,
    name: 'company-table',
    meta: {
      title: 'Company table'
    }
  },
  {
    path: '/company-page',
    component: CompanyPage,
    name: 'company-page',
    meta: {
      title: 'Company page'
    }
  }
];
