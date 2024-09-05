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
			<p>Bienvenido, <b>Usuario</b> </p>
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
	background-color: #ffffff;
}

.header{
	justify-content: space-between;
	height: 10%;
  max-height: 5rem;
  /* padding-top: 1rem; */
	
  font-weight: 400;
}

.container-left{
	/* border: 2px solid purple; */
	margin-left: 2rem;
	font-size: 1.5rem;
	font-weight: 600;
	i{
		padding-right: 1rem;
	}
}

.container-right{
	/* border: 2px solid purple; */
	margin-right: 2rem;
	i{
		font-size: 1.5rem;
		box-shadow: 0 0 4px #2ac055be;
		border-radius: 2rem;
		padding-right: 0.5rem;
		padding-left: 0.5rem;
		margin: 0 0.5rem;
		padding: 0.5rem 0.65rem
	}
}

</style>