<script lang="ts" setup>
import { ref, onMounted, defineExpose, computed, inject } from 'vue';
const selectedIndex = ref(0);
</script>

<template>
  <br />
  <div ref="listRef">
    <slot :list-itemm="listRef" :selected-index="selectedIndex"> </slot>
  </div>
</template>
