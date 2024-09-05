<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Heading from './components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="app">
    <div class="navbar-container">
      <Navbar />
    </div>
    <div class="content">
      <Heading/>
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>
  #app {
  height: 100vh; /* Ensure the app takes the full viewport height */
  min-height: 37.5rem;
  max-height: 50rem; /**MAY NEED TO CHANGE THIS */
  display: flex;
}

.content {
  overflow-y: scroll;
  overflow-x: scroll;
  height: 100%;
  width: 100%;
  border: 2px solid red;
  background-color: #f4f9f5;
}
</style>
