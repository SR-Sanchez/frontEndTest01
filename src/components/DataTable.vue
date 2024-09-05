<script setup lang="ts">
import { computed } from 'vue'
import usePatientsStore from '../stores/patients.ts'
import Patient from './Patient.vue';
import { searchPatient } from '../utils/helpers.ts';
const headings = [ 
	"# Id",
	"Nombre",
	"Edad",
	"Teléfono",
	"Gestión",
	"Régimen",
	"Gestor",
	"Plan de Cuidado",
	"Datos Clínicos",
	"Nombre de IPS",
	"",
];

const patientsStore = usePatientsStore()
let patients = patientsStore.results; 

const filteredPatients = computed(() => {
  const query = patientsStore.searchQuery;
  if (!query) {
		return patients
	};

  return patients.filter(patient => searchPatient(patient, query));
});

</script>

<template>
	<div class="results">
		<table>
			<thead>
				<tr>
					<th v-for="heading in headings" :key="heading">{{ heading }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="patient in filteredPatients" :key="patient.id">
					<Patient :patient="patient"/>
				</tr>

				<p v-if="filteredPatients.length === 0">No se encontraron pacientes.</p>
      </tbody>
		</table>
	</div>
	<div class="patient-count-summary">
		Mostrando {{ filteredPatients.length }} de {{ patientsStore.total_patients }}
	</div>
</template>

<style scoped>
	
	.results {
		max-height: 37.5rem;
		overflow-y: auto;
		display: block;
	}

	table {
		border-collapse: collapse;
		text-align: left;
	}

	table tr:nth-child(even) {
  	background-color: #ffff; 
	}

	table tr:nth-child(odd) {
		background-color: #f2f2f2; 
	}


	th, td {
		padding: 0.5rem;
	}

	td {
		border-style: none;
	}

	thead th {
		font-weight: 600;
		position: sticky; 
		top: 0;
		background-color: #fff;
		z-index: 1;  
}

.patient-count-summary {
	padding-top: 0.5rem;
	text-align: left;
	font-weight: 500;
}
</style>