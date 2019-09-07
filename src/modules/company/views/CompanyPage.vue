<template>
  <AppContainer class="company-page">
    <h1>Company page</h1>

    <table class="companies-table">
      <thead>
        <th>Name</th>
        <th>Spend</th>
        <th>Spend min.</th>
        <th>Spend max.</th>
      </thead>
      <tbody>
        <tr
          v-for="company in companies"
          :key="company.id"
        >
          <td>{{ company.name }}</td>
          <td>{{ company.spend }}</td>
          <td>{{ company.spendAbility.minimum }}</td>
          <td>{{ company.spendAbility.maximum }}</td>
        </tr>
      </tbody>
    </table>
  </AppContainer>
</template>

<script>
import { mapState } from 'vuex';

const module = 'company';

export default {
  computed: {
    ...mapState(module, {
      companies (state) {
        return state.companies;
      },
    }),
  },
};
</script>

<style lang="scss" scoped>
.company-page {
  .companies-table {
    width: 100%;
  }
}
</style>