<script setup lang="ts">
import { ThingState } from "@/domain/model/thing.model";
import Item from "./Item.vue";
import { inject } from "vue";
import type { GetThingsPort } from "@/domain/ports/get-things.port";
import AddThing from "./AddThing.vue";

const getThingsPort = inject<GetThingsPort>("getThingsPort")!;
const things = await getThingsPort.execute();

const orderedThings = things.sort((a, b) =>
  a.state === ThingState.DONE ? 1 : -1
);
</script>

<template>
  <div class="wrapper">
    <div class="list">
      <AddThing />
      <template v-for="orderedThing in orderedThings" :key="orderedThing.uuid">
        <Item :value="orderedThing" />
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
