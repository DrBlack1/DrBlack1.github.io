<template>
<!-- Template syntax enables us to declaratively render data to the DOM -->
  <div id="app" class="container">
    
    <img src="./assets/logo.png" class="logo">
    <h1> Jess's VueJS To Do List</h1>
    <ToDoList />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// Importing other components
import ToDoList from './components/ToDoList'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // Specify new components here - make sure to use commas to separate
    ToDoList,
  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  display: block;
  margin: 20px auto;
  height: 75px;
}

h1 {
  text-align: center;  
}
</style>
