<template>
  <div class="company-data">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel dolorem mollitia porro consequatur aliquid ea ex eveniet officiis expedita repellendus dolorum consequuntur, ad explicabo nobis maxime beatae quam repudiandae!</p>

    <form @submit.prevent>
      <AppInput
        label="Company name"
        placeholder="e.g. Your Company Name"
        v-model="$v.company.name.$model"
        :has-error="$v.company.name.$dirty ? $v.company.name.$error : null"
        error-message="Please inform the company name"
      />

      <AppInput
        label="Company spend"
        placeholder="e.g. $150,000"
        v-model="company.spend"
      />

      <AppInput
        label="Company spend ability"
        placeholder="e.g. $150,000 - $330,000"
        v-model="company.spend_ability"
      />

      <AppTextarea
        label="Notes"
        placeholder="e.g. Good Tech Company"
        v-model="company.notes" />

      <button
        v-show="false"
        type="submit">
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import Company from '../domain/company/Company';

const module = 'company';

export default {
  data() {
    return {
      company: new Company()
    };
  },
  validations: {
    company: {
      name: {
        required,
      },
    },
  },
  methods: {
    ...mapActions(module, ['addCompany']),
  },
  computed: {
    ...mapState(module, {
      companies (state) {
        return state.companies
      },
    }),
  }
};
</script>

<style lang="scss" scoped>
@import 'Styles/design/index.scss';

.company-data {
  border: 1px solid #e6e9ef;
  border-radius: $size-input-border-radius;
  margin: 0 2rem;
  padding: 0 2rem;

  .input-wrapper {
    width: 50%;
  }

  .input-wrapper, .textarea-wrapper {
    margin-top: 3rem;
  }
}
</style>
