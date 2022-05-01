<script setup lang="ts">
import session from "../models/session";
import { getByHandler, addTask } from "../models/session";
import { ref } from 'vue'
import * as userList from "../models/user"


const title = ref('');
const date = ref('');
const assignedTo = ref('');
const assignedBy = ref('');
const description = ref('');
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
  
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }
function newTask() {
  getByHandler(assignedTo.value).then(response => {
  const user = response;
  user?.userTasks.unshift({
    task: title.value,
          dueDate: date.value,
          assignedBy: session.user?.handle,
          description: description.value
  })
  addTask(user);
  });
}


interface btn{
  readonly inputElement : HTMLInputElement;
}
</script>

<template>
<div>
  <div class="card" style="display:flex" >
  
  <div class="container" style=" margin:40px;" >
    <router-link class="button abc x " to="/Assigntask">Assigned tasks</router-link>
    <hr>
    <router-link class="button abc xyz" to="/ViewTasks">View Tasks</router-link>
   
  </div>
  <div class="card" style="width:70%; height:auto; margin:50px;">
  <div class="container">
  <form ref="addTask" v-on:submit.prevent="newTask()" >
    <div class="row">
      <div class="col-25">
        <label for="title">Title</label>
      </div>
      
      <div class="col-75">
        <input type="text" placeholder="write the task...." id="title_name" name="title_name" v-model="title">
      </div>
    </div>
    <div class="row ">
      <div class="col-25">
        <label for="date">Due Date</label>
      </div>
      <div class="col-75">
        <input type="datetime-local" v-model="date">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="assignedTo">Assign to</label>
      </div>
      <div class="col-75">
        <select id="assignedTo" name="assignedTo" v-model="assignedTo">
          <option v-for="user in session.allUsers" :key="user.firstName" v-bind:value="user.handle">{{user.handle}}</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="country">Assigned by</label>
      </div>
      <div class="col-75">
        <select  v-model="assignedBy">
          <option> {{session.user?.handle}} </option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Description</label>
      </div>
      <div class="col-75 clear">
        <textarea class="clear" v-model="description"  placeholder="Write something.." style="height:200px" ></textarea>
      </div>
    </div>
    <div class="btn">
    <button class="button abc x btn">Add Task</button>
    </div>
  </form>
</div>
</div>
</div>

</div>
</template>

<style scoped>

.xyz{
  padding-right: 60px;
}
.x{
  padding-right: 31px;
}
.card {
  
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
 
}
.button.is-active{
  color: white;
}


 .abc{
	background-color: black;
	color: white;
  align-content: center;
  width: auto;
  padding-left: 70px;
  
  
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





.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  padding-top: 50px;
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
.col75{
  width: 9999975%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

</style>