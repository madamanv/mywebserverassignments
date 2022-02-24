<script setup lang="ts">

</script>


<template>
<div class="section">
  <div class="container is-one-quarter">
    <div class="columns">
      
    <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Component
        </p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save</a>
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
    </div>

    <div class="column is-half">
      <div class="panel">
          
          <div class="tabs is-boxed">
              <ul>
                <li class="is-active">
                  <a>
                    <span class="icon is-small"><i class="fas fa-clipboard-list"></i></span>
                    <span>All</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small"><i class="fas fa-calendar-times"></i></span>
                    <span>Current</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small"><i class="fas fa-calendar-day"></i></span>
                    <span>Completed</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span class="icon is-small"><i class="fas fa-calendar"></i></span>
                    <span>Upcoming</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="panel-block">

              <div class="field has-addons " style="width: 100%;">
                <div class="control has-icons-left is-expanded">
                    <input class="input is-primary" type="text" placeholder="New Task">
                    <span class="icon is-left">
                        <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="control">
                    <a class="button is-primary">
                        Add
                    </a>
                </div>

              </div>


            </div>
          <a class="panel-block" style="color: blue;" >
              <input type="checkbox" checked="">
              <span>Make Bulma great again</span>
          </a>
          <a class="panel-block" style="color: blue;" >
              <input type="checkbox">
              <span>Add some more features</span>
          </a>
          <a class="panel-block" style="color: blue;">
              <input type="checkbox">
              <span>Make a github account</span>
          </a>
          <a class="panel-block" style="color: blue;">
              <input type="checkbox">
              <span>Learn how to use github</span>
          </a>
          <a class="panel-block" style="color: blue;" >
              <input type="checkbox">
              <span>add a .gitignore file</span>
          </a>
        </div>
  </div>
    <div class="column is-one-quarter">
    <aside class="menu">
      <h1 class="title">
        Table of Contents
      </h1>
      <p class="subtitle">
        Inta-page Investigation    </p>
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><a>Dashboard</a></li>
        <li><a>Customers</a></li>
      </ul>
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
        <li><a>Team Settings</a></li>
        <li>
          <a class="is-active">Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li><a>Cloud Storage Environment Settings</a></li>
        <li><a>Authentication</a></li>
      </ul>
      <p class="menu-label">
        Transactions
      </p>
      <ul class="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
    </aside>
    </div>
    
    </div>
  </div>
  </div>
</template>

<style>
.is-completed {
        text-decoration: line-through;
    }
</style>