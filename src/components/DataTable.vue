<script setup lang="ts">
import { computed } from 'vue'
import usePatientsStore from '../stores/patients.ts'
import Patient from './Patient.vue';
import { searchPatient } from '../utils/helpers.ts';
const headings = [ 
	"Id",
	// "# Identificación",
	// "Id Único",
	"Nombre",
	"Edad",
	"Teléfono",

	"Gestión",

	"Régimen",
	// "Monitoreo",
	"Gestor",
	// "Estado",
	"Plan de Cuidado",
	// "Intervención",
	"Datos Clínicos No Controlados",
	// "Etiqueta de Nombre",
	"Nombre de IPS",
	// "ID de IPS",
	// "Gestión",
	// "Programa"
	"",
];

const patientsStore = usePatientsStore()
let patients = patientsStore.results; //SHOULD THIS USE reactive?

console.log(patients[0].id)

// const searchPatient = (obj: object, query: string) => {
//   const lowerQuery = query.toLowerCase();
// 	for (const value of Object.values(obj)) {
//         // Check if the value is a string and contains the search string
//         if (typeof value === 'string' && value.toLowerCase().includes(lowerQuery)) {
//             return value; // Match found
//         }
//     }
//   return false; // No match found
// };

// Compute the filtered patients based on the search query
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
					<!-- <td v-for="(value, key) in patient" :key="key">{{ value }}</td> -->
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
	table {
  width: 100%;
  border-collapse: collapse; /**STUDY THIS MORE */
	
	}

	th, td {
		border: 1px solid #ddd;
		padding: 8px;
	}

	/* NEED TO DOUBLE CHECK THE FOLLOWING RULES */
	.results {
		max-height: 80%; /* Set this to the height you want for the scrollable area */
		overflow-y: auto;  /* Enable vertical scrolling */
		display: block;
	}

	thead th {
  position: sticky;  /* Makes the heading sticky */
  top: 0;            /* Stick to the top */
	background-color: #0a0a0a; /* Optional: Add a background color */
  z-index: 1;        /* Ensure the heading stays on top of the table body */
}

.patient-count-summary {
	text-align: left;
}
</style>