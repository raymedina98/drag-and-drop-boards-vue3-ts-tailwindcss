<script setup lang="ts">
const TW_CLASSES = {
  sm: 'h-10 w-10 text-3xl',
  lg: 'h-20 w-20 text-5xl'
}

withDefaults(
  defineProps<{
    size?: 'sm' | 'lg'
  }>(),
  {
    size: 'lg'
  }
)
</script>

<template>
  <div
    :class="[
      TW_CLASSES[size],
      'bg-gradient-primary flex items-center justify-center rounded-md p-2 font-semibold text-white'
    ]"
  >
    <span>W</span>
  </div>
</template>
