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
	.patient-heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* border: 2px solid green; */
		margin: 0 2rem;
		padding: 1rem 0;
	}

	.data-table {
		margin: 0 2rem;
		max-height: 37.5rem;
		/* padding: 1rem; */
  	padding-top: 0;
	}
</style>