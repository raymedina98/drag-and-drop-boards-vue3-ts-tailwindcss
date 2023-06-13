<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {
  EllipsisHorizontalIcon,
  DocumentDuplicateIcon,
  PencilSquareIcon,
  TrashIcon
} from '@heroicons/vue/20/solid'

const ICONS = {
  DocumentDuplicateIcon,
  PencilSquareIcon,
  TrashIcon
}

withDefaults(
  defineProps<{
    actions: { name: string; event: string; icon: keyof typeof ICONS }[]
    menuButttonClasses?: string
    menuButttonIconClasses?: string
  }>(),
  {
    menuButttonClasses: 'group cursor-pointer rounded-md p-1 hover:bg-gray-300',
    menuButttonIconClasses: 'h-5 w-5 text-gray-500 group-hover:text-black'
  }
)
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton @click.stop :class="menuButttonClasses">
        <EllipsisHorizontalIcon :class="menuButttonIconClasses" aria-hidden="true" />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-1 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:left-0 md:right-auto"
      >
        <div class="py-1">
          <MenuItem :key="action.event" v-for="action in actions">
            <div
              class="group z-20 flex cursor-pointer items-center px-4 py-2 font-normal text-gray-700 outline-none hover:bg-gray-100"
              @click.stop="$emit(action.event)"
            >
              <component :is="ICONS[action.icon]" class="h-4 w-4 text-gray-500 group-hover:text-gray-900" />
              <span class="z-20 ml-2 group-hover:text-gray-900">{{ action.name }}</span>
            </div>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
