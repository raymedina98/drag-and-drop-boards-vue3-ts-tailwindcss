<script setup lang="ts">
import { computed } from 'vue'
import { TableCellsIcon, ExclamationCircleIcon } from '@heroicons/vue/20/solid'
import { StarIcon } from '@heroicons/vue/24/outline'
import BoardItem from '@/components/BoardItem.vue'
import type { Board, BoardList } from '@/types'

const props = withDefaults(
  defineProps<{
    boards: Board[]
    type?: BoardList
  }>(),
  {
    type: 'all'
  }
)

const filteredBoards = computed(() => {
  if (props.type === 'starred') {
    return props.boards.filter((board) => board.starred)
  }
  return props.boards
})
</script>

<template>
  <section>
    <header v-if="type === 'starred' && filteredBoards.length" class="mt-5 flex items-center space-x-3">
      <StarIcon class="text-gray h-10 w-10" />
      <span class="text-lg font-semibold text-gray-700">Starred boards</span>
    </header>
    <header v-else-if="type === 'all'" class="mt-5 flex items-center space-x-3">
      <TableCellsIcon v-if="filteredBoards.length" class="h-10 w-10" />
      <ExclamationCircleIcon v-else class="h-10 w-10" />
      <span class="text-lg font-semibold text-gray-700">
        {{ filteredBoards.length ? 'Your boards' : 'No boards found' }}
      </span>
    </header>
    <ul
      v-if="filteredBoards.length"
      class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <BoardItem
        :key="board.id"
        :board="board"
        v-for="board in filteredBoards"
        @update="$emit('update', $event)"
        @delete="$emit('delete', $event)"
      />
    </ul>
  </section>
</template>
