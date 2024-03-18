import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import type { Thing } from "@/domain/model/thing.model";

export const useThingsStore = defineStore("things", () => {
  const things: Ref<Thing[]> = ref([]);

  function updateThings(newThings: Thing[]) {
    things.value = newThings;
  }

  function addThing(newThing: Thing) {
    things.value.push(newThing);
  }

  return { things, updateThings, addThing };
});
