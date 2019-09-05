<template>
  <div class="input-wrapper" :class="{ 'has-error': hasError }">
    <label
      v-if="label"
      class="label"
    >{{ label }}</label>
    <money
      class="input"
      v-bind="$attrs"
      @input="onInput"
      :value="value"
      :precision="money.precision"
      :decimal="money.decimal"
      :thousands="money.thousands"
      :prefix="money.prefix"
      :suffix="money.suffix" />
    <p
      v-if="hasError && errorMessage"
      class="error-message"
    >{{ errorMessage }}</p>
  </div>
</template>

<script>
import USD from '@/modules/core/domain/currency/USD';

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
    hasError: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      price: 0,
      money: USD,
    };
  },
  methods: {
    onInput(newValue) {
      if (this.value !== newValue) {
        // Avoids unnecessarily triggering the field's validation
        this.$emit('update', newValue);
      }
    }
  }
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

.input-wrapper.has-error {
  .label, .error-message {
    color: red;
  }
  .input {
    border: $size-input-border solid red;
    outline: none;
  }
}
</style>

