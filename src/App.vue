<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ListRoot from './components/ListRoot.vue';
import List from './components/List.vue';
import Item from './components/Item.vue';
</script>

<template>
  <ListRoot v-slot="{ selectedIndex, handleKeyDown }">
    <input type="text" placeholder="search" @keydown="handleKeyDown" />
    <List>
      <Item v-for="(item, index) in 10" :key="item" :index="index">
        {{ item }}
      </Item>
    </List>
  </ListRoot>
</template>
