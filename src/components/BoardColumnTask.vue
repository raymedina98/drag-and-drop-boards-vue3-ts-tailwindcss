<script setup lang="ts">
import { watch } from 'vue'
import { PencilSquareIcon, XMarkIcon } from '@heroicons/vue/20/solid'
import { useBoardColumnTask } from '@/composables/boardColumnTask'
import type { Task, ID } from '@/types'

const props = defineProps<{ task: Task }>()

const emit = defineEmits<{
  (e: 'delete', payload: ID): void
  (e: 'save', payload: Task): void
}>()

const { title, focused, container, input, focusInput, blurInput } = useBoardColumnTask()

function updateTask(e: Event) {
  if (title.value.trim()) {
    e.preventDefault()
    emit('save', {
      ...props.task,
      title: title.value
    })
    return blurInput()
  }
  focusInput()
}

function deleteTask() {
  emit('delete', props.task.id)
  blurInput()
}

watch(focused, () => {
  title.value = props.task.title
})
</script>

<template>
  <div ref="container" class="flex flex-col items-start justify-center">
    <div
      v-if="!focused"
      :title="new Date(task.createdAt).toLocaleDateString()"
      class="task group relative w-[250px] break-words rounded-md border-b border-gray-300 bg-white p-2 shadow hover:bg-gray-200"
    >
      <span>{{ task.title }}</span>
      <div
        class="absolute right-1 top-1 hidden cursor-pointer rounded-md p-1 hover:bg-gray-300 group-hover:block"
      >
        <PencilSquareIcon @click="focusInput" class="h-4 w-4" />
      </div>
    </div>
    <textarea
      v-else
      ref="input"
      v-model="title"
      class="w-[250px]"
      placeholder="Enter a title for this card"
      @keydown.tab="updateTask"
      @keyup.enter="updateTask"
    />
    <div v-if="focused" class="mt-2 flex items-center space-x-2">
      <button class="btn btn-primary" @click="updateTask">Save</button>
      <button class="btn btn-danger" @click="deleteTask">Delete</button>
      <XMarkIcon class="h-6 w-6 cursor-pointer text-gray-500" @click="blurInput" />
    </div>
  </div>
</template>
