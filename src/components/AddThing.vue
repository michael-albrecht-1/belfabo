<script setup lang="ts">
import type { CreateThingPort } from "@/domain/ports/create-thing.port";
import { inject, ref } from "vue";

const createThingPort = inject<CreateThingPort>("createThingPort")!;
const thingTitle = ref("");

const onSubmit = () => {
  createThingPort.execute(thingTitle.value);
  thingTitle.value = "";
};
</script>

<template>
  <div class="item">
    <input type="text" placeholder="ajouter un truc" v-model="thingTitle" />
    <button @click="onSubmit" :disabled="!thingTitle">ajouter</button>
  </div>
</template>

<style scoped>
input[type="text"] {
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: 1px solid #3fb883;
}

button {
  margin-left: 1rem;
  border-color: #3fb883;
  background-color: #000;
  color: #3fb883;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
@/domain/model/thing.model
