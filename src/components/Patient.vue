<script setup lang="ts">
//CHANGE THIS TYPE
defineProps<{ patient }>()

function phoneNumber(phone: string) {
	return phone === 'None' ? 'Sin número' : phone
}

function returnList(field: string) {
	const items = field.split(',');
	return items
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
	<td class="clinical_data_uncontrolled">
		Clínicos
		<button>&#9660
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
</template>

<style scoped>
	td {
		border: 1px solid #ddd;
		padding: 8px;
	}

	.clinical_data_uncontrolled {
		max-height: 16px;
		position: relative;
		/* overflow-y: hidden;
		overflow-x: hidden; */

		button {
			font-size: 12px;
			padding: 0px;


			.uncontrolled {
				display: none;
				list-style: none;
				position: absolute;
				background-color: bisque;
				max-height: 80px;
				overflow-y: scroll;
				overflow-x: scroll;
				top: 50%;
				left: 0%;
			}
		}

		/**IF I HAVE TIME I SHOULD FIND A MORE ELEGANT SOLUTION TO THIS */
		button:focus {
			.uncontrolled {
				display: block;
			}
		}
	}

	/* .uncontrolled {
		display: none;
		list-style: none;
		position: absolute;
		background-color: bisque;
		max-height: 80px;
		overflow-y: scroll;
		overflow-x: scroll;
		top: 50%;
		left: 0%;
	} */
</style>