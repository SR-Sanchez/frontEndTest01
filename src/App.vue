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
/* App container styles */
#app {
  height: 100vh;
  min-height: 37.5rem;
  max-height: 50rem;
  max-width: 1800px;
  display: flex;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

/* Content styles */
.content {
  overflow: auto; /* Handles both vertical and horizontal scrolling */
  height: 100%;
  width: 100%;
  background-color: #f4f9f5;
}
</style>
