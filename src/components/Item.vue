<script setup lang="ts">
import type { Thing } from "@/domain/model/thing.model";

defineProps<{
  value: Thing;
}>();
</script>

<template>
  <div class="item">
    <input class="checkbox" type="checkbox" :checked="value.state === 'done'" />
    <p :class="value.state">{{ value.title }}</p>
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
