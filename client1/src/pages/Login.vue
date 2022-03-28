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
    <div class="box"> 
		<center><b>LOGIN</b></center>     
       <div class="columns">
       <div class="column is-4 is-offset-4">
           <form @submit.prevent="login">
		  <div class="field">
		  <p class="control has-icons-left has-icons-right">
		    <input class="input" placeholder="Username" v-model="userName">
		    <span class="icon is-small is-left">
		      <i class="fa fa-user"></i>
		    </span>
		    
		  </p>
		</div>
		<div class="field">
		  <p class="control has-icons-left">
		    <input class="input" type="password" placeholder="Password" v-model="password">
		    <span class="icon is-small is-left">
		      <i class="fa fa-key"></i>
		    </span>
		  </p>
		</div>
		
		<div class="field">
		  <p class="control">
		    <button class="button abc">
		      Login
		    </button>
			<router-link to="/contact">Got Problem?</router-link>
			</p>
			
			
		  
		  
		</div>
		
		
		
        </form>
      </div>         
       </div>
      </div>
	 
 
</template>


<style scoped lang="css">
.columns{
	margin-right: 6rem;
	margin-top: 2rem;
	margin-bottom: 6rem;
	margin-left: 5rem;
	
}
.box{
	margin-top: 6rem;
	margin-left: 15rem;
	margin-right: 15rem;
}
.abc{
	background-color: black;
	color: white;
}

</style>
    