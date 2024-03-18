import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { ThingState, type Thing } from "@/domain/model/thing.model";

export const useThingsStore = defineStore("things", () => {
  const things: Ref<Thing[]> = ref([]);

  function updateThings(newThings: Thing[]) {
    things.value = newThings.sort((a, b) =>
      a.state === ThingState.DONE ? 1 : -1
    );
  }

  function addThing(newThing: Thing) {
    things.value.push(newThing);
  }

  function updateThing(updatedThing: Thing) {
    const index = things.value.findIndex((t) => t.uuid === updatedThing.uuid);
    if (index === -1) {
      throw new Error("Thing not found");
    }
    things.value[index] = updatedThing;
  }

  return { things, updateThings, addThing, updateThing };
});
