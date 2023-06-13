<script setup lang="ts">
import { nanoid } from 'nanoid'
import { PlusIcon, XMarkIcon } from '@heroicons/vue/20/solid'
import { useBoardColumnTask } from '@/composables/boardColumnTask'
import type { Task } from '@/types'

const emit = defineEmits<{
  (e: 'save', payload: Task): void
}>()

const { title, focused, container, input, focusInput, blurInput } = useBoardColumnTask()

function createTask(e: Event) {
  if (title.value.trim()) {
    e.preventDefault()
    emit('save', {
      id: nanoid(),
      title: title.value.trim(),
      createdAt: new Date()
    })
  }
  title.value = ''
  focusInput()
}
</script>

<template>
  <div ref="container">
    <div
      v-if="!focused"
      class="flex cursor-pointer items-center justify-start overflow-hidden rounded-md border-b border-transparent bg-transparent px-1 py-2 hover:bg-gray-300"
      @click="focusInput"
    >
      <PlusIcon class="mr-1 h-5 w-5 text-gray-500" />
      <span class="text-gray-500">Add card</span>
    </div>
    <div v-else class="flex flex-col items-start">
      <textarea
        ref="input"
        v-model="title"
        placeholder="Enter a title for this card"
        @keydown.tab="createTask"
        @keyup.enter="createTask"
      />
      <div class="mt-2 flex items-center">
        <button class="btn btn-primary" @click="createTask">Save</button>
        <XMarkIcon class="ml-2 h-6 w-6 cursor-pointer text-gray-500" @click="blurInput" />
      </div>
    </div>
  </div>
</template>
