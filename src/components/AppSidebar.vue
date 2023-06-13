<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { TableCellsIcon, HomeIcon } from '@heroicons/vue/20/solid'
import { useBoardStore } from '@/stores/boardStore'
import AppLogo from '@/components/AppLogo.vue'

const store = useBoardStore()
const router = useRouter()
const { boards } = storeToRefs(store)
</script>

<template>
  <section class="hidden min-h-screen bg-white md:block">
    <div
      class="sidebar scrollbar-list-sm group min-h-screen w-[3.35rem] overflow-x-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg"
    >
      <div class="flex h-screen flex-col justify-between pb-6 pt-2">
        <div>
          <RouterLink :to="{ name: 'Home' }" class="flex cursor-pointer items-center space-x-2 py-2 pl-1.5">
            <AppLogo size="sm" />
            <div class="flex flex-col">
              <span class="text-lg font-semibold text-gray-700">Worskpace</span>
            </div>
          </RouterLink>
          <ul class="mt-3 tracking-wide">
            <li
              :class="[
                'min-w-max hover:bg-gray-100',
                { 'bg-gray-100': router.currentRoute.value.name === 'Home' }
              ]"
            >
              <RouterLink
                :to="{ name: 'Home' }"
                class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-700"
              >
                <HomeIcon class="h-5 w-5" />
                <span>Home</span>
              </RouterLink>
            </li>
            <li
              :class="[
                'min-w-max hover:bg-gray-100',
                { 'bg-gray-100': router.currentRoute.value.name === 'Board' }
              ]"
            >
              <div
                class="flex items-center space-x-4 rounded-full px-4 py-3 text-gray-700 group-hover:hidden"
              >
                <TableCellsIcon class="h-5 w-5" />
              </div>
            </li>
            <li
              :class="[
                'hidden min-w-max hover:bg-gray-100 group-hover:block',
                { 'bg-gray-100': router.currentRoute.value.params.id === board.id }
              ]"
              :key="board.id"
              v-for="board in boards"
            >
              <RouterLink
                :to="{ name: 'Board', params: { id: board.id } }"
                class="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-700"
              >
                <TableCellsIcon class="h-5 w-5" />
                <span class="w-36 overflow-hidden text-ellipsis whitespace-nowrap">{{ board.title }}</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
