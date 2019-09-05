<template>
  <div class="company-data">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel dolorem mollitia porro consequatur aliquid ea ex eveniet officiis expedita repellendus dolorum consequuntur, ad explicabo nobis maxime beatae quam repudiandae!</p>

    <form @submit.prevent="submit">
      <AppInput
        label="Company name"
        placeholder="e.g. Your Company Name"
        v-model="$v.company.name.$model"
        :has-error="$v.company.name.$dirty ? $v.company.name.$error : false"
        error-message="Please inform the company name"
      />

      <AppMoneyInput
        label="Company spend"
        placeholder="e.g. $150,000"
        v-model="$v.company.spend.$model"
        :has-error="$v.company.spend.$dirty ? $v.company.spend.$error : false"
        error-message="Please inform the company spend value. It must be greater than 0."
      />

      <div class="spend-ability">
        <AppMoneyInput
          label="Company spend ability minimum value"
          placeholder="e.g. $150,000"
          v-model="$v.company.spendAbility.minimum.$model"
          :has-error="$v.company.spendAbility.minimum.$dirty ? $v.company.spendAbility.minimum.$error : false"
          error-message="Please inform the company spend ability minimum value. It must be greater than 0. It must be less than maximum value."
        />
        <AppMoneyInput
          label="Company spend ability maximum value"
          placeholder="e.g. $330,000"
          v-model="$v.company.spendAbility.maximum.$model"
          :has-error="$v.company.spendAbility.maximum.$dirty ? $v.company.spendAbility.maximum.$error : false"
          error-message="Please inform the company spend ability maximum value. It must be greater than the minimum value."
        />
      </div>

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
import { required, decimal } from 'vuelidate/lib/validators';
import Company from '../domain/company/Company';

const module = 'company';
const positive = (value) => value > 0;
const lessThanMaximum = (currMinimum, spendAbility) => currMinimum < spendAbility.maximum;

export default {
  data() {
    return {
      company: new Company(),
    };
  },
  validations: {
    company: {
      name: { required },
      spend: { required, decimal, positive },
      spendAbility: {
        minimum: { required, decimal, positive, lessThanMaximum },
        maximum: { required, decimal, positive },
      },
    },
  },
  methods: {
    ...mapActions(module, ['addCompany']),
    submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        // Errors, do not send
        return;
      }
    },
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

  .spend-ability {
    display: flex;
    justify-content: space-between;

    .input-wrapper {
      width: 48%;
    }

  }
}
</style>
