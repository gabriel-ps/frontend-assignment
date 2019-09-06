<template>
  <div
    v-if="show"
    class="modal"
    @click="$emit('close')"
  >
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <button
          type="button"
          class="close"
          @click="$emit('close')"
        >&times;</button>
        <h3 v-if="title">{{ title }}</h3>
      </div>
      <div class="modal-body">
        <slot name="body" />
      </div>
      <div class="modal-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

  /* Modal Content */
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
}
</style>
