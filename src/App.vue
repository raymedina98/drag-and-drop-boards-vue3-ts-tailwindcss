<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <div class="flex h-screen flex-row">
    <AppSidebar />
    <RouterView class="flex-1" />
  </div>
</template>
