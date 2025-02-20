<script setup lang="ts">
import { computed } from 'vue'
import { type CardVariants, cardVariants } from '.'

interface Props {
  class?: string
  variant?: CardVariants['variant']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const cardClasses = computed(() => {
  return cardVariants({ variant: props.variant })
})
</script>

<template>
  <div :class="[cardClasses, props.class]">
    <slot />
  </div>
</template>