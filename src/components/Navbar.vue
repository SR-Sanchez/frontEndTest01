<script setup>

</script>

<template>
	<div class="sidebar">
    <h1><i class="fa-solid fa-heart-pulse"></i>ERES</h1>
    <p>Menú principal</p>
    <ul>
      <li><router-link to="/dashboard" exact-active-class="active" class="nav-item">
        <i class="fa-solid fa-server"></i>Dashboard
      </router-link></li>
      <li><router-link to="/citas" exact-active-class="active" class="nav-item">
        <i class="fa-solid fa-calendar-days"></i>Citas
      </router-link></li>
      <li><router-link to="/doctor" exact-active-class="active" class="nav-item">
        <i class="fa-solid fa-stethoscope"></i>Doctor
      </router-link></li>
      <li><router-link to="/departamento" exact-active-class="active" class="nav-item">
        <i class="fa-solid fa-house"></i>Departamento
      </router-link></li>
      <li><router-link to="/pacientes" exact-active-class="active" class="nav-item">
        <i class="fa-solid fa-hospital-user"></i>Pacientes
      </router-link></li>
      <li><router-link to="/configuracion" exact-active-class="active" class="nav-item">
        <i class="fa-solid fa-gear"></i>Configuración
      </router-link></li>
    </ul>
  </div>
</template>

<style scoped>

h1, p, ul {
  margin: 0;
  padding: 0;
}

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