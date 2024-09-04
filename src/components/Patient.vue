<script setup lang="ts">
import { ref } from 'vue'
import usePatientsStore from '../stores/patients.ts'
import { useRouter } from 'vue-router';
//CHANGE THIS TYPE
defineProps<{ patient }>()

function isEmpty(data: string | null) {
	return data === 'None' || data === null ? 'Sin dato' : data
}

//Creates an array of the string
function returnList(field: string) {
	const items = field.split(',');
	return items
}

//This code is for "deleting" a patient
let showConfirm = ref(false);
let showPlan= ref(false)
let showMenu= ref(false)

function toggle() {
	showConfirm.value = !showConfirm.value
}

function toggle2() {
	showPlan.value = !showPlan.value
}

function toggle3(){
	showMenu.value = !showMenu.value
}

const router = useRouter();
const patientsStore = usePatientsStore()

function test(id: string) {
	patientsStore.setResults(id)
	/**Couldn't get the page to re-render so I had to 
	 improvise this unelegant solution*/
	router.go(-1);
	router.go(1);
}

</script>

<template>
	<td>{{ patient.id }}</td>
	<td>{{ patient.name }}</td>
	<td>{{ patient.age }}</td>
	<td>{{ isEmpty(patient.phone) }}</td>

	<td class="gestion">
		{{ patient.gestion['gestion_type']}} 
		{{ patient.gestion['last_contact'] }}
	</td>

	<td>{{ isEmpty(patient.regime) }}</td>
	<td>{{ patient.gestor }}</td>
	<td class="dropdown">
		Plan
		<button v-on:click="toggle2()">&#9660</button>
		<ul v-if="showPlan" class="care_plan">
			<li v-for="item in returnList(patient.care_plan)">{{ item }}</li>
		</ul>
	</td>


	<td class="dropdown">
		Clínicos
		<button v-on:click="toggle3()">&#9660</button>
		<ul v-if="showMenu" class="uncontrolled">
			<li v-for="item in returnList(patient.clinical_data_uncontrolled)">{{ item }}</li>
		</ul>
	</td>


	<td>{{ patient.ips_name }}</td>
	<td>
		<button v-on:click="toggle">X</button>
	</td>
	<div v-if="showConfirm" class="transparent-background">
		<div class="confirm">
			<p>Por favor confirme su decisión</p>
			<button v-on:click="test(patient.id)">Borrar</button>
			<button v-on:click="toggle">Cancelar</button>
		</div>
	</div>
</template>

<style scoped>
	td {
		border: 1px solid #ddd;
		padding: 8px;
		white-space: nowrap; 
	}

	.dropdown {
		max-height: 16px;
		position: relative;

		.uncontrolled, .care_plan {
				list-style: none;
				position: absolute;
				background-color: bisque;
				padding: 8px;
				max-height: 80px;
				overflow-y: scroll;
				overflow-x: scroll;
				top: 50%;
				left: 0%;
				width: 100%;
				z-index: 1;
			}

		button {
			font-size: 12px;
			padding: 0px;
		}
	}

	/**Made this div in order not to let user select more X buttons (delete) */
	.transparent-background {
		height: 300px;
		width: 600px;
		position: absolute;
		top: 35%;
		left: 52%;
		z-index: 1;
	}

	.confirm {
		
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		backdrop-filter: blur(10px);
		padding: 12px;
		z-index: 2;
		max-width: 50%;
		

		button {
			margin:8px;
			width: 50%;
		}
	}
	

</style>