<script setup lang="ts">
import { ref, nextTick, computed } from 'vue'
import { storeToRefs } from 'pinia'
import draggable from 'vuedraggable'
import { HomeIcon } from '@heroicons/vue/20/solid'
import { useBoardStore } from '@/stores/boardStore'
import BoardColumnMenu from '@/components/BoardColumnMenu.vue'
import BoardColumnTask from '@/components/BoardColumnTask.vue'
import NewBoardColumnTask from '@/components/NewBoardColumnTask.vue'
import NewBoardColumn from '@/components/NewBoardColumn.vue'
import type { Column, Task } from '@/types'

const store = useBoardStore()
const { boards, columns } = storeToRefs(store)
const draggingColumn = ref(false)
const boardContainer = ref<HTMLDivElement | null>(null)

const {
  createBoardColumn,
  duplicateBoardColumn,
  deleteBoardColumn,
  createBoardColumnTask,
  updateBoardColumnTask,
  deleteBoardColumnTask,
  getBoardIndex
} = store

const boardName = computed(() => boards.value[getBoardIndex()]?.title || 'No info')

function startBoardColumnDraggin(event: DragEvent) {
  if ((event.target as HTMLDivElement).children[0].classList.contains('column')) {
    draggingColumn.value = true
  }
}
function endBoardColumnDraggin() {
  draggingColumn.value = false
}
function saveBoardColumn(event: string) {
  createBoardColumn(event)
  nextTick(() => {
    boardContainer.value?.scrollTo({
      left: boardContainer.value.scrollWidth
    })
  })
}
</script>

<template>
  <main class="bg-gradient-primary h-screen overflow-y-hidden px-4 pb-10 pt-6">
    <header class="">
      <div class="flex items-center space-x-3">
        <RouterLink :to="{ name: 'Home' }">
          <HomeIcon class="h-6 w-6 cursor-pointer text-white hover:text-gray-300" />
        </RouterLink>
        <h1 class="text-xl font-medium text-white">/</h1>
        <h1 class="line-clamp-1 text-xl font-medium text-white">
          {{ boardName }}
        </h1>
      </div>
    </header>
    <div
      ref="boardContainer"
      class="scrollbar-list-lg w-100 mt-6 flex h-[calc(100vh-85px)] items-start space-x-4 overflow-x-auto overflow-y-hidden"
    >
      <draggable
        v-model="columns"
        group="columns"
        :animation="150"
        item-key="id"
        :force-fallback="false"
        :scroll-sensitivity="200"
        class="flex h-full items-start space-x-4 pb-2"
        @dragstart="startBoardColumnDraggin"
        @end="endBoardColumnDraggin"
        ghost-class="ghost"
        drag-class="drag"
      >
        <template #item="{ element: column }: { element: Column }">
          <div class="h-full">
            <div
              class="column flex max-h-full w-[17.5rem] cursor-grab flex-col space-y-2 rounded-md bg-gray-200 p-4"
            >
              <header class="flex flex-row items-center justify-between px-1 font-semibold">
                <input
                  class="w-4/5 rounded-md bg-transparent p-1 outline-none focus:bg-white"
                  @keyup.enter=";($event.target as HTMLInputElement).blur()"
                  type="text"
                  :disabled="draggingColumn"
                  v-model="column.title"
                />
                <BoardColumnMenu
                  :column="column"
                  @duplicate="duplicateBoardColumn"
                  @delete="deleteBoardColumn"
                />
              </header>
              <draggable
                v-model="column.tasks"
                group="tasks"
                item-key="id"
                class="scrollbar-list-sm space-y-2 overflow-y-auto overflow-x-hidden"
                ghost-class="ghost"
                drag-class="drag"
              >
                <template #item="{ element: task }: { element: Task }">
                  <div class="flex justify-center px-1">
                    <BoardColumnTask
                      :task="task"
                      @save="updateBoardColumnTask($event, column.id)"
                      @delete="deleteBoardColumnTask($event, column.id)"
                    />
                  </div>
                </template>
              </draggable>
              <footer>
                <NewBoardColumnTask @save="createBoardColumnTask($event, column.id)" />
              </footer>
            </div>
          </div>
        </template>
      </draggable>
      <NewBoardColumn @save="saveBoardColumn" />
    </div>
  </main>
</template>
