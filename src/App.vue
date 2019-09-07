<template>
  <div id="app">
    <TheHeader />
    <TheBreadcrumb />
    <AppContainer class="main-container">
      <TheSidebar />
      <main class="main">
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
import TheBreadcrumb from '@/modules/core/components/layout/TheBreadcrumb.vue';

export default {
  components: {
    TheHeader,
    TheSidebar,
    TheFooter,
    TheBreadcrumb,
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

    .main {
      width: 100%;
    }
  }
}
</style>
