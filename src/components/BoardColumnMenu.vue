<script setup lang="ts">
import AppMenu from '@/components/AppMenu.vue'
import type { Column, ID } from '@/types'

const MENU_ACTIONS = [
  { name: 'Duplicate', event: 'duplicate', icon: 'DocumentDuplicateIcon' as const },
  { name: 'Delete', event: 'delete', icon: 'TrashIcon' as const }
]

defineProps<{ column: Column }>()

const emit = defineEmits<{
  (e: 'duplicate', payload: Column): void
  (e: 'delete', payload: ID): void
}>()
</script>

<template>
  <AppMenu
    :actions="MENU_ACTIONS"
    @duplicate="emit('duplicate', column)"
    @delete="emit('delete', column.id)"
  />
</template>
