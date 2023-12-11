<script lang="ts" setup>
import { inject } from 'vue';
import { LIST_INJECTION_KEY, listDefaults } from './key';
const { showList } = inject(LIST_INJECTION_KEY, listDefaults);

</script>

<template>
  <div v-show="showList">
    <slot> </slot>
  </div>
</template>