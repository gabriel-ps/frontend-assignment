<template>
  <div class="company-data">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi suscipit error dolores doloremque! Error sunt fuga aut similique id illo. Animi expedita atque sunt fugiat in? Quidem dolore molestias cum!</p>

    <AppInput
      label="Company name"
      placeholder="e.g. Your Company Name"
    />

    <AppInput
      label="Company name"
      placeholder="e.g. Your Company Name"
    />

    <AppInput
      label="Company name"
      placeholder="e.g. Your Company Name"
    />

    <AppTextarea
      label="Notes"
      placeholder="e.g. Good Tech Company" />
  </div>
</template>

<script>
export default {
  components: {}
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
