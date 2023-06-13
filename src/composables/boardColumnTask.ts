import { ref, nextTick } from 'vue'
import { onClickOutside } from '@vueuse/core'

export function useBoardColumnTask() {
  const title = ref('')
  const focused = ref(false)
  const container = ref<HTMLDivElement | null>(null)
  const input = ref<HTMLInputElement | HTMLTextAreaElement | null>(null)

  function focusInput() {
    focused.value = true
    nextTick(() => (input.value as HTMLInputElement).focus())
  }
  function blurInput() {
    focused.value = false
    title.value = ''
  }

  onClickOutside(container, () => blurInput())

  return {
    title,
    focused,
    container,
    input,
    focusInput,
    blurInput
  }
}
