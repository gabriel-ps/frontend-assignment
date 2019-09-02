<template>
  <div class="input-wrapper">
    <label
      v-if="label"
      class="label"
    >
      {{ label }}
    </label>
    <input
      :type="type"
      class="input"
      v-bind="$attrs"
      @input="$emit('update', $event.target.value)"
      v-on="$listeners"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    event: 'update',
  },
  props: {
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return [
          'email',
          'number',
          'password',
          'search',
          'tel',
          'text',
          'url',
        ].includes(value)
      },
    },
    label: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'Styles/design/index.scss';

.input-wrapper {
  .label {
    text-transform: uppercase;
  }
  .input {
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

