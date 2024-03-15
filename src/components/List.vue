<script setup lang="ts">
import { ItemState, type ItemModel } from "@/domain/model/item.model";
import Item from "./Item.vue";

const items: ItemModel[] = [
  { uuid: "1", title: "huile", state: ItemState.TODO },
  { uuid: "2", title: "chips", state: ItemState.DONE },
  { uuid: "3", title: "biere", state: ItemState.DONE },
  { uuid: "4", title: "saucisson", state: ItemState.DONE },
  { uuid: "5", title: "fromage", state: ItemState.TODO },
];

const orderedItems = items.sort((a, b) =>
  a.state === ItemState.DONE ? 1 : -1
);
</script>

<template>
  <div class="wrapper">
    <div class="list">
      <template v-for="orderedItem in orderedItems" :key="item.uuid">
        <Item :value="orderedItem" />
      </template>
    </div>
  </div>
</template>
./Item.vue@/domain/model/item.model

<style scoped>
.wrapper {
  margin: 0 auto;
  max-width: 1024px;
}

.list {
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

/* @media (min-width: 1024px) {
  .list {
    width: 60%;
  }
} */
</style>
```
