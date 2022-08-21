<template>
  <button
    class="btn flex items-center justify-center px-4 py-2.5 rounded-lg text-sm"
    :class="classes"
    :disabled="disabled"
    @click="onClick"
  >
    <slot> BUTTON LABEL </slot>
  </button>
</template>

<script lang="ts" setup>
import {
  computed, defineProps, defineEmits, withDefaults,
} from 'vue';

interface Props {
  variant?: 'default' | 'primary';
  size?: 'md' | 'lg';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'lg',
  disabled: false,
});

const emit = defineEmits(['click']);

const classes = computed(() => ({
  btn: true,
  [`btn-${props.size}`]: true,
  [`btn-${props.variant}`]: true,
}));

const onClick = () => {
  emit('click');
};
</script>

<script lang="ts">
export default {
  name: 'Button',
};
</script>

<style lang="scss" scoped>
.btn {
  @apply max-h-10 font-bold transition-all;

  &:disabled {
    @apply cursor-not-allowed
  }
  &.btn-medium {
    @apply max-h-8 py-2 px-3;
  }
}
.btn-md {
    @apply max-h-8 py-2 px-3;
}
.btn-lg {
  @apply py-[10px] px-4;
}

.btn-default {
  @apply border border-2 border-black bg-white;
  @apply hover:bg-gray-400;
}
.btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
}
</style>
