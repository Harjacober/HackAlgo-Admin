<template>
    <div class="form-group" v-bind:class="[interfaceClass]">
        <label class="form-label">{{ label  }}</label>
        <input
            type="password"
            ref="input"
            class="form-control"
            v-bind="$attrs"
            @input="$emit('input', $event.target.value);"
            :class="{ 'is-danger': error }"
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
  $_veeValidate: {
    // value getter
    value() {
      return this.$el.value;
    },
    // // name getter
    name() {
      return this.name;
    },
  },
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
  },
  mounted() {

  },
};

</script>
<style lang="scss">

</style>
