<script setup lang="ts">
import AppDialog from '@/components/AppDialog.vue'
import type { Board, ID } from '@/types'

const props = defineProps<{
  board: Board
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', payload: boolean): void
  (e: 'delete', payload: ID): void
}>()

function deleteBoard() {
  emit('delete', props.board.id)
  emit('update:modelValue', false)
}
</script>

<template>
  <AppDialog
    :title="`Delete ${board.title}`"
    theme="danger"
    icon="ExclamationTriangleIcon"
    :modelValue="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template #content>
      <p class="text-sm text-gray-500">
        Are you sure you want to delete the selected board? All of your data will be permanently removed. This
        action cannot be undone.
      </p>
    </template>
    <template #submit>
      <button
        type="button"
        class="btn btn-danger w-full justify-center sm:ml-3 sm:w-auto"
        @click="deleteBoard"
      >
        Delete
      </button>
    </template>
  </AppDialog>
</template>
