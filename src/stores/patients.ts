import { defineStore } from 'pinia'

export default defineStore('patients', {
	state: () => ({
		"total_patients": 476,
		"results": [
					{
						"id": "2",
						"id_number": "2",
						"uid": "04fe99-21981c9a-07de-495b-ade9-7a975fd05880",
						"name": "Guillo Castaño",
						"age": 36,
						"phone": "000000000",
						"regime": "ALTO",
						"monitoring": null,
						"gestor": "Daniela Vargas",
						"status": "Activo",
						"care_plan": "Hipertensión, Farmacológico, Fallo Cardiaco, Diabetes",
						"intervention": "Actividad vencida",
						"clinical_data_uncontrolled": "Alimentación Saludable, Colesterol HDL, Colesterol LDL, Colesterol total, Ejercicio, Fuma, LDH, Peso",
						"name_tag": "Dificultades auditividas, Dificultades de movilidad, Discapacidad física",
						"ips_name": "Macromedica",
						"ips_id": 1,
						"gestion": {
								"patient_id": 2,
								"gestion_type": "Actividad vencida",
								"last_contact": "2024-08-30",
								"color": "Rojo",
								"code": "#ff3333"
						},
						"program": [
								{
										"program_id": 1
								},
								{
										"program_id": 5
								}
						]
				},
				{
						"id": "9999",
						"id_number": "9999",
						"uid": "d41d0e-9537e52c-0cc9-488f-b5f0-aabb680900c7",
						"name": "Jhonis Grisales",
						"age": 71,
						"phone": "3108952226",
						"regime": null,
						"monitoring": null,
						"gestor": "Daniela Vargas",
						"status": "Activo",
						"care_plan": "Renal, Hipertensión, Farmacológico, Diabetes, CAD",
						"intervention": "Actividad vencida",
						"clinical_data_uncontrolled": "Clasificación Barthel, Fuma, Glicemia, Peso, Presión Diastólica",
						"name_tag": "Dificultades auditividas, Dificultades de movilidad",
						"ips_name": "Katia health",
						"ips_id": 2,
						"gestion": {
								"patient_id": 9999,
								"gestion_type": "Cita vencida",
								"last_contact": "2024-09-01",
								"color": "Rojo",
								"code": "#ff3333"
						},
						"program": []
				},
				{
						"id": "10251",
						"id_number": "10251",
						"uid": "1f3b16-cdcc9be9-5c31-4083-9a1f-2ae7d0421adc",
						"name": "Paciente434",
						"age": 21,
						"phone": "4354325243543",
						"regime": null,
						"monitoring": null,
						"gestor": "Eder Castiblanco",
						"status": "Activo",
						"care_plan": "Renal, Farmacológico",
						"intervention": "Actividad vencida",
						"clinical_data_uncontrolled": "Colesterol total",
						"name_tag": "Paciente pluripatologico",
						"ips_name": "Katia health",
						"ips_id": 2,
						"gestion": {
								"patient_id": 10251,
								"gestion_type": "Actividad vencida",
								"last_contact": "2024-09-01",
								"color": "Rojo",
								"code": "#ff3333"
						},
						"program": []
				},
				{
						"id": "10351",
						"id_number": "30318813",
						"uid": "1ddc28-d8702c3c-b9d1-410d-9baa-634eee2f509d",
						"name": "Ana Perez",
						"age": 71,
						"phone": "311688999",
						"regime": "ALTO",
						"monitoring": null,
						"gestor": "Daniela Vargas",
						"status": "Activo",
						"care_plan": "CAD",
						"intervention": "Cita proxima a vencer",
						"clinical_data_uncontrolled": "Colesterol HDL, Consumo de Sustancias Psicoactivas, Ecografía primer trimestre, Ecografía segundo trimestre, Embarazo Multiple, Historial de Prematuridad, Presión Diastólica, Primigesta, Sobrepeso Materno",
						"name_tag": "Dificultades auditividas, Dificultades de movilidad, Discapacidad física, No adherente",
						"ips_name": "Saludtotal",
						"ips_id": 3,
						"gestion": {
								"patient_id": 10351,
								"gestion_type": "Cita proxima a vencer",
								"last_contact": "2024-11-12",
								"color": "Verde",
								"code": "#5db3a8"
						},
						"program": []
				},
				{
						"id": "10352",
						"id_number": "10352",
						"uid": "062d5e-55afe31a-ae70-43db-9208-522f22b2d43c",
						"name": "Paciente433",
						"age": 24,
						"phone": "3116889999",
						"regime": null,
						"monitoring": null,
						"gestor": "Eder Castiblanco",
						"status": "Activo",
						"care_plan": "Renal, Farmacológico",
						"intervention": "Actividad vencida",
						"clinical_data_uncontrolled": "Fuma",
						"name_tag": "Dificultades auditividas, Dificultades de movilidad, No adherente",
						"ips_name": "Katia health",
						"ips_id": 2,
						"gestion": {
								"patient_id": 10352,
								"gestion_type": "Actividad vencida",
								"last_contact": "2024-09-01",
								"color": "Rojo",
								"code": "#ff3333"
						},
						"program": []
				},
				{
						"id": "10361",
						"id_number": "10361",
						"uid": "dae353-bb962ea8-4ade-48d6-8621-f79d90140319",
						"name": "Maria Perez",
						"age": 71,
						"phone": "6758567",
						"regime": "ALTO",
						"monitoring": null,
						"gestor": "Eder Castiblanco",
						"status": "Activo",
						"care_plan": "Renal, Farmacológico, CAD",
						"intervention": "Actividad vencida",
						"clinical_data_uncontrolled": "Ecografía primer trimestre, Ecografía segundo trimestre, Fuma, Hábitos Tóxicos, Sobrepeso Materno",
						"name_tag": "Dificultades de movilidad",
						"ips_name": "Katia health",
						"ips_id": 2,
						"gestion": {
								"patient_id": 10361,
								"gestion_type": "Actividad vencida",
								"last_contact": "2024-09-01",
								"color": "Rojo",
								"code": "#ff3333"
						},
						"program": []
				},
				{
						"id": "10371",
						"id_number": "10371",
						"uid": "eb87b9-1e3becb9-35ca-4cb5-a369-0854d092deb0",
						"name": "Paciente453",
						"age": 76,
						"phone": "None",
						"regime": "ALTO",
						"monitoring": null,
						"gestor": "Eder Castiblanco",
						"status": "Activo",
						"care_plan": "Renal, Farmacológico, Fallo Cardiaco, Diabetes",
						"intervention": "Actividad vencida",
						"clinical_data_uncontrolled": "Glicemia, Perímetro abdominal, Peso, Presión Diastólica",
						"name_tag": "Dificultades auditividas, No adherente",
						"ips_name": "Katia health",
						"ips_id": 2,
						"gestion": {
								"patient_id": 10371,
								"gestion_type": "Actividad vencida",
								"last_contact": "2024-09-01",
								"color": "Rojo",
								"code": "#ff3333"
						},
						"program": []
				},
				{
						"id": "10381",
						"id_number": "10381",
						"uid": "e169c9-dda8faed-a276-4544-93a4-040fee259847",
						"name": "Paciente27",
						"age": 2,
						"phone": "None",
						"regime": "ALTO",
						"monitoring": null,
						"gestor": "Orfa Linares",
						"status": "Activo",
						"care_plan": "Renal, Hipertensión, Fallo Cardiaco, Diabetes",
						"intervention": "Actividad vencida",
						"clinical_data_uncontrolled": "Glicemia, Perímetro abdominal, Peso, Presión Diastólica",
						"name_tag": null,
						"ips_name": "Nueva eps",
						"ips_id": 0,
						"gestion": {
								"patient_id": 10381,
								"gestion_type": "Actividad vencida",
								"last_contact": "2024-09-01",
								"color": "Rojo",
								"code": "#ff3333"
						},
						"program": []
				},
				{
						"id": "10391",
						"id_number": "10391",
						"uid": "bf084b-73b15714-47a6-479d-ae46-0cd334ccfb92",
						"name": "Paciente65",
						"age": 57,
						"phone": "None",
						"regime": "MEDIO",
						"monitoring": null,
						"gestor": "Eder Castiblanco",
						"status": "Activo",
						"care_plan": "Renal, Farmacológico, Fallo Cardiaco, Diabetes",
						"intervention": "Actividad vencida",
						"clinical_data_uncontrolled": "Colesterol LDL, Perímetro abdominal, Peso, Presión Diastólica",
						"name_tag": "Sin dato, VIP",
						"ips_name": "Katia health",
						"ips_id": 2,
						"gestion": {
								"patient_id": 10391,
								"gestion_type": "Actividad vencida",
								"last_contact": "2024-09-01",
								"color": "Rojo",
								"code": "#ff3333"
						},
						"program": []
				},
				{
						"id": "10401",
						"id_number": "10401",
						"uid": "f9a095-8013c2ac-dbf8-4143-99a4-08c6a0ee901b",
						"name": "Paciente356",
						"age": 71,
						"phone": "343444",
						"regime": "ALTO",
						"monitoring": null,
						"gestor": "Orfa Linares",
						"status": "Activo",
						"care_plan": "Renal, Diabetes",
						"intervention": "Actividad vencida",
						"clinical_data_uncontrolled": "Colesterol LDL, Glicemia, Peso, Presión Diastólica, TGO",
						"name_tag": null,
						"ips_name": "Nueva eps",
						"ips_id": 0,
						"gestion": {
								"patient_id": 10401,
								"gestion_type": "Cita vencida",
								"last_contact": "2024-09-01",
								"color": "Rojo",
								"code": "#ff3333"
						},
						"program": []
				}
		],
		searchQuery: ''
	}),

	
	actions: {
		setSearchQuery(query: string) {
			this.searchQuery = query
		},

		setResults(id: string) {
			console.log('Updating results...');
			this.results = this.results.filter(patient => patient.id != id );
			console.log('Results updated:', this.results[0]);
		}
	}
})

