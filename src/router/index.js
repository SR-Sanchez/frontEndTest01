import { createRouter, createWebHistory } from "vue-router";
import PatientView from '../views/PatientView.vue';

const router = createRouter({
	//NEED TO CREATE THIS IN ORDER TO WORK
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/patients',
			name: 'patients',
			component: PatientView
		}
	]
})

export default router