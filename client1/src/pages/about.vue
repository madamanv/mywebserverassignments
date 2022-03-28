<script setup lang="ts">

</script>
<template>
<div class="container1">
    
  

  <div class="column">
    <div class="card">
      <!-- <img src="src/assets/3.jpg" alt="cs" style="width:100%"> -->
      <div class="container">
        <h2>Chandra Sekhar Marachu</h2>
        <p class="title">ADMIN</p>
        <p></p>
        <p>sekhar@example.com</p>
        <div class="sss"><button class="button">Contact</button></div>
      </div>
    </div>
  </div>
  
  

</div>
</template>



<style scoped>
*, *:before, *:after {
  box-sizing: inherit;
}
.container{
  padding-top: 70px;
}
.container1{
  padding-left:450px;
  
}
.sss{
  padding: 50px;
}
.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
  align-content: center ;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

</style>