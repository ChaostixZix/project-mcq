<script setup>
import { computed } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'default',
  },
  class: {
    type: String,
    default: '',
  },
});

const buttonVariants = computed(() => {
  return cn(
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
      'bg-primary text-primary-foreground hover:bg-primary/90': props.variant === 'default',
      'bg-destructive text-destructive-foreground hover:bg-destructive/90': props.variant === 'destructive',
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground': props.variant === 'outline',
      'bg-secondary text-secondary-foreground hover:bg-secondary/80': props.variant === 'secondary',
      'hover:bg-accent hover:text-accent-foreground': props.variant === 'ghost',
      'hover:underline': props.variant === 'link',
      'h-10 px-4 py-2': props.size === 'default',
      'h-9 rounded-md px-3': props.size === 'sm',
      'h-11 rounded-md px-8': props.size === 'lg',
      'h-9 w-9': props.size === 'icon',
    },
    props.class
  );
});
</script>

<template>
  <button :class="buttonVariants">
    <slot />
  </button>
</template>