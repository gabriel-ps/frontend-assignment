<template>
  <footer class="footer">
    <AppContainer>
      &copy; 2019, Intricately, Inc. All Rights Reserved.
    </AppContainer>
  </footer>
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

.footer {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: $color-footer-bg;
  margin-top: 1rem;
}
</style>