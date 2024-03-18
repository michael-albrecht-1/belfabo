<script setup lang="ts">
import Item from "./Item.vue";
import { inject } from "vue";
import type { GetThingsPort } from "@/domain/ports/get-things.port";
import AddThing from "./AddThing.vue";

const getThingsPort = inject<GetThingsPort>("getThingsPort")!;
const things = await getThingsPort.execute();
</script>

<template>
  <div class="wrapper">
    <div class="list">
      <AddThing />
      <template v-for="thing in things" :key="thing.uuid">
        <Item :value="thing" />
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
</style>
```@/domain/model/thing.model
