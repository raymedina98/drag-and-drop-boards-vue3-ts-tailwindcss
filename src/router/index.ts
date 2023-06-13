import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BoardView from '@/views/BoardView.vue'
import { useBoardStore } from '@/stores/boardStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/boards/:id',
      name: 'Board',
      component: BoardView,
      beforeEnter(to, from, next) {
        const { getBoardIndex } = useBoardStore()
        if (getBoardIndex(to.params.id as string) > -1) {
          return next()
        }
        return next({
          name: 'Home'
        })
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
