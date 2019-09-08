import Company from '../domain/company/Company';

const companies = [
  new Company({
    name: 'Microsoft',
    spend: 1000000,
    spendAbility: {
      minimum: 100000,
      maximum: 10000000,
    },
  }),
  new Company({
    name: 'Oracle',
    spend: 100000,
    spendAbility: {
      minimum: 10000,
      maximum: 1000000,
    },
  }),
];

export default {
  companies,
};
