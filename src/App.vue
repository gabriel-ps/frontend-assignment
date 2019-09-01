<template>
  <div id="app">
    <TheHeader />
    <AppBreadcrumb />
    <TheSidebar />

    <router-view />

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/modules/core/components/layout/TheHeader.vue';
import TheSidebar from '@/modules/core/components/layout/TheSidebar.vue';
import TheFooter from '@/modules/core/components/layout/TheFooter.vue';
import AppBreadcrumb from '@/modules/core/components/layout/AppBreadcrumb.vue';

export default {
  components: {
    TheHeader,
    TheSidebar,
    TheFooter,
    AppBreadcrumb,
  }
};
</script>

<style lang="scss" scoped>
@import 'Styles/main.scss';
</style>
