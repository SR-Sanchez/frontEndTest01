<script setup lang="ts">
import Patient from './components/Patient.vue'
import Navbar from './components/Navbar.vue';
import PatientView from './views/PatientView.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="app">
    <Navbar />
    
    <div class="content">
      <!-- <Patient /> -->
      <!-- <PatientView /> -->
       <RouterView/>
    </div>
  </div>
</template>

<style scoped>
  #app {
  display: flex;
  height: 100vh; /* Ensure the app takes the full viewport height */
}

.content {
  margin-left: 48px; /* Match the width of the Navbar */
  padding: 20px;
  flex: 1; /* Allow content to take remaining space */
  overflow-y: scroll;
  overflow-x: scroll;
  height: 80%; /**MODIFY THIS */
}
</style>
