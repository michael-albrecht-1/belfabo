<script setup lang="ts">
import AddThing from "./components/AddThing.vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
</script>

<template>
  <Header msg="You did it!" />
  <main>
    <AddThing />
    <Suspense>
      <List />
    </Suspense>
  </main>
</template>

<style scoped></style>
./components/Header.vue
