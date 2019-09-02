<template>
  <div class="textarea-wrapper">
    <label
      v-if="label"
      class="label"
    >
      {{ label }}
    </label>
    <textarea
      class="textarea"
      v-bind="$attrs"
      @input="$emit('update', $event.target.value)"
      v-on="$listeners"
    ></textarea>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    event: 'update',
  },
  props: {
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'Styles/design/index.scss';

.textarea-wrapper {
  .label {
    text-transform: uppercase;
  }
  .textarea {
    display: block;
    width: 100%;
    padding: $size-input-padding-vertical $size-input-padding-horizontal;
    margin-bottom: $size-grid-padding;
    line-height: 1;
    border: $size-input-border solid $color-input-border;
    border-radius: $size-input-border-radius;
  }
}
</style>
