import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Citas from "../views/Citas.vue";
import Doctor from "../views/Doctor.vue";
import Departamento from "../views/Departamento.vue";
import Pacientes from "../views/Pacientes.vue";
import Configuracion from "../views/Configuracion.vue";


const router = createRouter({
	//NEED TO CREATE THIS IN ORDER TO WORK
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/dashboard',
			name: 'dashboard',
			component: Dashboard
		},
		{
			path: '/citas',
			name: 'citas',
			component: Citas
		},
		{
			path: '/doctor',
			name: 'doctor',
			component: Doctor
		},
		{
			path: '/departamento',
			name: 'departamento',
			component: Departamento
		},
		{
			path: '/pacientes',
			name: 'pacientes',
			component: Pacientes
		},
		{
			path: '/configuracion',
			name: 'configuracion',
			component: Configuracion
		},
	]
})

export default router