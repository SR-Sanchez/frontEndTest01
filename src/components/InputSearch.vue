<script setup lang="ts">

import { ref } from 'vue';
import usePatientStore from '../stores/patients.ts';

const patientsStore = usePatientStore();
const localSearchQuery = ref('');


// Function to handle change event
const handleChange = () => {
  patientsStore.setSearchQuery(localSearchQuery.value)
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
    display: flex;
    align-items: center;
    box-shadow: 0 1px 0 1px #9d9e9a36;
    border-radius: 2rem;
    padding: 0rem 1rem;
    height: 2.75rem;
    background-color: #fff;
    color:#8c8f92;

    input {
      border: none;
      font-size: 1rem;
      width: 15rem;
      height: 95%;
      color:#8c8f92;
      outline: none;
    }

    i{
      padding-left: 0.5rem;
      font-size: 1.25rem;
    }
  }
</style>
