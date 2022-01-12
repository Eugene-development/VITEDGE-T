<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Header from './components/header/index.vue'
import Footer from './components/footer/index.vue'
</script>

<template>
  <Header/>
    <router-view/>
  <Footer/>
</template>

<style>
</style>
