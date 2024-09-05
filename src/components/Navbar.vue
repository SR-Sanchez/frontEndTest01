<script setup>

</script>

<template>
	<div class="sidebar">
    <h1><i class="fa-solid fa-heart-pulse"></i>ERES</h1>
    <h2>Menú principal</h2>
    <div>
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
    <!--HAVE TO MAKE THIS INTERACTIVE-->
    <div class="card-container" v-on:click="console.log('hello')">
      <div class="card">
      Mira tu calendario de trabajo
      <i class="fa-solid fa-square-arrow-up-right"></i>
      </div>
    </div>
    <div class="footer">
      <div>
        <b>Eres - Dashboard administrativo</b>
      </div>
      <div>
        &copy; 2024 Todos los derechos reservados
      </div>
      <div class="made">
        Hecho con <i class="fa-solid fa-heart"></i> por Sergio R.
      </div>
    </div>
  </div>
  
</template>

<style scoped>
/* General styles for heading, paragraphs, card containers, and footer */
h1, h2, p, .card-container, .footer {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  margin-left: 2rem; 
  margin-right: 2rem; 
}

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1rem;
  height: 100%;
}

h1 {
  height: 10%;
  max-height: 5rem;
  color: #38935e;
  padding-top: 1rem;
  font-weight: 400;
}

h1 i {
  padding-right: 0.5rem; 
}

h2 {
  height: 5%;
  max-height: 5rem;
  min-height: 3rem;
  font-size: 1.25rem;
  font-weight: 500;
}

ul {
  height: 40%;
  margin-right: 2rem; 
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 320px;
}

li {
  list-style: none;
}

li i {
  padding-right: 0.75rem;
  font-size: 1.25rem;
}

a {
  width: 100%;
}

.nav-item {
  display: flex;
  padding: 0.75rem 0 0.75rem 2rem;
  color: #8c8f92;
  border-radius: 0 0 2rem 0;
}

.nav-item:hover {
  background-color: #c9efd48e;
}

.active {
  color: white;
  background: linear-gradient(to right, #2bc155, #71ec94); 
}

.card-container {
  height: 30%;
}

.card-container .card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem 2rem;
  color: #ffffff;
  background-color: #ff6d4c;
  border-radius: 1.5rem;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end; 
  min-height: fit-content;
  font-size: 0.75rem;
  color: #8c8f92;
}

.footer .made {
  padding-top: 0.75rem;
}

.footer i {
  color: #ff00006c;
}
</style>