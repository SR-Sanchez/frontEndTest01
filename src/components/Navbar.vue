<script setup>

</script>

<template>
	<div class="sidebar">
    <h1>ERES</h1>
    <p>Menú principal</p>
    <ul>
      <li><router-link to="/dashboard" exact-active-class="active" class="nav-item">Dashboard</router-link></li>
      <li><router-link to="/citas" exact-active-class="active" class="nav-item">Citas</router-link></li>
      <li><router-link to="/doctor" exact-active-class="active" class="nav-item">Doctor</router-link></li>
      <li><router-link to="/departamento" exact-active-class="active" class="nav-item">Departamento</router-link></li>
      <li><router-link to="/pacientes" exact-active-class="active" class="nav-item">Pacientes</router-link></li>
      <li><router-link to="/configuracion" exact-active-class="active" class="nav-item">Configuración</router-link></li>
    </ul>
  </div>
</template>

<style scoped>

li {
	list-style: none;
}

.nav-item {
  color: white;

  &:hover {
    background-color: aquamarine;
  }
}

.active {
  background-color: aqua;
}

</style>