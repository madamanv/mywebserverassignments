<script setup lang="ts">
    import session, { Logout } from "../models/session";
</script>

<template>
    <div class="buttons" v-if="!session.user">
        <router-link class="button " to="/signup">
            <strong>Sign up</strong>
        </router-link>
        <router-link class="button is-light" to="/login">
           <strong> Log in</strong>
        </router-link>
    </div>
    <div class="buttons" v-else>
        
        <a class="button abc" @click="Logout()">
            <strong>Log out</strong>
        </a>
    </div>
</template>

<style scoped lang="scss">
    
    .abc{
	background-color: black;
	color: white;
}
</style>