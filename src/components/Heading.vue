<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';

/*This seems overly complicated for just display this,
Need to study Vue more*/
const route = useRoute()
const path = ref(route.path)
watch(() => route.path, (newPath) => {
	path.value = newPath
})

const getPath = computed(() => {
	switch(path.value){
		case '/configuracion':
			return "Configuración";
		case '/dashboard':
			return "Dashboard";
		case '/citas':
			return "Citas";
		case '/doctor':
			return "Doctor";
		case '/departamento':
			return "Departamento";
		case '/pacientes':
			return "Pacientes";
		default: "Need to update route!!"
	}
})
</script>

<template>
	<div class="header">
		<div class="container-left">
			<i class="fa-solid fa-bars-staggered"></i>
			<p>{{ getPath }}</p>
		</div>
		<div class="container-right">
			<i class="fa-regular fa-bell"></i>
			<i class="fa-solid fa-user-doctor"></i>
			<p>Bienvenido,<b>Usuario</b> </p>
		</div>
	</div>
	
</template>

<style scoped>

p {
	margin: 0;
}

.header, .container-left, .container-right {
	display: flex;
	align-items: center;
}

.header{
  border: 2px solid green;
	justify-content: space-between;
}

.container-left{
	border: 2px solid purple;
	font-size: 1.25rem;
	i{
		padding-right: 0.5rem;
	}
}

.container-right{
	border: 2px solid purple;
	i{
		padding-right: 0.5rem;
	}
}

</style>