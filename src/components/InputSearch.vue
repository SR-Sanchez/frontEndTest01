<!-- NEED TO STUDY THIS -->
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="input-search">
    <input
      type="text"
      placeholder="Buscar"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button>
      <Icon icon="carbon:search" />
    </button>
  </div>
</template>

<style lang="scss">

</style>
