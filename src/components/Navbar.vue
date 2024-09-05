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

h1, h2, p, .card, .footer {
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
  /* align-items: center; */
  justify-content: space-between;
  padding-bottom: 1rem;
}

h1 {
  height: 10%;
  max-height: 5rem;
  color: #38935e;
  padding-top: 1rem;
  font-weight: 400;
  i{
    padding-right: 0.5rem;
  }
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
  margin: 0 2rem 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-items: center;
  max-height: 320px;
  
}

li {
	list-style: none;
  
  i {
    padding-right: 0.75rem;
    font-size: 1.25rem;
  }
}



a {
  width: 100%;
}

.nav-item {
  display: flex;
  padding: 0.75rem 0 0.75rem 2rem;
  color: #8c8f92;
  border-radius: 0 0 2rem 0;
  
  &:hover {
    background-color: #c9efd48e;
  }
}

.active {
  color: white;
  background: linear-gradient(to right, #2bc155, #71ec94); 
}

.card {
  display: flex;
  flex-direction: column;
  border: 2px solid pink;
  width: 80%;
  text-align: left;
  padding: 2em;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end; 
  height: 20%;
  min-height: fit-content;
  font-size: 0.75rem;
  color:#8c8f92;;
  border: 2px solid blue;
}

</style>