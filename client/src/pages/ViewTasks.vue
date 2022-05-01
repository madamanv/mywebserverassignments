
<script setup lang="ts">
import session from "../models/session";
const currentUserTasks = session.user?.userTasks
console.log(currentUserTasks)
</script>

<template>
<div>
      <div class="card" style="display:flex" >
  
  <div class="container" style=" margin:40px;" >
    <router-link class="button abc " to="/Assigntask">Assigned tasks</router-link>
    <hr>
    <router-link class="button abc x" to="/ViewTasks">View Tasks</router-link>
   
  </div>
  <div class="card" style="width:70%; height:auto; margin:50px;">

  
  <div class="container">
  
  <ul>
    <li class="table-header xyz">
      <div class="col col-1 ">Title</div>
      <div class="col col-2">Due Date</div>
      <div class="col col-3">Asigned To</div>
      <div class="col col-4">Assigned By</div>
      <div class="col col-5">Description</div>
    </li>
    <li class="table-row" v-for="task in currentUserTasks" :key="task.task">
      <div class="col col-1" data-label="Title">{{task.task}}</div>
      <div class="col col-2" data-label="Due Date">{{task.dueDate}}</div>
      <div class="col col-3" data-label="Assigned To">{{session.user?.handle}}</div>
      <div class="col col-4" data-label="Assigned by">{{task.assignedBy}}</div>
      <div class="col col-5" data-label="Description">{{task.description}}</div>
    </li>
    
  </ul>
</div>

</div>
</div>
</div>
</template>


<style scoped>
.card {
  
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
 
}

 .abc{
	background-color: black;
	color: white;
  align-content: center;
  width: auto;
  
  
 }
 .button.is-active{
     color: white;
 }
 
.button:hover{
  opacity: 0.7;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}


.container {
  padding: 2px 16px;
}
* {
  box-sizing: border-box;
}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
input[type=datetime-local] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
 

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}



.button{
    padding-left: 70px;
    
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

body {
  font-family: 'lato', sans-serif;
}
.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  
  padding-top: 70px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
  
    
  
}


  li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .table-header {
    background-color: #080808;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .table-row {

    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
  }
  .col-1 {
    flex-basis: 10%;
  }
  .col-2 {
    flex-basis: 10%;
  }
  .col-3 {
    flex-basis: 15%;
  }
  .col-4 {
    flex-basis: 15%;
  }
  .col-5 {
      flex-basis: 20%;
  }
  
  @media all and (max-width: 767px) {
    .table-header {
      display: none;
      
    }
    
    li {
      display: block;
    }
    .col {
      
      flex-basis: 100%;
      
    }
    .col {
      display: flex;
      padding: 10px 0;
      
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
      }
    
  
  }

  .xyz{
      color: white;
  }
  .button {
      padding-left: 70px;
      padding-right: 30px;
      
  }
  .x{
      padding-right: 54px;
  }


</style>