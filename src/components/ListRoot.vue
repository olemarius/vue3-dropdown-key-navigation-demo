<script setup lang="ts">
import { ref, provide, watch, computed } from 'vue';
import { InjectionKey } from './key';

const listRef = ref<(HTMLInputElement | null)[]>([]);
const listCount = computed(() => listRef.value.length);
const selectedIndex = ref(0);

provide(InjectionKey, {
  listRef,
  listCount,
  selectedIndex,
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
  }
};
</script>

<template>
  ListRoot listRef: {{ listCount }} <br />
  <slot :list-ref="listRef" :handle-key-down="handleKeyDown"></slot>
</template>
