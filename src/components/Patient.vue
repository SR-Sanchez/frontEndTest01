<script setup lang="ts">
import { ref } from 'vue'
import usePatientsStore from '../stores/patients.ts'
//CHANGE THIS TYPE
defineProps<{ patient }>()

function phoneNumber(phone: string) {
	return phone === 'None' ? 'Sin número' : phone
}

function returnList(field: string) {
	const items = field.split(',');
	return items
}

let showConfirm = ref(false)
let show = false

function toggle() {
	show = !show
	console.log(showConfirm.value)
	showConfirm.value = !showConfirm.value
	console.log(showConfirm.value)
}

const patientsStore = usePatientsStore()

function test(id: string) {
	console.log(id)
	return patientsStore.setResults(id)
	console.log(patientsStore.results.length)
}




</script>

<template>
	<td>{{ patient.id }}</td>
	<!--<td>{{ patient.id_number }}</td>
	<td>{{ patient.uid }}</td> -->
	<td>{{ patient.name }}</td>
	<td>{{ patient.age }}</td>
	<td>{{ phoneNumber(patient.phone) }}</td>

	<td class="gestion">{{ patient.gestion['gestion_type']}} {{ patient.gestion['last_contact'] }}</td>

	<td>{{ patient.regime }}</td>
	<!--<td>{{ patient.monitoring }}</td> -->
	<td>{{ patient.gestor }}</td>
	<!--<td>{{ patient.status }}</td>-->
	<!-- <td>{{ patient.care_plan }}</td> -->
	<td class="dropdown">
		Plan
		<button>
			&#9660
			<ul class="care_plan">
				<li v-for="item in returnList(patient.care_plan)">{{ item }}</li>
			</ul>
		</button>
		
	</td>
	
	<!--<td>{{ patient.intervention }}</td>-->
	<td class="dropdown">
		Clínicos
		<button>
			&#9660
			<ul class="uncontrolled">
				<li v-for="item in returnList(patient.clinical_data_uncontrolled)">{{ item }}</li>
			</ul>
		</button>
		
	</td>
	<!--<td>{{ patient.name_tag }}</td>-->
	<td>{{ patient.ips_name }}</td>
	<!--<td>{{ patient.ips_id }}</td>
	<td>{{ patient.gestion }}</td>
	<td>{{ patient.program }}</td> -->
	<td>
		<button v-on:click="toggle" :disabled="show">X</button>
	</td>
	<div v-if="showConfirm" class="transparent-background">
		<div class="confirm">
			<p>Are you sure?</p>
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
		/* overflow-y: hidden;
		overflow-x: hidden; */

		button {
			font-size: 12px;
			padding: 0px;

			.uncontrolled, .care_plan {
				display: none;
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
		}

		/**IF I HAVE TIME I SHOULD FIND A MORE ELEGANT SOLUTION TO THIS */
		button:focus {
			.uncontrolled, .care_plan {
				display: block;
			}
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

	/* button:focus {
		.delete {
			display: flex;
			flex-direction: column;
		}	
	} */

	

</style>