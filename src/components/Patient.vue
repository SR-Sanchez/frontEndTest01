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

function toggle1() {
	showPlan.value = !showPlan.value
}
function toggle2(){
	showMenu.value = !showMenu.value
}
function toggle3() {
	showConfirm.value = !showConfirm.value
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

	<td style="padding-left: 1rem">{{ patient.id }}</td>
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
		<button v-on:click="toggle1()">&#9660</button>
		<ul v-if="showPlan" class="care_plan">
			<li v-for="item in returnList(patient.care_plan)">{{ item }}</li>
		</ul>
	</td>
	<td class="dropdown">
		Clínicos
		<button v-on:click="toggle2()">&#9660</button>
		<ul v-if="showMenu" class="uncontrolled">
			<li v-for="item in returnList(patient.clinical_data_uncontrolled)">{{ item }}</li>
		</ul>
	</td>
	<td>{{ patient.ips_name }}</td>
	<td>
		<button class="trash-button" v-on:click="toggle3"><i class="fa-regular fa-trash-can"></i></button>
	</td>

	<div v-if="showConfirm" class="transparent-background" style="padding-right: 1rem"> 
		<div class="confirm">
			<p>Por favor confirme su decisión</p>
			<button v-on:click="test(patient.id)">Borrar</button>
			<button v-on:click="toggle3">Cancelar</button>
		</div>
	</div>
	
</template>

<style scoped>

	td {
		padding: 0.5rem;
		white-space: nowrap;
		color: #000000b9;
	}

	.dropdown {
		max-height: 16px;
		position: relative;

		.uncontrolled, .care_plan {
				display: flex;
				flex-direction: column;
				list-style: none;
				position: absolute;
				background-color: #ffffff;
				box-shadow: 0 8px 12px #00000033;
				border-radius: 1rem;
				padding: 16px;
				max-height: 12.5rem;
				overflow-y: scroll;
				overflow-x: scroll;
				top: 50%;
				left: 0%;
				width: fit-content;
				max-width: 12.5rem;
				z-index: 1;
			}

		button {
			font-size: 12px;
			padding: 0.125rem 0.3rem;
			border-radius: 2rem;
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

	.trash-button {
		background-color: transparent;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		margin-left: 0.75rem;
		margin-right: 0.75rem;
		i {
			font-size: 1.25rem;
			color: #ff0000a2;
		}
		&:hover {
			border-color: #ff0000a2;
		}
	}

	.confirm {
		
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		background-color: #ffffff;
		box-shadow: 0 8px 12px #00000033;
		border-radius: 1rem;
		padding: 0.75rem;
		z-index: 2;
		max-width: 50%;
		
		button {
			margin: 0.5rem;
			width: 50%;
		}
	}

	.confirm button:first-of-type {
  	background-color: #ff0000a2; 
	}
	

</style>