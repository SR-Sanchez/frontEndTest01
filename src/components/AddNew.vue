<script setup lang="ts">

</script>

<template>
  <button class="add-new">
		+ Añadir
  </button>
</template>

<style scoped>
  .add-new{
    /* border: 2px solid rgb(200, 255, 0); */
  }

  button {
    border-radius: 2rem;
    /* padding-left: 3rem;
    padding-right: 3rem; */
    padding: 0.5rem 3rem
  }
  
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

</style>
