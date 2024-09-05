<!-- NEED TO STUDY THIS -->
<script setup lang="ts">

import { ref } from 'vue';
import usePatientStore from '../stores/patients.ts';

const patientsStore = usePatientStore();
const localSearchQuery = ref('');


// Function to handle change event
const handleChange = () => {
  patientsStore.setSearchQuery(localSearchQuery.value)
  // console.log(`localSearchQuery.value is ${localSearchQuery.value}`)
  // console.log(patientsStore.searchQuery)
};

</script>

<template>
  <div class="input-search">
    <input v-model="localSearchQuery" @input="handleChange" placeholder="Buscar..." />
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
</template>

<style scoped>
  .input-search{
    border: 2px solid rgb(200, 255, 0);
  }
</style>
