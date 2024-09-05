<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Heading from './components/Heading.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <Heading/>
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
  #app {
  display: flex;
  height: 100vh; /* Ensure the app takes the full viewport height */
  min-height: 400px;
  max-height: 50rem; /**MAY NEED TO CHANGE THIS */
  display: grid;
  grid-template-columns: 20% 78% auto;
}

.content {
  padding: 1rem;
  padding-top: 0;
  overflow-y: scroll;
  overflow-x: scroll;
  height: 100%;
  border: 2px solid red;
}
</style>
