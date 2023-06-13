export type ID = string

export interface Task {
  id: ID
  title: string
  createdAt: Date
}

export interface Column {
  id: ID
  title: string
  tasks: Task[]
}

export interface Board {
  id: ID
  title: string
  starred: boolean
  columns: Column[]
}

export type BoardList = 'starred' | 'all'
