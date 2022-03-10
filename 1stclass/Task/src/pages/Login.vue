<script setup lang="ts">
import { Login } from '../models/session';
import { ref } from 'vue'
let userName = ref('');
let password = ref('');
function login() {
    Login(userName.value, password.value)
}
</script>

<template>
    <section class="section">      
       <div class="columns">
       <div class="column is-4 is-offset-4">
           <form @submit.prevent="login">
		  <div class="field">
		  <p class="control has-icons-left has-icons-right">
		    <input class="input" placeholder="Username" v-model="userName">
		    <span class="icon is-small is-left">
		      <i class="fa fa-envelope"></i>
		    </span>
		    <span class="icon is-small is-right">
		      <i class="fa fa-check"></i>
		    </span>
		  </p>
		</div>
		<div class="field">
		  <p class="control has-icons-left">
		    <input class="input" type="password" placeholder="Password" v-model="password">
		    <span class="icon is-small is-left">
		      <i class="fa fa-lock"></i>
		    </span>
		  </p>
		</div>
		<div class="field">
		  <p class="control">
		    <button class="button is-success">
		      Login
		    </button>
		  </p>
		</div>
        </form>
      </div>         
       </div>
      </section>
</template>


<style scoped lang="css">
</style>