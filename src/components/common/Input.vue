<template>
  <div class="input-wrapper" :class="classes">
    <input
      v-bind="$attrs"
      :value="modelValue"
      class="h-[40px] w-full focus:outline-none rounded-lg py-[10px]"
      @input="handleInput"
      :disabled="disabled"
    >
  </div>
</template>

<script lang="ts" setup>
import {
  defineProps, defineEmits, withDefaults, computed,
} from 'vue';

interface Props {
  modelValue?: unknown;
  hasError?: boolean,
  disabled?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  hasError: false,
  disabled: false,
});

const emits = defineEmits(['update:modelValue']);

const handleInput = ($event: Event) => {
  emits('update:modelValue', ($event.target as HTMLInputElement).value);
};

const classes = computed<object>(() => ({
  'has-error': props.hasError,
  disabled: props.disabled,
}));
</script>

<script lang="ts">
export default {
  name: 'Input',
  inheritAttrs: false,
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  @apply w-full border-neutral-400 border-[1px] rounded-lg flex items-center px-3 gap-2 text-sm bg-white;
  @apply shadow-sm;
  &.disabled {
    @apply bg-neutral-400;
  }
  input:disabled {
    cursor: not-allowed;
    background-color: transparent;
  }
}
.has-error {
  @apply border-red-600;
}
</style>
