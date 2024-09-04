<script setup lang="ts">
//CHANGE THIS TYPE
defineProps<{ patient }>()

function phoneNumber(phone: string) {
	console.log(phone)
	return phone === 'None' ? 'Sin número' : phone
}

</script>

<template>
	<td>{{ patient.id }}</td>
	<!--<td>{{ patient.id_number }}</td>
	<td>{{ patient.uid }}</td> -->
	<td>{{ patient.name }}</td>
	<td>{{ patient.age }}</td>
	<td>{{ phoneNumber(patient.phone) }}</td>

	<td>{{ patient.gestion['gestion_type']}} {{ patient.gestion['last_contact'] }}</td>

	<td>{{ patient.regime }}</td>
	<!--<td>{{ patient.monitoring }}</td> -->
	<td>{{ patient.gestor }}</td>
	<!--<td>{{ patient.status }}</td>-->
	<td>{{ patient.care_plan }}</td>
	<!--<td>{{ patient.intervention }}</td>-->
	<td>{{ patient.clinical_data_uncontrolled }}</td>
	<!--<td>{{ patient.name_tag }}</td>-->
	<td>{{ patient.ips_name }}</td>
	<!--<td>{{ patient.ips_id }}</td>
	<td>{{ patient.gestion }}</td>
	<td>{{ patient.program }}</td> -->
</template>

<style scoped>
	td {
		border: 1px solid #ddd;
		padding: 8px;
	}
</style>