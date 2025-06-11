<template>
  <!-- component -->
  <!-- Header Navbar -->
  <TopMenu />

  <!-- Home View -->
  <RouterView />
  <!-- Footer -->

  <CustomeFooter />
</template>
<script setup lang="ts">
import CustomeFooter from '../components/CustomeFooter.vue';
import TopMenu from '../components/TopMenu.vue';
</script>
