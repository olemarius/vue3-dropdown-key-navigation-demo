<script setup lang="ts">
import { ref, provide, computed } from 'vue';
import { LIST_INJECTION_KEY } from './key';

const listRef = ref<(HTMLInputElement | null)[]>([]);
const listCount = computed(() => listRef.value.length);
const selectedIndex = ref<number>(0);
const enableList = ref<boolean>(false);
const showList = computed(() => enableList.value && listCount.value > 0);

provide(LIST_INJECTION_KEY, {
  listRef,
  listCount,
  selectedIndex,
  showList
});

const highlightPrevious = () => {
  if (selectedIndex.value === 0) {
    selectedIndex.value = listCount.value;
  }
  selectedIndex.value--;
};

const highlightNext = () => {
  if (selectedIndex.value === listCount.value - 1) {
    selectedIndex.value = 0;
    return;
  }
  selectedIndex.value++;
};

const handleKeyDown = (event: KeyboardEvent) => {

  if (event.key === 'ArrowUp') {
    highlightPrevious();
  } else if (event.key === 'ArrowDown') {
    highlightNext();
  } else if (event.key === 'Enter'){
    emit('select', selectedIndex.value)
  }
};


const emit = defineEmits<{ 
  (e: 'select', index: number): void
}>();

const eventHandlers = {
  focus: () => {
    enableList.value = true;
  },
  blur: () => {
    enableList.value = false;
  },
  keydown: handleKeyDown,

    
}
</script>

<template>
  <slot :list-ref="listRef" :input-handlers="eventHandlers"></slot>
</template>
