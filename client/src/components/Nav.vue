<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from "vue-router";
import LoginBadge from './LoginBadge.vue';
const isOpen = ref(false);
</script>

<template>
  <nav class="navbar xyz" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
      <div class="img">
          <!-- <img src="src/assets/44.png" /> -->
          </div>
        
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': isOpen }"
          @click="isOpen = !isOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isOpen }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/"><b>Home</b></router-link>
          
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"><b>Tasks</b></a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/assignedtasks">Tasks Assigned</router-link>
              <router-link class="navbar-item" to="/viewAllTasks">All Tasks</router-link>
            </div>
          </div>
          
            
            
              <router-link class="navbar-item" to="/about"><b>About</b></router-link>
              
              <router-link class="navbar-item" to="/contact"><b>Contact</b></router-link>
              
              
            
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <login-badge />
          </div>

        </div>
      </div>
    
  </nav>
</template>

<style>
.img{
  height: 80px;
  width: 60px;
}
.xyz .navbar{
  background-color: black;
}
.navbar-dropdown:hover{
  background-color: black;
}
.is-hoverable{
  
}
</style>