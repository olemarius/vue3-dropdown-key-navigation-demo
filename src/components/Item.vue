<script lang="ts" setup>
import { ref, inject, defineProps, onMounted, computed } from 'vue';
import { InjectionKey } from './key';

const { index } = defineProps({ index: Number });

const div = ref();
const isActive = computed(() => selectedIndex.value === index);

const { listRef, selectedIndex } = inject(InjectionKey);

onMounted(() => listRef.value.push(div.value));
</script>

<template>
  <div
    ref="div"
    :class="{
      active: isActive,
    }"
  >
    <slot></slot> {{ isActive }}
  </div>
</template>

<style scoped>
.active {
  background-color: red;
}
</style>
