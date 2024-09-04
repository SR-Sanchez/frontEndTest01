<!-- NEED TO STUDY THIS -->
<script setup>
// defineProps(['modelValue'])
// defineEmits(['update:modelValue'])
// import { computed } from 'vue'
// import usePatientsStore from '../stores/patients.ts'
import { ref } from 'vue';
import usePatientStore from '../stores/patients.ts';

const patientsStore = usePatientStore();
// const localsearchQuery = patientsStore.searchQuery;
// const localSearchQuery = ref(patientsStore.searchQuery);

// const localsearchQuery = computed({
//   get: () => patientsStore.searchQuery,
//   set: (value) => { patientsStore.searchQuery = value; }
// });

// Function to handle change event
const handleChange = () => {
  // patientsStore.setSearchQuery(localSearchQuery.value);
  patientsStore.setSearchQuery('hello')
  console.log(patientsStore.searchQuery)
};

</script>

<template>
  <div class="input-search">
    <!-- <input
      type="text"
      placeholder="Buscar"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button>
      <Icon icon="carbon:search" />
    </button> -->
    <input  placeholder="Buscar..." />
  </div>
  <button @click="handleChange"></button>
</template>

<style lang="scss">

</style>
