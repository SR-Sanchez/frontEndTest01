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
	
	<DataTable/>
</template>

<style scoped>
	.patient-heading{
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 2px solid green;
	}
</style>