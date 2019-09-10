import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';
import money from 'v-money';
import router from '@/router/index';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Vuelidate);
localVue.use(money);

import CompanyData from '@/modules/company/views/CompanyData.vue';

describe ('CompanyData', () => {
  let wrapper;
  let actions;
  // let state;
  let store;

  beforeEach (() => {
    actions = {
      addCompany: jest.fn(),
    };

    store = new Vuex.Store({
      strict: true,
      modules: {
        company: {
          namespaced: true,
          actions,
        }
      }
    });

    wrapper = mount(CompanyData, {
      sync: false,
      store,
      localVue,
      router,
    });
  });

  it ('renders correctly', () => {
    see('Company name');
    see('Company spend');
  });

  it ('opens the notes\' modal when the notes\' textarea gets focus', done => {
    expect(wrapper.find('.modal').element).toBeUndefined();

    wrapper.find('textarea[name=notes]').trigger('focus');

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.modal').element).toBeInstanceOf(HTMLElement);
      done();
    });
  });

  it ('saves the company data into vuex', done => {
    type('Name', 'input[name=name]');
    type('10000', 'input[name=spend]');
    type('100000', 'input[name=spend_min]');
    type('1000000', 'input[name=spend_max]');

    wrapper.find('textarea[name=notes]').trigger('focus');

    wrapper.vm.$nextTick(() => {
      type('Notes', 'textarea[name=modal_notes]');

      // click('.modal button[type=submit]'); // Does not trigger submit
      wrapper.find('form').trigger('submit');

      wrapper.vm.$nextTick(() => {
        expect(actions.addCompany).toHaveBeenCalled();
        done();
      });
    });
  });


  // Helper Functions

  let see = (text, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper;

    expect(wrap.html()).toContain(text);
  };

  let type = (text, selector) => {
    let node = wrapper.find(selector);

    node.element.value = text;
    node.trigger('input');
  };

  let click = selector => {
    wrapper.find(selector).trigger('click');
  };
});