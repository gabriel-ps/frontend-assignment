import mutations from './mutations';
import Company from '@/modules/company/domain/company/Company';

const { ADD_COMPANY } = mutations;

describe('company-mutations', () => {
  it('ADD_COMPANY', () => {
    const state = { companies: [] };

    ADD_COMPANY(state, new Company());

    expect(state.companies.length).toBe(1);
    expect(state.companies[0]).toBeInstanceOf(Company);
  })
});
