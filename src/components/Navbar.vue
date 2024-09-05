<script setup>

</script>

<template>
	<div class="sidebar">
    <h1><i class="fa-solid fa-heart-pulse"></i>ERES</h1>
    <h2>Menú principal</h2>
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
    <div class="card">
      Mira tu calendario de trabajo
      <i class="fa-solid fa-square-arrow-up-right"></i>
    </div>
    <div class="footer">
      <div>
        <b>Eres - Dashboard administrativo</b>
      </div>
      <br>
      <div>
        &copy; 2024 Todos los derechos reservados
      </div>
      <div>
        Hecho con <i class="fa-solid fa-heart"></i> por Sergio R.
      </div>
    </div>
  </div>
  
</template>

<style scoped>

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  padding-bottom: 1rem;
}

h1 {
  height: 10%;
  max-height: 5rem;
}
h2 {
  height: 5%;
  max-height: 5rem;
  min-height: 3rem;
}
ul {
  height: 40%;
  border: 2px solid white;
}
.footer {
  height: 20%;
  font-size: 0.75rem;
  border: 2px solid white;
}

h1, h2, ul,p {
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

.card {
  display: flex;
  flex-direction: column;
  border: 2px solid pink;
  width: 80%;
  text-align: left;
}

</style>