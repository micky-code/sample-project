<template>
  <div id="app" class="min-h-screen flex flex-col bg-gray-100">
    <!-- Navigation Bar -->
    <nav class="bg-red-600 p-4 flex items-center justify-between">
      <!-- Logo and Links -->
      <div class="flex items-center space-x-4">
        <router-link to="/" class="text-white text-xl font-bold">P</router-link>

        <!-- Navigation Links -->
        <router-link to="/" class="text-white hover:text-yellow-400">Home</router-link>

        <router-link to="/about" class="text-white hover:text-yellow-400">About</router-link>
        
        <router-link to="/list" class="text-white hover:text-yellow-400">List</router-link>
        
      </div>
     
    </nav>
 <!-- <router-view></router-view> -->
    <div class="flex-grow">
      <router-view />
    </div>

    <footer class="bg-red-600 text-white text-center p-4 mt-4">
      &copy; 2024 Poscar
    </footer>
  </div>
</template>

<script setup>





</script>

<style>
/* Tailwind is handled directly by its utility classes, so no custom styles are necessary here */
</style>