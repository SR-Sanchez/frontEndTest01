<script setup>

</script>

<template>
	<div class="sidebar">
    <h1>ERES</h1>
    <p>Menú principal</p>
    <ul>
      <li><router-link to="/dashboard">Dashboard</router-link></li>
      <li><router-link to="/citas">Citas</router-link></li>
      <li><router-link to="/doctor">Doctor</router-link></li>
      <li><router-link to="/departamento">Departamento</router-link></li>
      <li><router-link to="/paciente">Paciente</router-link></li>
      <li><router-link to="/configuracion">Configuración</router-link></li>
    </ul>
  </div>
</template>

<style scoped>

li {
	list-style: none;
}

</style>