<script setup lang="ts">
import type { ItemModel } from "@/domain/model/item.model";

defineProps<{
  value: ItemModel;
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
  margin-right: 1rem;
  accent-color: #3fb883;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }
}
</style>
