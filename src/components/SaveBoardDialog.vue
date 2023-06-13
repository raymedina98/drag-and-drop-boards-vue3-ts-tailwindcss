<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import AppDialog from '@/components/AppDialog.vue'
import type { Board, ID } from '@/types'

const props = defineProps<{
  board: Board
  modelValue: boolean
}>()

const newBoardTitle = ref('')

const emit = defineEmits<{
  (e: 'update:modelValue', payload: boolean): void
  (e: 'create', payload: string): void
  (e: 'update', board: Board, boardId: ID): void
}>()

function save() {
  if (newBoardTitle.value && props.board?.id) {
    emit('update', { ...props.board, title: newBoardTitle.value }, props.board.id)
  } else if (newBoardTitle.value) {
    emit('create', newBoardTitle.value)
  }
  emit('update:modelValue', false)
}

watchEffect(() => (newBoardTitle.value = props.board?.title || ''))
</script>

<template>
  <AppDialog
    :title="board?.title ? `Edit ${board.title}` : 'Create new board'"
    theme="primary"
    :icon="board?.id ? 'PencilSquareIcon' : 'PlusCircleIcon'"
    :modelValue="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template #content>
      <input
        v-model="newBoardTitle"
        class="input input-primary md:w-[25.5rem]"
        type="text"
        placeholder="Enter a title for this board"
        @keydown.tab="save"
        @keyup.enter="save"
      />
    </template>
    <template #submit>
      <button
        type="button"
        :disabled="!newBoardTitle"
        :class="[
          'btn btn-primary w-full justify-center sm:ml-3 sm:w-auto',
          { 'btn-disabled ': !newBoardTitle }
        ]"
        @click="save"
      >
        Save
      </button>
    </template>
  </AppDialog>
</template>
