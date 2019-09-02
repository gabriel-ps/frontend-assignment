<template>
  <div id="app">
    <TheHeader />
    <AppBreadcrumb />
    <AppContainer class="main-container">
      <TheSidebar />
      <main>
        <router-view />
      </main>
    </AppContainer>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/modules/core/components/layout/TheHeader.vue';
import TheSidebar from '@/modules/core/components/layout/TheSidebar.vue';
import TheFooter from '@/modules/core/components/layout/TheFooter.vue';
import AppContainer from '@/modules/core/components/layout/AppContainer.vue';
import AppBreadcrumb from '@/modules/core/components/layout/AppBreadcrumb.vue';

export default {
  components: {
    TheHeader,
    TheSidebar,
    TheFooter,
    AppContainer,
    AppBreadcrumb,
  }
};
</script>

<style lang="scss">
@import 'Styles/main.scss';
</style>

<style lang="scss" scoped>
@import 'Styles/design/index.scss';

#app {
  font-family: $system-default-font-family;

  .main-container {
    display: flex;
  }
}
</style>
