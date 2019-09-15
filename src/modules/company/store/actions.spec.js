import actions from './actions';
import sinon from 'sinon';

describe('actions', () => {
  it('addCompany', () => {
    const commit = sinon.spy();
    const state = {};

    actions.addCompany({ commit, state });

    expect(commit.args).toEqual([
      ['ADD_COMPANY', undefined],
    ]);
  })
});