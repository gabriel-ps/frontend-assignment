<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'company-data' }">Company data</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'company-table' }">Company table</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'company-page' }">Company page</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>
