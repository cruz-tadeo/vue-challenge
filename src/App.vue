<script setup lang="ts">
import TheHeader from './components/UI/TheHeader.vue'
import TheBaseTemplate from './components/UI/TheBaseTemplate.vue'
</script>


<template>
  <the-base-template>
    <template v-slot:header >
      <the-header></the-header>
    </template>
    <template v-slot:contenido>
      <router-view />
    </template>
  </the-base-template>
</template>
