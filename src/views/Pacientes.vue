<script setup lang="ts">
import AddNew from '../components/AddNew.vue';
import DataTable from '../components/DataTable.vue'
import InputSearch from '../components/InputSearch.vue'
</script>

<template>
	<div class="patient-heading">
		<AddNew/>
		<InputSearch/>
	</div>
	<div class="data-table">
		<DataTable/>
	</div>
	
</template>

<style scoped>
/* Patient heading styles */
.patient-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;
  padding: 1rem 0;
}

/* Data table styles */
.data-table {
  margin: 0 2rem;
  max-height: 37.5rem;
}
</style>