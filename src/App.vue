<template>
  <div>
    <app-header />
    <breadcrumb />
    <app-sidebar />

    <router-view />

    <app-footer />
  </div>
</template>

<script>
import Header from '@/modules/core/components/layout/Header.vue';
import Sidebar from '@/modules/core/components/layout/Sidebar.vue';
import Footer from '@/modules/core/components/layout/Footer.vue';
import Breadcrumb from '@/modules/core/components/layout/Breadcrumb.vue';

export default {
  components: {
    'app-header': Header,
    'app-sidebar': Sidebar,
    'app-footer': Footer,
    Breadcrumb,
  }
};
</script>

<style lang="scss">
</style>
