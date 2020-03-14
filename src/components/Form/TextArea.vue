<template>
    <div class="form-group">
        <textarea
            class="form-control"
             @input="$emit('input', $event.target.value);"
            :class="{ 'is-danger': error }"
            v-bind="$attrs"
        ></textarea>
    </div>
</template>
<script>
export default {
  name: 'text-area',
  inheritAttrs: false,
  props: {
    error: {
      type: String,
      default: null,
    },
  },
};
</script>
