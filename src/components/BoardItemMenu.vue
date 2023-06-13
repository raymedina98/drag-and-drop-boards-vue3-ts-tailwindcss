<script setup lang="ts">
import AppMenu from '@/components/AppMenu.vue'
import type { Board } from '@/types'

const MENU_ACTIONS = [
  { name: 'Update', event: 'update', icon: 'PencilSquareIcon' as const },
  { name: 'Delete', event: 'delete', icon: 'TrashIcon' as const }
]

defineProps<{
  board: Board
}>()

const emit = defineEmits<{
  (e: 'delete', payload: Board): void
  (e: 'update', payload: Board): void
}>()
</script>

<template>
  <AppMenu
    :actions="MENU_ACTIONS"
    menu-buttton-classes="group cursor-pointer rounded-md border border-white hover:bg-white outline-none"
    menu-buttton-icon-classes="h-5 w-5 text-white group-hover:text-primary"
    @update="emit('update', board)"
    @delete="emit('delete', board)"
  />
</template>
