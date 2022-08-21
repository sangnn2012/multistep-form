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
  size: 'md',
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
  name: 'DButton',
};
</script>

<style lang="scss" scoped>
.btn {
  max-height: 40px;
  @apply font-bold transition-all;

  &:disabled {
    opacity: 0.5;
  }
  &.btn-medium {
    max-height: 32px !important;
    padding: 6px 12px !important;
  }
  &.btn-primary {
    &.btn-outline {
      border: 1px solid var(--blue-800);
      color: var(--blue-800);
      background: transparent;
      .icon {
        background: var(--blue-800);
      }
      &:disabled {
        border-color: var(--neutral-400);
        color: var(--neutral-400);
      }
    }
    &.btn-transparent {
      border: none;
      color: var(--blue-800);
      background: transparent;
      padding: 10px 8px !important;
      &:disabled {
        border-color: var(--neutral-400);
        color: var(--neutral-400);
      }
    }
  }
}

.btn-md {
  max-height: 32px !important;
  padding: 6px 12px !important;
}
.btn-lg {
  @apply py-[10px] px-4;
}
.btn-default {
  @apply border border-2 border-blue-800;
  @apply hover:bg-neutral-500;
}
</style>
