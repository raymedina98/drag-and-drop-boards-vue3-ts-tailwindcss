<script setup lang="ts">
import { useRouter } from 'vue-router'
import { StarIcon } from '@heroicons/vue/24/outline'
import { useBoardStore } from '@/stores/boardStore'
import type { Board } from '@/types'
import BoardItemMenu from '@/components/BoardItemMenu.vue'

defineProps<{ board: Board }>()

const router = useRouter()
const store = useBoardStore()

const { updateBoard } = store

function goToBoard(id: string) {
  router.push({ name: 'Board', params: { id } })
}
</script>

<template>
  <li
    @click="goToBoard(board.id)"
    class="bg-gradient-primary hover:bg-gradient-primary-hover relative flex cursor-pointer flex-row break-words rounded-md text-[16px]"
    :key="board.id"
  >
    <div :title="board.title" class="w-ful mr-7 h-28 w-full p-2">
      <p class="line-clamp-3 font-semibold text-white">{{ board.title }}</p>
      <div class="rig absolute right-[13px] top-2 h-5 w-5 fill-white">
        <BoardItemMenu :board="board" @update="$emit('update', $event)" @delete="$emit('delete', $event)" />
      </div>
      <StarIcon
        @click.stop="updateBoard({ ...board, starred: !board.starred }, board.id)"
        :class="[
          'absolute bottom-3 right-3 h-5 w-5 stroke-yellow-500',
          { 'hover:fill-yellow-500': !board.starred },
          { 'fill-yellow-500': board.starred }
        ]"
      />
    </div>
  </li>
</template>
