<script setup lang="ts">
import type { CreateThingPort } from "@/domain/ports/create-thing.port";
import { inject, ref } from "vue";

const createThingPort = inject<CreateThingPort>("createThingPort")!;
const thingTitle = ref("");
</script>

<template>
  <div class="item">
    <input type="text" placeholder="ajouter un truc" v-model="thingTitle" />
    <!-- submit button -->
    <button @click="createThingPort.execute(thingTitle)">ajouter</button>
  </div>
</template>

<style scoped>
button {
  margin-left: 1rem;
}
</style>
@/domain/model/thing.model
