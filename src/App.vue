<script setup lang="ts">
import { ref } from 'vue'; 
import ListRoot from './components/ListRoot.vue';
import List from './components/List.vue';
import Item from './components/Item.vue';
const items = ref([1,2,3,4,5,6,7,8,9]);
const selectedValue = ref();
const selectItem = (index: number) => {
  console.log(index);
  selectedValue.value = items.value[index];
}
</script>

<template>
  <p>You have selected {{ selectedValue }}</p>
  <ListRoot v-slot="{ inputHandlers }" @select="selectItem">
    <input type="text" placeholder="search" v-on="inputHandlers" v-model="selectedValue" />
    <List>
      <Item v-for="(item, index) in items" :key="item" :index="index">
        {{ item }}
      </Item>
    </List>
  </ListRoot>
</template>
