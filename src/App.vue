<script setup lang="ts">
import Header from "./components/Header.vue";
import List from "./components/List.vue";
</script>

<template>
  <Header msg="You did it!" />
  <main>
    <Suspense>
      <List />
    </Suspense>
  </main>
</template>

<style scoped></style>
./components/Header.vue
