<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { PlusIcon } from '@heroicons/vue/20/solid'
import { useBoardStore } from '@/stores/boardStore'
import AppLogo from '@/components/AppLogo.vue'
import BoardsList from '@/components/BoardsList.vue'
import DeleteBoardDialog from '@/components/DeleteBoardDialog.vue'
import SaveBoardDialog from '@/components/SaveBoardDialog.vue'
import type { Board, BoardList } from '@/types'

const DIALOGS = {
  SaveBoardDialog,
  DeleteBoardDialog
}

type Dialog = keyof typeof DIALOGS

const store = useBoardStore()
const { boards } = storeToRefs(store)
const { createBoard, updateBoard, deleteBoard } = store

const search = ref('')
const boardsLists = ref<BoardList[]>(['starred', 'all'])
const selectedBoard = ref<Board | {}>({})
const selectedDialog = ref<{
  show: boolean
  name: Dialog
}>({
  show: false,
  name: 'SaveBoardDialog'
})

const filteredBoards = computed(() => {
  if (search.value) {
    return boards.value.filter((board) =>
      board.title.trim().toUpperCase().includes(search.value.trim().toUpperCase())
    )
  }
  return boards.value
})

function openDialog(name: Dialog, board: Board = {} as Board) {
  selectedBoard.value = board
  selectedDialog.value = {
    show: true,
    name
  }
}
function closeDialog() {
  selectedBoard.value = {}
  selectedDialog.value = {
    show: false,
    name: 'SaveBoardDialog'
  }
}
</script>

<template>
  <div>
    <main class="mx-auto max-w-5xl px-3 pb-4 md:px-0">
      <header class="mt-0 flex items-center justify-start space-x-3 border-b border-gray-300 py-5 md:mt-12">
        <AppLogo size="lg" />
        <div class="flex flex-col">
          <span class="text-2xl font-semibold text-gray-700">Worskpace</span>
        </div>
      </header>
      <div class="relative">
        <section
          class="mt-4 flex flex-col space-y-3 md:absolute md:right-0 md:top-1 md:mt-0 md:flex-row md:items-center md:space-x-3 md:space-y-0"
        >
          <input v-model="search" type="text" class="input input-primary" placeholder="Search board" />
          <button class="btn btn-primary flex items-center px-3 py-2" @click="openDialog('SaveBoardDialog')">
            <PlusIcon class="h-5 w-5" />
            <span>Add board</span>
          </button>
        </section>
        <BoardsList
          :key="boardList"
          :boards="filteredBoards"
          :type="boardList"
          v-for="boardList in boardsLists"
          @update="openDialog('SaveBoardDialog', $event)"
          @delete="openDialog('DeleteBoardDialog', $event)"
        />
      </div>
    </main>
    <component
      :is="DIALOGS[selectedDialog.name]"
      :board="(selectedBoard as Board)"
      v-model="selectedDialog.show"
      @create="createBoard"
      @update="updateBoard"
      @delete="deleteBoard"
      @close="closeDialog"
    />
  </div>
</template>
