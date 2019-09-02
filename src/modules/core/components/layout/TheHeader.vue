<template>
  <header class="header">
    <AppContainer>
      Header
    </AppContainer>
  </header>
</template>

<script>
import AppContainer from '@/modules/core/components/layout/AppContainer.vue';

export default {
  components: {
    AppContainer,
  }
};
</script>

<style lang="scss" scoped>
@import 'Styles/design/index.scss';

.header {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: $color-header-bg;
  color: $color-header-text;
}
</style>
