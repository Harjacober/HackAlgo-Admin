<template>
    <div class="form-group" v-bind:class="[interfaceClass]">
        <label class="form-label">{{ label  }}</label>
        <input
            :type="type"
            ref="input"
            class="form-control"
            @input="$emit('input', $event.target.value);"
            :class="{ 'is-danger': error }"
            v-bind="$attrs"
        />
        <transition name="slide">
            <span v-show="error" class="form-feedback is-danger">{{ error }}</span>
        </transition>
    </div>
</template>

<script>
export default {
  name: 'TextInput',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
      default: 'label',
    },
    error: {
      type: String,
      default: null,
    },
    interfaceClass: {
      type: String,
      default: 'white',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  mounted() {
  },
};

</script>
<style lang="scss">

</style>
