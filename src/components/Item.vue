<script setup lang="ts">
import { ThingState, type Thing } from "@/domain/model/thing.model";
import type { UpdateThingPort } from "@/domain/ports/update-thing.port";
import { useThingsStore } from "@/stores/thing";
import { inject, ref } from "vue";

const props = defineProps<{
  value: Thing;
}>();

const state = useThingsStore();

const updateThingPort = inject<UpdateThingPort>("updateThingPort")!;
const isChecked = ref(true);

const onCheckboxClick = () => {
  updateThingPort.execute({
    thing: {
      ...props.value,
      state: isChecked.value ? ThingState.DONE : ThingState.TODO,
    },
  });
  state.sortThings();
};
</script>

<template>
  <div class="item">
    <input
      class="checkbox"
      type="checkbox"
      :checked="value.state === 'done'"
      @click="onCheckboxClick"
    />
    <p :class="value.state">{{ value.title }} - {{ value.uuid }}</p>
  </div>
</template>

<style scoped>
.item {
  margin-top: 1rem;
  display: flex;
  position: relative;
}

.done {
  text-decoration: line-through;
}

input[type="checkbox"] {
  padding: 0;
  margin-right: 1rem;
  accent-color: #3fb883;
}
</style>
@/domain/model/thing.model
