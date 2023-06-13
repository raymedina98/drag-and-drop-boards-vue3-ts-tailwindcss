import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { nanoid } from 'nanoid'
import { useLocalStorage } from '@vueuse/core'
import type { Board, Column, Task, ID } from '@/types'
import { initialBoardsTemplate, newBoardColumnsTemplate } from '@/stores/data'

export const useBoardStore = defineStore('board', () => {
  const router = useRouter()
  const boards = useLocalStorage<Board[]>('boards', initialBoardsTemplate)

  function getBoardIndex(id?: ID) {
    const boardId = id || router.currentRoute.value.params.id
    return boards.value.findIndex((board) => board.id === boardId)
  }

  function createBoard(title: string) {
    const board: Board = {
      id: nanoid(),
      title,
      starred: false,
      columns: newBoardColumnsTemplate
    }
    boards.value.push(board)
  }

  function updateBoard(board: Board, id: ID) {
    const index = getBoardIndex(id)
    if (index > -1) {
      boards.value[index] = {
        ...boards.value[index],
        ...board
      }
    }
  }

  function deleteBoard(id: ID) {
    const index = getBoardIndex(id)
    if (index > -1) {
      boards.value.splice(index, 1)
    }
  }

  const columns = computed({
    get(): Column[] {
      const index = getBoardIndex()
      if (index > -1) {
        return boards.value[index].columns
      }
      return []
    },
    set(newVal: Column[]) {
      const index = getBoardIndex()
      if (index > -1) {
        boards.value[index].columns = newVal
      }
    }
  })

  function createBoardColumn(title: string, id?: ID) {
    const column: Column = {
      id: nanoid(),
      title,
      tasks: []
    }
    const index = getBoardIndex(id)
    if (index > -1) {
      boards.value[index].columns.push(column)
    }
  }

  function duplicateBoardColumn(column: Column) {
    const index = columns.value.findIndex((_column) => _column.id === column.id)
    if (index > -1) {
      const duplicatedColumn: Column = {
        id: nanoid(),
        title: column.title,
        tasks: column.tasks.map((task) => ({
          id: nanoid(),
          title: task.title,
          createdAt: task.createdAt
        }))
      }
      columns.value.splice(index + 1, 0, duplicatedColumn)
    }
  }

  function deleteBoardColumn(columnId: ID) {
    const index = columns.value.findIndex((column) => column.id === columnId)
    if (index > -1) {
      columns.value.splice(index, 1)
    }
  }

  function createBoardColumnTask(task: Task, columnId: ID) {
    const index = columns.value.findIndex((column) => column.id === columnId)
    if (index > -1) {
      columns.value[index].tasks.push(task)
    }
  }

  function updateBoardColumnTask(task: Task, columnId: ID) {
    const columnIndex = columns.value.findIndex((column) => column.id === columnId)
    if (columnIndex > -1) {
      const taskIndex = columns.value[columnIndex].tasks.findIndex((_task) => _task.id === task.id)
      if (taskIndex > -1) {
        columns.value[columnIndex].tasks[taskIndex].title = task.title
      }
    }
  }

  function deleteBoardColumnTask(taskId: ID, columnId: ID) {
    const columnIndex = columns.value.findIndex((column) => column.id === columnId)
    if (columnIndex > -1) {
      const taskIndex = columns.value[columnIndex].tasks.findIndex((task) => task.id === taskId)
      if (taskIndex > -1) {
        columns.value[columnIndex].tasks.splice(taskIndex, 1)
      }
    }
  }

  return {
    boards,
    columns,
    getBoardIndex,
    createBoard,
    updateBoard,
    deleteBoard,
    createBoardColumn,
    duplicateBoardColumn,
    deleteBoardColumn,
    createBoardColumnTask,
    updateBoardColumnTask,
    deleteBoardColumnTask
  }
})
