<template>
  <div class="flex flex-col-reverse">
    <label class="text-sm text-gray-600" :for="`${label}-input`">{{ label }}</label>
    <select
      v-if="type === 'select'"
      :id="`${label}-input`"
      :class="[
        'text-lg bg-transparent mb-1 py-1 border rounded',
        mode === 'view' && 'appearance-none border-transparent',
      ]"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
      <option v-for="option of options" :value="option.id" :key="option.id">{{
        option.text
      }}</option>
    </select>
    <textarea
      v-else-if="type === 'textarea'"
      :disabled="mode === 'view'"
      :class="[
        'text-lg bg-transparent mb-1 py-1 resize-none border rounded',
        mode === 'view' && 'border-transparent',
      ]"
      :value="value"
      @input="$emit('input', $event.target.value)"
      v-bind="$attrs"
      :id="`${label}-input`"
    />
    <!-- The type check prevents the "clear" icon from showing in view mode -->
    <input
      v-else
      :type="type === 'date' && mode === 'view' ? 'text' : type"
      :disabled="mode === 'view'"
      :class="[
        'text-lg bg-transparent mb-1 py-1 border rounded',
        mode === 'view' && 'border-transparent',
      ]"
      :value="type !== 'file' ? value : ''"
      @input="
        $emit('input', type !== 'file' ? $event.target.value : Array.from($event.target.files))
      "
      v-bind="$attrs"
      :id="`${label}-input`"
    />
  </div>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'view',
    },
    value: {
      type: [String, Array],
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
