<script setup lang="ts">
import { PlusIcon, XMarkIcon } from '@heroicons/vue/20/solid'
import { useBoardColumnTask } from '@/composables/boardColumnTask'

const emit = defineEmits<{
  (e: 'save', payload: string): void
}>()

const { title, focused, container, input, focusInput, blurInput } = useBoardColumnTask()

function createColumn(e: Event) {
  if (title.value.trim()) {
    e.preventDefault()
    emit('save', title.value)
  }
  title.value = ''
  focusInput()
}
</script>

<template>
  <div ref="container">
    <div
      v-if="!focused"
      class="flex w-[17.5rem] cursor-pointer items-center justify-start overflow-hidden rounded-md bg-gray-200 p-4 opacity-50 hover:bg-gray-300"
      @click="focusInput"
    >
      <PlusIcon class="mr-1 h-5 w-5 text-black" />
      <span class="text-black">Add column</span>
    </div>
    <div v-else class="flex w-[17.5rem] flex-col items-start rounded-md bg-gray-200 p-4">
      <input
        ref="input"
        v-model="title"
        type="text"
        class="mx-auto w-[250px] rounded-md p-2 outline-none"
        placeholder="Enter a title for this column"
        @keydown.tab="createColumn"
        @keyup.enter="createColumn"
      />
      <div class="mb-2.5 mt-2 flex items-center">
        <button class="btn btn-primary" @click="createColumn">Save</button>
        <XMarkIcon class="ml-2 h-6 w-6 cursor-pointer text-gray-500" @click="blurInput" />
      </div>
    </div>
  </div>
</template>
