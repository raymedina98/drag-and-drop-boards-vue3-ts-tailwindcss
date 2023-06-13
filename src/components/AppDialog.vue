<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { PlusCircleIcon, PencilSquareIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const ICONS = {
  PlusCircleIcon,
  PencilSquareIcon,
  ExclamationTriangleIcon
}

withDefaults(
  defineProps<{
    modelValue: boolean
    title?: string
    theme?: 'primary' | 'danger'
    icon?: keyof typeof ICONS
  }>(),
  {
    title: 'Dialog',
    theme: 'primary',
    icon: 'PlusCircleIcon'
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', payload: boolean): void
}>()

function close() {
  emit('update:modelValue', false)
}
</script>

<template>
  <TransitionRoot as="template" :show="modelValue">
    <Dialog class="relative z-[100]" @close="close">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed left-0 right-0 top-0 h-screen w-screen bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>
      <div class="fixed bottom-0 left-0 right-0 top-0 z-[100] overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative z-[100] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                    :class="[
                      'mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10',
                      `bg-${theme}-light`
                    ]"
                  >
                    <component :is="ICONS[icon]" :class="['h-6 w-6', `text-${theme}`]" aria-hidden="true" />
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="line-clamp-2 text-base font-semibold leading-6 text-gray-900">
                      {{ title }}
                    </DialogTitle>
                    <div class="mt-2">
                      <slot name="content" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <slot name="submit" />
                <button
                  type="button"
                  class="btn btn-cancel mt-3 inline-flex w-full justify-center sm:mt-0 sm:w-auto"
                  @click="close"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
