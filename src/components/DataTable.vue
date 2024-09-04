<script setup lang="ts">
import { computed } from 'vue'
import usePatientsStore from '../stores/patients.ts'

const headings = [ 
	"Id",
	"# Identificación",
	"Id Único",
	"Nombre",
	"Edad",
	"Teléfono",
	"Régimen",
	"Monitoreo",
	"Gestor",
	"Estado",
	"Plan de Cuidado",
	"Intervención",
	"Datos Clínicos No Controlados",
	"Etiqueta de Nombre",
	"Nombre de IPS",
	"ID de IPS",
	"Gestión",
	"Programa"
];

const patientsStore = usePatientsStore()
let patients = patientsStore.results; //SHOULD THIS USE reactive?

const searchPatient = (obj: object, query: string) => {
  const lowerQuery = query.toLowerCase();
	for (const value of Object.values(obj)) {
		console.log("This is working")
        // Check if the value is a string and contains the search string
        if (typeof value === 'string' && value.toLowerCase().includes(lowerQuery)) {
            return value; // Match found
        }
    }
  return false; // No match found
};

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
        <!--<tr v-for="patient in filteredPatients" :key="patient.id">
					This is for iterating through the object (each patient) 
          <th v-for="(value, key) in patient" :key="key">{{ value }}</th>
        </tr> -->
				<tr v-for="patient in filteredPatients" :key="patient.id">
					<td v-for="(value, key) in patient" :key="key">{{ value }}</td>
					<!-- <td>{{ patient.id }}</td>
          <td>{{ patient.id_number }}</td>
          <td>{{ patient.uid }}</td>
          <td>{{ patient.name }}</td>
          <td>{{ patient.age }}</td>
          <td>{{ patient.phone }}</td>
          <td>{{ patient.regime }}</td>
          <td>{{ patient.monitoring }}</td>
          <td>{{ patient.gestor }}</td>
          <td>{{ patient.status }}</td>
          <td>{{ patient.care_plan }}</td>
          <td>{{ patient.intervention }}</td>
          <td>{{ patient.clinical_data_uncontrolled }}</td>
          <td>{{ patient.name_tag }}</td>
          <td>{{ patient.ips_name }}</td>
          <td>{{ patient.ips_id }}</td>
					<td>{{ patient.gestion }}</td>
					<td>{{ patient.program }}</td> -->
				</tr>

				<p v-if="filteredPatients.length === 0">No se encontraron pacientes.</p>
      </tbody>
		</table>
	</div>

</template>

<style scoped>
	table {
  width: 100%;
  border-collapse: collapse;
	}

	th, td {
		border: 1px solid #ddd;
		padding: 8px;
	}

	th {
	
	}
</style>